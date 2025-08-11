import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface NetworkBackgroundProps {
  className?: string;
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

    // Initialize nodes with higher density
    const nodeCount = Math.floor((dimensions.width * dimensions.height) / 8000) + 50;
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 2 + 1,
    }));

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const nodes = nodesRef.current;
      const maxDistance = 150;

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= dimensions.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= dimensions.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(dimensions.width, node.x));
        node.y = Math.max(0, Math.min(dimensions.height, node.y));
      });

      // Draw connections with enhanced visibility
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (maxDistance - distance) / maxDistance;
            
            // Main connection line with stronger visibility
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.8})`;
            ctx.lineWidth = opacity * 2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            
            // Add subtle gradient overlay for depth
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.4})`);
            gradient.addColorStop(1, `rgba(34, 211, 238, ${opacity * 0.4})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with enhanced visibility like the reference image
      nodes.forEach((node, index) => {
        const time = Date.now() * 0.001;
        const pulse = Math.sin(time + index * 0.15) * 0.2 + 0.8;
        
        // Large outer glow for better visibility
        ctx.shadowColor = "rgba(34, 211, 238, 1)";
        ctx.shadowBlur = 15;
        ctx.fillStyle = `rgba(34, 211, 238, ${0.3})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Medium glow ring
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(59, 130, 246, ${0.6})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Main bright node
        ctx.shadowBlur = 5;
        ctx.fillStyle = `rgba(34, 211, 238, ${0.9 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Bright white core
        ctx.shadowBlur = 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
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