import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Prerender 이벤트 발생 (vite-plugin-prerender용)
if (import.meta.env.PROD) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      // Playwright prerender 스크립트가 이 플래그를 보고 렌더 완료를 판단합니다.
      (window as any).__PRERENDER_READY__ = true;
      document.dispatchEvent(new Event("render-event"));
    }, 100);
  });
}
