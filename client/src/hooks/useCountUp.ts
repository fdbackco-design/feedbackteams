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
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = undefined;
      return;
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation - ease-out-quart for more natural ending
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;
      
      setCount(Math.round(currentCount));

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