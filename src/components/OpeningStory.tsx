import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Compass } from 'lucide-react';

export const OpeningStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const p = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic thresholds
  const showLine1 = progress >= 0.08;
  const showLine2 = progress >= 0.34;
  const showLine3 = progress >= 0.60;
  const showLine4 = progress >= 0.82;

  // Dynamic route drawing strokes based on scroll
  const route1DashOffset = Math.max(0, 1 - (progress / 0.6)) * 200;
  const route2DashOffset = Math.max(0, 1 - ((progress - 0.25) / 0.45)) * 200;

  return (
    <section
      id="the-story"
      ref={sectionRef}
      className="relative h-[240vh] bg-dark-950"
    >
      {/* Sticky Cinematic Viewport Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background Radial Spotlight */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none transition-opacity duration-700"
          style={{ opacity: showLine3 ? 0.9 : 0.4 }}
        ></div>

        <div className="max-w-4xl mx-auto w-full text-center relative z-10 space-y-8">
          
          {/* Section Indicator Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-mono font-semibold backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-brand-green" />
            <span>THE REALIZATION</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 font-sans font-normal">Scroll to continue</span>
          </div>

          {/* Animated Intersecting Route Vector Canvas */}
          <div className="w-full max-w-lg h-40 mx-auto relative">
            <svg className="w-full h-full" viewBox="0 0 400 180" fill="none">
              {/* Background Guide Tracks */}
              <path
                d="M30 140 C 100 130, 160 90, 200 60"
                stroke="#121D2F"
                strokeWidth="4"
              />
              <path
                d="M370 140 C 300 130, 240 90, 200 60"
                stroke="#121D2F"
                strokeWidth="4"
              />

              {/* Route A - Heading to Destination (Left / Cyan) */}
              <path
                d="M30 140 C 100 130, 160 90, 200 60"
                stroke="#22D3EE"
                strokeWidth="3.5"
                strokeDasharray="200"
                strokeDashoffset={route1DashOffset}
                strokeLinecap="round"
                className="transition-all duration-300"
              />

              {/* Route B - Heading to Destination (Right / Emerald) */}
              <path
                d="M370 140 C 300 130, 240 90, 200 60"
                stroke="#00F076"
                strokeWidth="3.5"
                strokeDasharray="200"
                strokeDashoffset={route2DashOffset}
                strokeLinecap="round"
                className="transition-all duration-300"
              />

              {/* Origin Node A */}
              <g
                className="transition-all duration-500"
                style={{ opacity: showLine1 ? 1 : 0.2, transform: showLine1 ? 'scale(1)' : 'scale(0.8)' }}
              >
                <circle cx="30" cy="140" r="6" fill="#22D3EE" />
                <circle cx="30" cy="140" r="14" fill="#22D3EE" fillOpacity="0.2" />
              </g>

              {/* Origin Node B */}
              <g
                className="transition-all duration-500"
                style={{ opacity: showLine2 ? 1 : 0.2, transform: showLine2 ? 'scale(1)' : 'scale(0.8)' }}
              >
                <circle cx="370" cy="140" r="6" fill="#00F076" />
                <circle cx="370" cy="140" r="14" fill="#00F076" fillOpacity="0.2" />
              </g>

              {/* Intersecting Destination Node (Activated on Line 3) */}
              <g
                transform="translate(200, 60)"
                className="transition-all duration-700"
                style={{
                  opacity: showLine3 ? 1 : 0.3,
                  transform: showLine3 ? 'translate(200px, 60px) scale(1.1)' : 'translate(200px, 60px) scale(0.85)',
                }}
              >
                {showLine3 && (
                  <circle cx="0" cy="0" r="28" fill="#00F076" fillOpacity="0.2" className="animate-ping" />
                )}
                <circle cx="0" cy="0" r="14" fill="#00F076" fillOpacity="0.35" />
                <circle cx="0" cy="0" r="7" fill="#00F076" />
                <circle cx="0" cy="0" r="2.5" fill="#050709" />
              </g>
            </svg>

            {/* Labels */}
            <span
              className="absolute bottom-1 left-6 text-[10px] font-mono transition-opacity duration-500"
              style={{ opacity: showLine1 ? 1 : 0.2, color: '#22D3EE' }}
            >
              Rider 1 • Campus
            </span>
            <span
              className="absolute bottom-1 right-6 text-[10px] font-mono transition-opacity duration-500"
              style={{ opacity: showLine2 ? 1 : 0.2, color: '#00F076' }}
            >
              Rider 2 • Nearby
            </span>
            <span
              className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest transition-colors duration-500"
              style={{ color: showLine3 ? '#00F076' : '#64748B' }}
            >
              Shared Destination
            </span>
          </div>

          {/* Cinema Text Flow: Emerges sequentially based strictly on user scroll */}
          <div className="space-y-6 min-h-[260px] flex flex-col items-center justify-center">
            
            {/* Statement 1 */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: showLine1 ? 1 : 0.15,
                transform: showLine1 ? 'translateY(0px) scale(1)' : 'translateY(24px) scale(0.96)',
                filter: showLine1 ? 'blur(0px)' : 'blur(4px)',
              }}
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                "You were already going there."
              </h2>
            </div>

            {/* Statement 2 */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: showLine2 ? 1 : 0.12,
                transform: showLine2 ? 'translateY(0px) scale(1)' : 'translateY(24px) scale(0.96)',
                filter: showLine2 ? 'blur(0px)' : 'blur(4px)',
              }}
            >
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-200">
                "They were too."
              </h3>
            </div>

            {/* Statement 3 - Major Emerald Climax */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: showLine3 ? 1 : 0.08,
                transform: showLine3 ? 'translateY(0px) scale(1.03)' : 'translateY(24px) scale(0.95)',
                filter: showLine3 ? 'blur(0px)' : 'blur(6px)',
              }}
            >
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-green drop-shadow-[0_0_25px_rgba(0,240,118,0.4)]">
                "You just didn't know each other."
              </h3>
            </div>

            {/* Statement 4 - Resolution Badge */}
            <div
              className="pt-4 transition-all duration-700 ease-out"
              style={{
                opacity: showLine4 ? 1 : 0,
                transform: showLine4 ? 'translateY(0px) scale(1)' : 'translateY(18px) scale(0.9)',
              }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-brand-green/30 backdrop-blur-xl shadow-glow-green">
                <Sparkles className="w-4 h-4 text-brand-green" />
                <span className="text-sm sm:text-base font-semibold text-slate-200">
                  That's the problem <strong className="text-white font-black">WayFer</strong> is built around.
                </span>
              </div>
            </div>

          </div>

          {/* Cinema Scroll Track Indicator */}
          <div className="pt-4 flex flex-col items-center gap-2">
            <div className="w-36 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-green rounded-full transition-all duration-150"
                style={{ width: `${Math.round(progress * 100)}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500">
              {progress < 0.95 ? 'Scroll down to advance the story' : 'Keep scrolling for the origin story'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
