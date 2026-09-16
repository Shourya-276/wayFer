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
    <section className="relative min-h-[90vh] py-32 px-4 sm:px-6 lg:px-8 bg-dark-950 flex flex-col justify-center items-center text-center overflow-hidden border-t border-white/10">
      {/* Fullscreen Dark Cinematic Map Canvas Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Arterial grid */}
          <path d="M-100 200 L 1300 200" stroke="#121D30" strokeWidth="8" />
          <path d="M-100 600 L 1300 600" stroke="#121D30" strokeWidth="8" />
          <path d="M300 -100 L 300 900" stroke="#121D30" strokeWidth="8" />
          <path d="M900 -100 L 900 900" stroke="#121D30" strokeWidth="8" />

          {/* Converging routes from 5 different starting points towards center-top (600, 250) */}
          {/* Route 1 - Far Left */}
          <path
            d="M 100 750 C 300 600, 450 350, 600 250"
            stroke="#22D3EE"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />
          {/* Route 2 - Mid Left */}
          <path
            d="M 350 780 C 420 580, 500 380, 600 250"
            stroke="#00F076"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />
          {/* Route 3 - Center Bottom */}
          <path
            d="M 600 800 L 600 250"
            stroke="#38EF7D"
            strokeWidth="4"
            strokeDasharray="8 6"
            className="route-animate"
          />
          {/* Route 4 - Mid Right */}
          <path
            d="M 850 780 C 780 580, 700 380, 600 250"
            stroke="#00F076"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />
          {/* Route 5 - Far Right */}
          <path
            d="M 1100 750 C 900 600, 750 350, 600 250"
            stroke="#22D3EE"
            strokeWidth="3.5"
            strokeDasharray="10 6"
            className="route-animate"
          />

          {/* Central Destination Beacon */}
          <g transform="translate(600, 250)">
            <circle cx="0" cy="0" r="45" fill="#00F076" fillOpacity="0.1" className="animate-ping" />
            <circle cx="0" cy="0" r="24" fill="#00F076" fillOpacity="0.25" />
            <circle cx="0" cy="0" r="10" fill="#00F076" />
            <circle cx="0" cy="0" r="3" fill="#030507" />
          </g>
        </svg>
      </div>

      {/* Foreground Brand Climax */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Dynamic Pillar Sequence */}
        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          <span
            className={`font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 ${
              phase === 'match' ? 'text-brand-green scale-110' : 'text-slate-500'
            }`}
          >
            MATCH
          </span>
          <span className="text-slate-600">→</span>
          <span
            className={`font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 ${
              phase === 'meet' ? 'text-brand-cyan scale-110' : 'text-slate-500'
            }`}
          >
            MEET
          </span>
          <span className="text-slate-600">→</span>
          <span
            className={`font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 ${
              phase === 'ride' ? 'text-emerald-400 scale-110' : 'text-slate-500'
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
          <span className="text-gradient-brand">WayFer.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-xl mx-auto">
          "Find people going your way."
        </p>

        {/* CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-brand-green hover:bg-brand-neon text-dark-950 font-black text-sm uppercase tracking-wider shadow-glow-green-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
