/**
 * Playwright 기반 Prerender 스크립트
 * - dist/public 을 vite preview로 띄운 뒤 핵심 라우트 HTML을 정적으로 저장합니다.
 * - Vercel/정적 호스팅에서 "파일 우선 서빙"을 가정합니다(파일 있으면 rewrite보다 우선).
 */

import { spawn } from "child_process";
import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import process from "process";
import { chromium } from "playwright";
import { PRERENDER_ROUTES } from "../client/src/lib/seo-routes";

const PORT = Number(process.env.PRERENDER_PORT || 4173);
const HOST = "127.0.0.1";
const BASE_URL = `http://${HOST}:${PORT}`;

function routeToOutputFile(routePath: string) {
  // "/" -> dist/public/index.html
  if (routePath === "/") return path.join(process.cwd(), "dist", "public", "index.html");
  // "/about" -> dist/public/about/index.html
  return path.join(process.cwd(), "dist", "public", routePath.replace(/^\//, ""), "index.html");
}

async function waitForServerReady() {
  // 간단 대기(네트워크 폴링 대신 짧게 여러 번 접근)
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(BASE_URL, { method: "GET" });
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`vite preview 서버가 준비되지 않았습니다: ${BASE_URL}`);
}

async function prerender() {
  const preview = spawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "preview", "--", "--host", HOST, "--port", String(PORT), "--strictPort"],
    { stdio: "inherit", env: { ...process.env, NODE_ENV: "production" } },
  );

  try {
    await waitForServerReady();

    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (const routePath of PRERENDER_ROUTES) {
      const url = `${BASE_URL}${routePath}`;
      console.log(`[prerender] ${url}`);

      await page.goto(url, { waitUntil: "networkidle" });

      // 앱이 렌더 완료 플래그를 올릴 때까지 대기(없으면 타임아웃 후 진행)
      try {
        await page.waitForFunction("window.__PRERENDER_READY__ === true", null, {
          timeout: 5000,
        });
      } catch {
        // fallback
        await page.waitForTimeout(500);
      }

      const html = await page.content();
      const outFile = routeToOutputFile(routePath);
      mkdirSync(path.dirname(outFile), { recursive: true });
      writeFileSync(outFile, html, "utf-8");
    }

    await browser.close();
  } finally {
    preview.kill("SIGTERM");
  }
}

await prerender();

