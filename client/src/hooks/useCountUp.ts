import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start: number;
  end: number;
  duration: number;
  trigger: boolean;
}

export function useCountUp({ start, end, duration, trigger }: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (!trigger) {
      setCount(start);
      return;
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = start + (end - start) * easeOutCubic;
      
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = undefined;
    };
  }, [start, end, duration, trigger]);

  return count;
}