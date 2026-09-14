import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Module: any;
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let animationId: number;

    const script = document.createElement("script");
    script.src = "/wasm/particles.js";
    script.onload = () => {
      window.Module.onRuntimeInitialized = () => {
        const count = 80;
        window.Module.ccall("init", null, ["number", "number", "number"], [count, width, height]);

        function draw() {
          window.Module.ccall("step", null, [], []);
          ctx!.clearRect(0, 0, width, height);
          const n = window.Module.ccall("getCount", "number", [], []);
          for (let i = 0; i < n; i++) {
            const x = window.Module.ccall("getX", "number", ["number"], [i]);
            const y = window.Module.ccall("getY", "number", ["number"], [i]);
            ctx!.beginPath();
            ctx!.arc(x, y, 2, 0, Math.PI * 2);
            ctx!.fillStyle = "#2F5DA8";
            ctx!.fill();
          }
          animationId = requestAnimationFrame(draw);
        }

        draw();
      };
    };

    document.body.appendChild(script);

    return () => {
      cancelAnimationFrame(animationId);
      document.body.removeChild(script);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}