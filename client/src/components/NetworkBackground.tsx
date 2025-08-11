import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
}

interface NetworkBackgroundProps {
  className?: string;
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Initialize nodes with optimized density for performance
    const nodeCount = Math.min(80, Math.floor((dimensions.width * dimensions.height) / 12000) + 40);
    nodesRef.current = Array.from({ length: nodeCount }, () => {
      const baseX = Math.random() * dimensions.width;
      const baseY = Math.random() * dimensions.height;
      return {
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1 + 0.5,
      };
    });

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const nodes = nodesRef.current;
      const maxDistance = 150;

      // Update node positions with continuous animation + mouse interaction
      const mouse = mouseRef.current;
      const currentTime = Date.now() * 0.001;
      
      nodes.forEach((node, index) => {
        // Basic floating animation - always active
        const floatX = Math.sin(currentTime * 0.5 + index * 0.1) * 20;
        const floatY = Math.cos(currentTime * 0.3 + index * 0.15) * 15;
        
        // Calculate distance to mouse for interaction
        const mouseDx = mouse.x - node.baseX;
        const mouseDy = mouse.y - node.baseY;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        // Mouse influence effect
        const maxInfluence = 200;
        const influence = Math.max(0, (maxInfluence - mouseDistance) / maxInfluence);
        const mouseForce = influence * 40;
        const mouseInfluenceX = (mouseDx / mouseDistance || 0) * mouseForce;
        const mouseInfluenceY = (mouseDy / mouseDistance || 0) * mouseForce;
        
        // Combine floating animation with mouse interaction
        node.x = node.baseX + floatX + mouseInfluenceX * 0.4;
        node.y = node.baseY + floatY + mouseInfluenceY * 0.4;
        
        // Keep nodes within bounds
        node.x = Math.max(10, Math.min(dimensions.width - 10, node.x));
        node.y = Math.max(10, Math.min(dimensions.height - 10, node.y));
      });

      // Optimized connection drawing with fewer operations
      ctx.strokeStyle = `rgba(34, 211, 238, 0.6)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distanceSquared = dx * dx + dy * dy; // Skip sqrt for performance
          const maxDistanceSquared = maxDistance * maxDistance;

          if (distanceSquared < maxDistanceSquared) {
            const distance = Math.sqrt(distanceSquared);
            const opacity = (maxDistance - distance) / maxDistance;
            
            if (opacity > 0.1) { // Only draw visible connections
              ctx.globalAlpha = opacity * 0.8;
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
            }
          }
        }
      }
      
      ctx.stroke();
      ctx.globalAlpha = 1; // Reset alpha

      // Optimized node rendering for better performance
      const time = Date.now() * 0.001;
      
      // Draw all outer glows at once
      ctx.shadowColor = "rgba(34, 211, 238, 0.8)";
      ctx.shadowBlur = 6;
      ctx.fillStyle = `rgba(34, 211, 238, 0.2)`;
      nodes.forEach((node, index) => {
        const pulse = Math.sin(time + index * 0.15) * 0.2 + 0.8;
        ctx.globalAlpha = 0.3 * pulse;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw main nodes
      ctx.shadowBlur = 3;
      ctx.fillStyle = `rgba(34, 211, 238, 0.9)`;
      nodes.forEach((node, index) => {
        const pulse = Math.sin(time + index * 0.15) * 0.2 + 0.8;
        ctx.globalAlpha = pulse;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 1.2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw white cores
      ctx.shadowBlur = 1;
      ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
      nodes.forEach((node, index) => {
        const pulse = Math.sin(time + index * 0.15) * 0.2 + 0.8;
        ctx.globalAlpha = pulse;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Reset all effects
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      if (typeof window !== 'undefined') {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default NetworkBackground;