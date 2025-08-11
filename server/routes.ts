import type { Express } from "express";
import { createServer, type Server } from "http";
import { google } from "googleapis";
import { storage } from "./storage";

// OAuth2 클라이언트 설정
const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI,
);

// Refresh Token이 있으면 설정
if (process.env.GMAIL_REFRESH_TOKEN) {
  oAuth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });
}

// MIME 이메일 구성 함수
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
    `Subject: ${encodeToMimeHeader(subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "",
    html,
  ];
  const content = lines.join("\n");
  return Buffer.from(content)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// UTF-8 제목 인코딩
function encodeToMimeHeader(text: string) {
  return `=?UTF-8?B?${Buffer.from(text).toString("base64")}?=`;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // OAuth 인증 시작 (Refresh Token 획득용)
  app.get("/api/auth/gmail", (req, res) => {
    const url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: ["https://www.googleapis.com/auth/gmail.send"],
    });
    res.redirect(url);
  });

  // OAuth 콜백
  // OAuth 콜백
  app.get("/api/oauth2callback", async (req, res) => {
    try {
      const { code } = req.query;
      const { tokens } = await oAuth2Client.getToken(code as string);

      if (tokens.refresh_token) {
        console.log("\n==== COPY THIS REFRESH TOKEN TO REPLIT SECRETS ====");
        console.log("GMAIL_REFRESH_TOKEN =", tokens.refresh_token);
        console.log("==================================================\n");
      }

      oAuth2Client.setCredentials(tokens);

      // 🚨 임시로 화면에도 표시 (획득 후 꼭 삭제!)
      res.send(`
        <html><body>
          <h2>Gmail 인증 완료!</h2>
          ${
            tokens.refresh_token
              ? `<p><b>GMAIL_REFRESH_TOKEN</b>:</p><pre>${tokens.refresh_token}</pre>`
              : `<p>이번 응답에 refresh_token이 포함되지 않았습니다. 
                 계정 권한을 철회한 뒤 다시 시도해주세요.</p>`
          }
          <p>콘솔(logs)에도 값이 출력됩니다.</p>
        </body></html>
      `);
    } catch (e) {
      console.error("OAuth 처리 중 오류:", e);
      res.status(500).send("OAuth 처리 중 오류가 발생했습니다.");
    }
  });

  // 이메일 발송 엔드포인트
  app.post("/api/send-email", async (req, res) => {
    try {
      const { name, company, email, phone, inquiryType, message } = req.body;

      // Refresh Token 확인
      if (!process.env.GMAIL_REFRESH_TOKEN) {
        return res.status(400).json({
          ok: false,
          error:
            "Gmail 인증이 필요합니다. /api/auth/gmail 경로로 인증을 완료하세요.",
          needAuth: true,
        });
      }

      // 인증 설정
      if (!oAuth2Client.credentials.refresh_token) {
        oAuth2Client.setCredentials({
          refresh_token: process.env.GMAIL_REFRESH_TOKEN,
        });
      }

      const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

      // 이메일 내용 구성
      const to = "fdbackco@gmail.com";
      const from = "fdbackco@gmail.com";
      const subject = `[FeedBack 문의] ${inquiryType || "일반"} - ${name || "이름없음"}`;

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            새 문의가 도착했습니다
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">문의자 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; width: 100px;">이름:</td>
                <td style="padding: 8px 0;">${name || "-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">회사:</td>
                <td style="padding: 8px 0;">${company || "-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">이메일:</td>
                <td style="padding: 8px 0;">${email || "-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">전화번호:</td>
                <td style="padding: 8px 0;">${phone || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">문의 유형:</td>
                <td style="padding: 8px 0;">${inquiryType || "-"}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #ffffff; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">문의 내용</h3>
            <p style="white-space: pre-line; line-height: 1.6; color: #4b5563;">
              ${(message || "문의 내용이 없습니다.").replace(/</g, "&lt;")}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>이 메일은 FeedBack 웹사이트의 문의 양식을 통해 자동 발송되었습니다.</p>
            <p>발송 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</p>
          </div>
        </div>
      `;

      const raw = buildRawEmail({ to, from, subject, html });

      await gmail.users.messages.send({
        userId: "me",
        requestBody: { raw },
      });

      res.json({ ok: true, message: "이메일이 성공적으로 발송되었습니다." });
    } catch (error: any) {
      console.error("이메일 발송 오류:", error);
      res.status(500).json({
        ok: false,
        error: error.message || "이메일 발송 중 오류가 발생했습니다.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
