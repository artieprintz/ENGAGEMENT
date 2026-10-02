import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'rose' | 'jasmine' | 'goldDust';
}

export const PetalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Keep particle count subtle and elegant (18-24 particles maximum)
    const petalCount = Math.min(Math.floor(width / 60), 22);
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const types: ('rose' | 'jasmine' | 'goldDust')[] = ['rose', 'rose', 'jasmine', 'goldDust'];
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.45 + 0.25, // very slow, graceful fall
        speedX: (Math.random() - 0.5) * 0.35,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        opacity: Math.random() * 0.4 + 0.35,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.3;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'rose') {
          // Delicate crimson/rose petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.65, 0, 0, Math.PI * 2);
          const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          grad.addColorStop(0, '#e53935');
          grad.addColorStop(0.5, '#ab1b28');
          grad.addColorStop(1, '#660b14');
          ctx.fillStyle = grad;
          ctx.fill();
        } else if (p.type === 'jasmine') {
          // Fresh white/ivory jasmine blossom with tiny yellow center
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5;
            const px = Math.cos(angle) * (p.size * 0.55);
            const py = Math.sin(angle) * (p.size * 0.55);
            ctx.ellipse(px, py, p.size * 0.35, p.size * 0.25, angle, 0, Math.PI * 2);
          }
          ctx.fillStyle = '#fffdfa';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.15, 0, Math.PI * 2);
          ctx.fillStyle = '#ffd54f';
          ctx.fill();
        } else {
          // Subtle antique gold micro-glimmer
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.22, 0, Math.PI * 2);
          ctx.fillStyle = '#fce594';
          ctx.shadowColor = '#d4a343';
          ctx.shadowBlur = 6;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return (
    <>
      {enabled && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none fixed inset-0 z-20 h-full w-full"
        />
      )}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setEnabled(!enabled)}
          title={enabled ? "Disable petal shower" : "Enable petal shower"}
          aria-label={enabled ? "Disable petal shower" : "Enable petal shower"}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2e070e]/80 hover:bg-[#420a14] border border-[#cf9e38]/50 text-[#f5df88] text-xs font-cinzel backdrop-blur-sm transition-all duration-200"
        >
          <Sparkles className={`w-3.5 h-3.5 ${enabled ? 'text-[#f5df88]' : 'text-stone-400'}`} />
          <span className="hidden sm:inline">{enabled ? 'Petals: On' : 'Petals: Off'}</span>
        </button>
      </div>
    </>
  );
};
