import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight } from 'lucide-react';

export const CinematicFinale: React.FC = () => {
  const [phase, setPhase] = useState<'match' | 'meet' | 'ride'>('match');

  useEffect(() => {
    const sequence = ['match', 'meet', 'ride'] as const;
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % sequence.length;
      setPhase(sequence[idx]);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[50vh] py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black flex flex-col justify-center items-center text-center overflow-hidden border-t border-white/10">
      {/* Fullscreen Dark Cinematic Map Canvas Background in Monochrome */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Arterial grid */}
          <path d="M-100 200 L 1300 200" stroke="#171717" strokeWidth="8" />
          <path d="M-100 600 L 1300 600" stroke="#171717" strokeWidth="8" />
          <path d="M300 -100 L 300 900" stroke="#171717" strokeWidth="8" />
          <path d="M900 -100 L 900 900" stroke="#171717" strokeWidth="8" />

          {/* Converging routes from 5 different starting points towards center-top (600, 250) */}
          {/* Route 1 - Far Left */}
          <path
            d="M 100 750 C 300 600, 450 350, 600 250"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />
          {/* Route 2 - Mid Left */}
          <path
            d="M 350 780 C 420 580, 500 380, 600 250"
            stroke="#A3A3A3"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />
          {/* Route 3 - Center Bottom */}
          <path
            d="M 600 800 L 600 250"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeDasharray="8 6"
            className="route-animate"
          />
          {/* Route 4 - Mid Right */}
          <path
            d="M 850 780 C 780 580, 700 380, 600 250"
            stroke="#A3A3A3"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />
          {/* Route 5 - Far Right */}
          <path
            d="M 1100 750 C 900 600, 750 350, 600 250"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />

          {/* Central Destination Beacon in Monochrome */}
          <g transform="translate(600, 250)">
            <circle cx="0" cy="0" r="45" fill="#FFFFFF" fillOpacity="0.1" className="animate-ping" />
            <circle cx="0" cy="0" r="24" fill="#FFFFFF" fillOpacity="0.25" />
            <circle cx="0" cy="0" r="10" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3" fill="#000000" />
          </g>
        </svg>
      </div>

      {/* Foreground Brand Climax */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Dynamic Pillar Sequence */}
        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl">
          <span
            className={`font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 ${
              phase === 'match' ? 'text-white scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'text-neutral-500'
            }`}
          >
            MATCH
          </span>
          <span className="text-neutral-600">→</span>
          <span
            className={`font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 ${
              phase === 'meet' ? 'text-white scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'text-neutral-500'
            }`}
          >
            MEET
          </span>
          <span className="text-neutral-600">→</span>
          <span
            className={`font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 ${
              phase === 'ride' ? 'text-white scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'text-neutral-500'
            }`}
          >
            RIDE
          </span>
        </div>

        {/* Brand Logo Display */}
        <div className="flex justify-center my-4">
          <Logo size="lg" />
        </div>

        {/* Poetic Three-Line Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          Your way. <br />
          Their way. <br />
          <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]">WayFer.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-2xl text-neutral-300 font-medium max-w-xl mx-auto">
          "Find people going your way."
        </p>

        {/* CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white hover:bg-neutral-200 text-black font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
