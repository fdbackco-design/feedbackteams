// 필요한 썸네일만 import 해서 번들에 포함
import flow_2025_04_17 from "./flow_2025-04-17_193718625_1754623499071.png";
import diamonds from "./diamonds.jpg";
import factory from "./factory.jpeg";
import hoid1 from "./hoid1.jpg";
import hoid2 from "./hoid2.jpeg";
import hoid3 from "./hoid3.jpg";
import homeshopping from "./homeshopping.png";

// 추가 이미지가 생기면 여기 위에 import 하고 아래 객체에 key/value 추가
export const newsImages: Record<string, string> = {
  "flow_2025-04-17_193718625_1754623499071.png": flow_2025_04_17,
  "diamonds.jpg": diamonds,
  "factory.jpeg": factory,
  "hoid1.jpg": hoid1,
  "hoid2.jpeg": hoid2,
  "hoid3.jpg": hoid3,
  "homeshopping.png": homeshopping,
};

// 안전하게 경로 처리 + 폴백 제공
export const FALLBACK = "/attached_assets/placeholder.png"; // public에 하나 두세요

export function resolveNewsThumbnail(src: string): string {
  // 외부 URL 또는 절대경로(/로 시작)는 그대로 사용
  if (/^https?:\/\//i.test(src) || src.startsWith("/")) return src;

  // 매핑에 있으면 import된 파일 경로 반환
  if (newsImages[src]) return newsImages[src];

  // 상대경로가 들어오면 절대경로로 보정 (public 사용 시)
  return "/" + src.replace(/^\.?\/*/, "");
}
