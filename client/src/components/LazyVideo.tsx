import { useState, useRef, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

export default function LazyVideo({ 
  src, 
  className, 
  style, 
  autoPlay = false, 
  muted = true, 
  loop = false,
  preload = 'none'
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} style={style}>
      {isInView ? (
        <video
          src={src}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}