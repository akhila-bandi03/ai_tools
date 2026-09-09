import React, { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onCategorySelect?: (cat: string) => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCategorySelect, onNavigateHome }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animated LED Matrix canvas effect matching AI Orbit's signature banner
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = 130);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 130;
    };
    window.addEventListener('resize', handleResize);

    const dotSpacing = 16;
    const dotRadius = 1.6;
    const cols = Math.floor(width / dotSpacing);
    const rows = Math.floor(height / dotSpacing);

    let tick = 0;

    const render = () => {
      tick += 0.035;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Render LED grid with undulating purple wave
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * dotSpacing + dotSpacing / 2;
          const y = r * dotSpacing + dotSpacing / 2;

          // Wave equation
          const dist = Math.sin(c * 0.12 - tick) + Math.cos(r * 0.25 - tick * 0.8);
          const intensity = Math.max(0.08, (dist + 2) / 4);

          if (intensity > 0.65) {
            ctx.fillStyle = `rgba(110, 86, 207, ${intensity * 0.85})`;
            ctx.beginPath();
            ctx.arc(x, y, dotRadius * 1.3, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = `rgba(38, 38, 48, ${intensity * 0.35})`;
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw glowing marquee banner text
      ctx.font = 'bold 13px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '5px';
      ctx.fillText('THE AI SIGNAL  •  GLOBAL ECOSYSTEM  •  2026', width / 2, height / 2);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHash = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white pt-0 font-sans border-t border-[#1C1C1F] mt-24 overflow-hidden">
      {/* Signature AI Orbit LED Display Canvas */}
      <section
        aria-label="AI Orbit LED display"
        className="w-full bg-black border-b border-[#1C1C1F] overflow-hidden"
        style={{ height: '130px' }}
      >
        <canvas ref={canvasRef} className="block w-full h-full" />
      </section>

      {/* Main Footer Links Container with Generous Safe Padding */}
      <div className="wrap pt-12 pb-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Brand Column */}
          <div className="w-full lg:w-[340px] shrink-0">
            <div
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2.5 mb-3.5 cursor-pointer group"
            >
              {/* Proper SVG Orbit Logo */}
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <ellipse cx="16" cy="16" rx="14" ry="6" stroke="#6E56CF" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(-30 16 16)" />
                <ellipse cx="16" cy="16" rx="14" ry="6" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.3" transform="rotate(50 16 16)" />
                <circle cx="16" cy="16" r="5" fill="url(#planetGradF)" />
                <circle cx="16" cy="16" r="2.5" fill="white" fillOpacity="0.9" />
                <circle cx="27" cy="13" r="1.8" fill="#a78bfa" />
                <defs>
                  <radialGradient id="planetGradF" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#4C3699" />
                  </radialGradient>
                </defs>
              </svg>
              <span className="text-lg font-extrabold text-white group-hover:text-[#a78bfa] transition-colors">
                AI Orbit
              </span>
            </div>

            <p className="text-[13px] font-semibold text-white mb-1.5">
              The Home of Everything AI.
            </p>
            <p className="text-xs leading-relaxed text-[#a1a1aa] mb-6 max-w-[300px]">
              Discover the tools, companies, and technologies shaping the global AI ecosystem.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#a1a1aa]">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X Twitter"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Discord"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4 Link Columns matching AI Orbit */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
            <div>
              <h4 className="text-[11px] font-bold text-white tracking-[0.1em] uppercase mb-3">
                EXPLORE
              </h4>
              <ul className="space-y-2.5 text-xs text-[#a1a1aa]">
                <li><button onClick={() => onCategorySelect && onCategorySelect('All')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">AI Tools</button></li>
                <li><button onClick={() => navigateHash('#/tasks')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">AI Agents</button></li>
                <li><button onClick={() => navigateHash('#/leaderboard')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">AI Models</button></li>
                <li><button onClick={() => navigateHash('#/companies')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">AI Companies</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-white tracking-[0.1em] uppercase mb-3">
                DISCOVER
              </h4>
              <ul className="space-y-2.5 text-xs text-[#a1a1aa]">
                <li><button onClick={() => navigateHash('#/learn')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">AI Guides</button></li>
                <li><button onClick={() => navigateHash('#/leaderboard')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">Leaderboard</button></li>
                <li><button onClick={() => navigateHash('#/business')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">AI Comparisons</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-white tracking-[0.1em] uppercase mb-3">
                ECOSYSTEM
              </h4>
              <ul className="space-y-2.5 text-xs text-[#a1a1aa]">
                <li><button onClick={() => navigateHash('#/tasks')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">Tasks & Workflows</button></li>
                <li><button onClick={() => navigateHash('#/business')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">Business AI</button></li>
                <li><button onClick={() => navigateHash('#/learn')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">Playbooks</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-white tracking-[0.1em] uppercase mb-3">
                COMMUNITY
              </h4>
              <ul className="space-y-2.5 text-xs text-[#a1a1aa]">
                <li><button onClick={() => navigateHash('#/companies')} className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left">Foundational Labs</button></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Open Source</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Join Discord</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-[#1e1e24] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71717a]">
            © 2026 AI Orbit. All rights reserved. Crafted for production.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2e2e38] hover:bg-white/10 active:scale-95 transition-all text-white cursor-pointer bg-transparent"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
