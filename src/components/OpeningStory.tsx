import React from 'react';
import { Zap, Compass } from 'lucide-react';

export const OpeningStory: React.FC = () => {
  return (
    <section
      id="the-story"
      className="relative py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-t border-white/10"
    >
      {/* Background Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-white/[0.04] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 space-y-6">
        
        {/* Section Indicator Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-white text-xs font-mono font-semibold backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 text-white" />
          <span>THE REALIZATION</span>
        </div>

        {/* Intersecting Route Vector Canvas in Monochrome */}
        <div className="w-full max-w-lg h-40 mx-auto relative">
          <svg className="w-full h-full" viewBox="0 0 400 180" fill="none">
            {/* Background Guide Tracks */}
            <path
              d="M30 140 C 100 130, 160 90, 200 60"
              stroke="#171717"
              strokeWidth="4"
            />
            <path
              d="M370 140 C 300 130, 240 90, 200 60"
              stroke="#171717"
              strokeWidth="4"
            />

            {/* Route A - White Glowing Track */}
            <path
              d="M30 140 C 100 130, 160 90, 200 60"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Route B - Silver Glowing Track */}
            <path
              d="M370 140 C 300 130, 240 90, 200 60"
              stroke="#A3A3A3"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Origin Node A */}
            <g>
              <circle cx="30" cy="140" r="6" fill="#FFFFFF" />
              <circle cx="30" cy="140" r="14" fill="#FFFFFF" fillOpacity="0.2" />
            </g>

            {/* Origin Node B */}
            <g>
              <circle cx="370" cy="140" r="6" fill="#A3A3A3" />
              <circle cx="370" cy="140" r="14" fill="#A3A3A3" fillOpacity="0.2" />
            </g>

            {/* Intersecting Destination Node */}
            <g transform="translate(200, 60)">
              <circle cx="0" cy="0" r="24" fill="#FFFFFF" fillOpacity="0.15" className="animate-ping" />
              <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.35" />
              <circle cx="0" cy="0" r="7" fill="#FFFFFF" />
              <circle cx="0" cy="0" r="2.5" fill="#000000" />
            </g>
          </svg>

          {/* Labels */}
          <span className="absolute bottom-1 left-6 text-[10px] font-mono text-white">
            Rider 1 • Campus
          </span>
          <span className="absolute bottom-1 right-6 text-[10px] font-mono text-neutral-400">
            Rider 2 • Nearby
          </span>
          <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-white">
            Shared Destination
          </span>
        </div>

        {/* Statements */}
        <div className="space-y-4 sm:space-y-5 flex flex-col items-center justify-center">
          {/* Statement 1 */}
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              "You were already going there."
            </h2>
          </div>

          {/* Statement 2 */}
          <div>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-300">
              "They were too."
            </h3>
          </div>

          {/* Statement 3 - Climax */}
          <div>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              "You just didn't know each other."
            </h3>
          </div>

          {/* Statement 4 - Resolution Badge */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Zap className="w-4 h-4 text-white fill-white" />
              <span className="text-sm sm:text-base font-semibold text-neutral-200">
                That's the problem <strong className="text-white font-black">WayFer</strong> is built around.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
