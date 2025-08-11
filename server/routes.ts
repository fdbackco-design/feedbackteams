import type { Express } from "express";
import { createServer, type Server } from "http";
import { google } from "googleapis";
import rateLimit from "express-rate-limit";
import z from "zod";

// ── Gmail OAuth2 client ───────────────────────────────────────────────────────
const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID!,
  process.env.GMAIL_CLIENT_SECRET!,
  process.env.GMAIL_REDIRECT_URI!,
);

// 운영은 시크릿에만 저장된 refresh_token 사용
if (process.env.GMAIL_REFRESH_TOKEN) {
  oAuth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });
}

// ── helpers ──────────────────────────────────────────────────────────────────
function buildRawEmail({
  to,
  from,
  subject,
  html,
}: {
  to: string;
  from: string;
  subject: string;
  html: string;
}) {
  const lines = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "",
    html,
  ];
  return Buffer.from(lines.join("\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

const sendSchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().max(200).optional().default(""),
  email: z.string().email(),
  phone: z.string().max(50).optional().default(""),
  inquiryType: z.string().max(100).optional().default(""),
  message: z.string().min(1).max(5000),
});

// ── register routes ───────────────────────────────────────────────────────────
export async function registerRoutes(app: Express): Promise<Server> {
  // 기본 보안 헤더(간단 버전)
  app.disable("x-powered-by");

  // 레이트 리밋(이메일 폭주 방지)
  const limiter = rateLimit({ windowMs: 60_000, max: 10 });
  app.use("/api/send-email", limiter);

  // (선택) 관리자 전용 인증 키로 보호
  const ADMIN_KEY = process.env.ADMIN_KEY;

  // 1) OAuth 시작(운영에선 잠그세요)
  app.get("/api/auth/gmail", (req, res) => {
    if (ADMIN_KEY && req.headers["x-admin-key"] !== ADMIN_KEY) {
      return res.status(403).send("Forbidden");
    }
    // CSRF 방지용 state(난수)
    const state = crypto.randomUUID();
    res.cookie("oauth_state", state, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    const url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      include_granted_scopes: false,
      scope: ["https://www.googleapis.com/auth/gmail.send"],
      state,
    });
    res.redirect(url);
  });

  // 2) OAuth 콜백(이제 토큰을 화면/로그에 절대 출력하지 않음)
  app.get("/api/oauth2callback", async (req, res) => {
    try {
      const { code, state } = req.query;
      const saved = req.cookies?.["oauth_state"];
      if (!saved || state !== saved)
        return res.status(400).send("Invalid state");
      res.clearCookie("oauth_state");

      const { tokens } = await oAuth2Client.getToken(String(code));
      // 운영에서는 refresh_token을 로그/화면에 출력하지 않습니다.
      // 이미 시크릿에 저장된 값을 계속 사용합니다(회전 필요 시에만 교체).
      if (tokens.refresh_token) {
        // 필요 시 수동 회전: 토큰 값 확인 후 Replit Secrets 갱신 → 재배포
        console.info(
          "OAuth OK (refresh_token received). Update secrets manually if rotating.",
        );
      }
      oAuth2Client.setCredentials({
        refresh_token: process.env.GMAIL_REFRESH_TOKEN,
      });

      res.send("<h3>Gmail 인증 완료</h3><p>창을 닫으셔도 됩니다.</p>");
    } catch (e) {
      console.error("OAuth callback error:", e);
      res.status(500).send("OAuth error");
    }
  });

  // 3) 이메일 발송
  app.post("/api/send-email", async (req, res) => {
    try {
      if (!process.env.GMAIL_REFRESH_TOKEN) {
        return res
          .status(503)
          .json({ ok: false, needAuth: true, error: "Gmail not configured" });
      }
      // 입력 검증
      const data = sendSchema.parse(req.body);

      if (!oAuth2Client.credentials.refresh_token) {
        oAuth2Client.setCredentials({
          refresh_token: process.env.GMAIL_REFRESH_TOKEN,
        });
      }
      const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

      const to = "fdbackco@gmail.com";
      const from = "fdbackco@gmail.com";
      const subject = `[FeedBack 문의] ${data.inquiryType || "일반"} - ${data.name}`;

      const safeMsg = data.message.replace(/</g, "&lt;");
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#2563eb;padding-bottom:10px;border-bottom:2px solid #2563eb">새 문의가 도착했습니다</h2>
          <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;padding:12px">
            <tr><td style="font-weight:bold;width:110px;padding:6px 0">이름</td><td>${data.name}</td></tr>
            <tr><td style="font-weight:bold;padding:6px 0">회사</td><td>${data.company}</td></tr>
            <tr><td style="font-weight:bold;padding:6px 0">이메일</td><td>${data.email}</td></tr>
            <tr><td style="font-weight:bold;padding:6px 0">전화번호</td><td>${data.phone}</td></tr>
            <tr><td style="font-weight:bold;padding:6px 0">문의 유형</td><td>${data.inquiryType}</td></tr>
          </table>
          <div style="margin:16px 0;padding:16px;border:1px solid #e5e7eb;border-radius:8px">
            <h3 style="margin:0 0 8px;color:#374151">문의 내용</h3>
            <p style="white-space:pre-line;line-height:1.6;color:#4b5563">${safeMsg}</p>
          </div>
          <div style="font-size:12px;color:#6b7280;border-top:1px solid #e5e7eb;padding-top:12px">
            발송시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
          </div>
        </div>`;

      const raw = buildRawEmail({ to, from, subject, html });
      await gmail.users.messages.send({ userId: "me", requestBody: { raw } });

      res.json({ ok: true });
    } catch (err: any) {
      console.error(
        "send-email error:",
        err?.response?.data || err.message || err,
      );
      res.status(500).json({ ok: false, error: "메일 발송 실패" });
    }
  });

  return createServer(app);
}
