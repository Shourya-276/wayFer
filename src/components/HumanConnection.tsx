import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

export const HumanConnection: React.FC = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Converging Silhouette Route Visual */}
        <div className="w-full max-w-lg mx-auto h-36 mb-10 relative flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 500 140" fill="none">
            {/* Person 1 Route Path (Blue/Cyan) */}
            <path
              d="M40 110 C 140 100, 200 60, 250 40"
              stroke="#22D3EE"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="route-animate"
            />

            {/* Person 2 Route Path (Emerald) */}
            <path
              d="M460 110 C 360 100, 300 60, 250 40"
              stroke="#00F076"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="route-animate"
            />

            {/* Subtle Profile Silhouette Avatar - Left */}
            <g transform="translate(40, 110)">
              <circle cx="0" cy="0" r="14" fill="#0E1624" stroke="#22D3EE" strokeWidth="1.5" />
              <path d="M-6 8 C-6 3, -3 0, 0 0 C 3 0, 6 3, 6 8" fill="#22D3EE" />
              <circle cx="0" cy="-4" r="4" fill="#22D3EE" />
            </g>

            {/* Subtle Profile Silhouette Avatar - Right */}
            <g transform="translate(460, 110)">
              <circle cx="0" cy="0" r="14" fill="#0E1624" stroke="#00F076" strokeWidth="1.5" />
              <path d="M-6 8 C-6 3, -3 0, 0 0 C 3 0, 6 3, 6 8" fill="#00F076" />
              <circle cx="0" cy="-4" r="4" fill="#00F076" />
            </g>

            {/* Meeting node at center */}
            <g transform="translate(250, 40)">
              <circle cx="0" cy="0" r="20" fill="#00F076" fillOpacity="0.2" className="animate-ping" />
              <circle cx="0" cy="0" r="10" fill="#00F076" />
              <circle cx="0" cy="0" r="4" fill="#030507" />
            </g>
          </svg>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Different people. <br />
          <span className="text-brand-green">Same direction.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Sometimes the person you need to share a ride with is already travelling beside you.
        </p>

        {/* Three Pillars of Human Mobility */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
            <div className="w-10 h-10 rounded-2xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5 text-brand-green" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">Mutual Safety</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verified campus or corporate emails and optional social badges so you always know who you share a ride with.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
            <div className="w-10 h-10 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">Intent Alignment</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No commercial drivers or forced itineraries. Both participants are simply trying to reach the same destination.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
            <div className="w-10 h-10 rounded-2xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">Natural Connection</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Turn an expensive, isolated cab journey into an easy conversation and a shared habit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
