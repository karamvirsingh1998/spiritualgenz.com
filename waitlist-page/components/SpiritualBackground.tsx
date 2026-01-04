"use client";

import { useEffect, useRef } from "react";

export default function SpiritualBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    const drawMandala = (x: number, y: number, radius: number, layers: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(time * 0.0001);

      for (let layer = 0; layer < layers; layer++) {
        const layerRadius = radius * (1 - layer * 0.3);
        const petals = 8 + layer * 2;
        
        ctx.strokeStyle = `rgba(180, 165, 216, ${0.15 - layer * 0.02})`;
        ctx.lineWidth = 1;

        // Draw petals
        for (let i = 0; i < petals; i++) {
          const angle = (Math.PI * 2 * i) / petals;
          ctx.beginPath();
          ctx.arc(
            Math.cos(angle) * layerRadius * 0.5,
            Math.sin(angle) * layerRadius * 0.5,
            layerRadius * 0.3,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        }

        // Draw center circle
        ctx.beginPath();
        ctx.arc(0, 0, layerRadius * 0.2, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawGeometric = (x: number, y: number, size: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(time * 0.0002);

      ctx.strokeStyle = "rgba(107, 127, 215, 0.1)";
      ctx.lineWidth = 1;

      // Draw geometric patterns
      const sides = 6;
      for (let i = 0; i < 3; i++) {
        const radius = size * (1 - i * 0.3);
        ctx.beginPath();
        for (let j = 0; j < sides; j++) {
          const angle = (Math.PI * 2 * j) / sides;
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw multiple mandalas and geometric patterns
      const patterns = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, type: "mandala", size: 120 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, type: "mandala", size: 100 },
        { x: canvas.width * 0.5, y: canvas.height * 0.2, type: "geometric", size: 80 },
        { x: canvas.width * 0.3, y: canvas.height * 0.8, type: "geometric", size: 90 },
        { x: canvas.width * 0.7, y: canvas.height * 0.4, type: "mandala", size: 110 },
      ];

      patterns.forEach((pattern) => {
        if (pattern.type === "mandala") {
          drawMandala(pattern.x, pattern.y, pattern.size, 3);
        } else {
          drawGeometric(pattern.x, pattern.y, pattern.size);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
