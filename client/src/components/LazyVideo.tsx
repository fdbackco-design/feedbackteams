// LazyVideo.tsx
import { useState, useRef, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  className?: string; // 래퍼 div에 적용 (포지셔닝/크기)
  style?: React.CSSProperties; // 래퍼 div에 적용
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
  poster?: string;
}

export default function LazyVideo({
  src,
  className,
  style,
  autoPlay = false,
  muted = true,
  loop = false,
  // 배경 영상은 자동재생 안정성을 위해 auto 권장
  preload = "auto",
  poster,
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 지연 로드(뷰포트 진입 시 생성)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // iOS/Safari: 인라인/음소거 강제 + 자동재생 재시도
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !isInView) return;

    // 자동재생을 원하면 iOS 정책상 음소거/인라인을 반드시 강제
    if (autoPlay) {
      v.muted = true; // prop과 별개로 하드 강제 (자동재생 보장)
    } else {
      v.muted = muted;
    }

    v.playsInline = true;
    // @ts-ignore - 사파리 구버전 속성
    v.webkitPlaysInline = true;

    // 첫 재생 시도
    const tryPlay = () => {
      const p = v.play?.();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // 자동재생이 막히면 첫 사용자 제스처에서 재시도
          const once = () => {
            v.play?.().finally(() => {
              window.removeEventListener("touchstart", once);
              window.removeEventListener("pointerdown", once);
              window.removeEventListener(
                "scroll",
                once as any,
                { capture: true } as any,
              );
            });
          };
          window.addEventListener("touchstart", once, { once: true });
          window.addEventListener("pointerdown", once, { once: true });
          // 스크롤만으로도 제스처 인식되는 환경 대책
          window.addEventListener(
            "scroll",
            once as any,
            { once: true, capture: true } as any,
          );
        });
      }
    };

    // 메타데이터 로드 직후 & 살짝 지연 두 번 시도(사파리 타이밍 이슈 회피)
    const onLoadedMeta = () => autoPlay && tryPlay();
    v.addEventListener("loadedmetadata", onLoadedMeta);
    const t = setTimeout(() => autoPlay && tryPlay(), 60);

    return () => {
      v.removeEventListener("loadedmetadata", onLoadedMeta);
      clearTimeout(t);
    };
  }, [isInView, autoPlay, muted]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {isInView ? (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          // 속성으로도 표기 (브라우저가 속성 우선 파싱하는 경우 대비)
          muted
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          autoPlay={autoPlay}
          loop={loop}
          preload={preload}
          poster={poster}
          controls={false}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
