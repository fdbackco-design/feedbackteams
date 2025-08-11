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

    // Initialize nodes
    const nodeCount = Math.floor((dimensions.width * dimensions.height) / 12000) + 30;
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
    }));

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const nodes = nodesRef.current;
      const maxDistance = 120;

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

      // Draw connections with gradient effect
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (maxDistance - distance) / maxDistance;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, `rgba(34, 211, 238, ${opacity * 0.4})`); // Cyan
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.6})`); // Blue
            gradient.addColorStop(1, `rgba(147, 51, 234, ${opacity * 0.3})`); // Purple
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 1.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with enhanced glow
      nodes.forEach((node, index) => {
        const time = Date.now() * 0.001;
        const pulse = Math.sin(time + index * 0.1) * 0.3 + 0.7;
        
        // Outer glow
        ctx.shadowColor = "rgba(34, 211, 238, 0.8)";
        ctx.shadowBlur = 8 * pulse;
        ctx.fillStyle = `rgba(34, 211, 238, ${0.4 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 2 * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Main node
        ctx.shadowBlur = 4;
        ctx.fillStyle = `rgba(59, 130, 246, ${0.8 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
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