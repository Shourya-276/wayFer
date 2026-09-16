import React, { useState, useEffect } from 'react';
import { PhoneMockup } from './PhoneMockup';
import { ArrowRight, Sparkles, MapPin, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [matchPhase, setMatchPhase] = useState<0 | 1 | 2 | 3>(0);

  // Cycle the match convergence narrative in the hero visual
  useEffect(() => {
    const interval = setInterval(() => {
      setMatchPhase((prev) => ((prev + 1) % 4) as 0 | 1 | 2 | 3);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-dark-950">
      {/* Cinematic Ambient Glow & Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-gradient-to-b from-brand-green/12 via-brand-cyan/8 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative - Shifted up and tightly composed */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glow-badge text-brand-green font-mono text-[11px] uppercase tracking-widest font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
              <span>MATCH → MEET → RIDE</span>
              <span className="text-slate-600 font-normal">|</span>
              <span className="text-slate-400 font-sans normal-case tracking-normal">The simpler way to share a ride</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-[3.65rem] font-black tracking-tight leading-[1.1] text-white">
              You're probably <br />
              <span className="text-gradient-white">not the only one</span> <br />
              <span className="text-gradient-brand">going that way.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              WayFer helps you find people travelling the same route, so you can <strong className="text-white font-semibold">match</strong>, <strong className="text-white font-semibold">meet</strong>, and <strong className="text-white font-semibold">ride together</strong>.
            </p>

            {/* CTAs - Prominently positioned above the fold */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#waitlist"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-green hover:bg-brand-neon text-dark-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-glow-green-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold text-xs sm:text-sm transition-all duration-300 hover:border-brand-green/40 flex items-center justify-center gap-2"
              >
                See How It Works ↓
              </a>
            </div>

            {/* Micro Social Trust Metric */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                <span>Campuses & Tech Parks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                <span>Real Overlapping Routes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - Perfectly Scaled & Centered */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Dark Map Vector Simulation Canvas Frame */}
            <div className="relative w-full max-w-[370px] sm:max-w-[390px] aspect-[4/4.2] rounded-[32px] bg-[#070B13] border border-white/10 p-3 shadow-2xl overflow-hidden">
              
              {/* Stylized Map Roads and SVG Routes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 420" fill="none">
                {/* Background street grids */}
                <path d="M-50 120 L 450 120" stroke="#10192A" strokeWidth="8" />
                <path d="M-50 280 L 450 280" stroke="#10192A" strokeWidth="6" />
                <path d="M120 -50 L 120 480" stroke="#10192A" strokeWidth="10" />
                <path d="M280 -50 L 280 480" stroke="#10192A" strokeWidth="6" />

                {/* Main Arterial Corridor */}
                <path
                  d="M70 370 C 120 300, 170 200, 230 70"
                  stroke="#1E2F4C"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Route A: College -> Airport (Cyan) */}
                <path
                  d="M60 360 C 110 290, 160 190, 230 70"
                  stroke="#22D3EE"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  className="route-animate"
                />

                {/* Route B: Nearby Area -> Airport (Emerald) */}
                <path
                  d="M150 380 C 160 300, 190 190, 230 70"
                  stroke="#00F076"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  className="route-animate"
                />

                {/* Route C: Nearby location (Neon) */}
                <path
                  d="M310 320 C 250 250, 220 170, 230 70"
                  stroke="#38EF7D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                  className="route-animate"
                />

                {/* Destination Beacon: Airport */}
                <g transform="translate(230, 70)">
                  <circle cx="0" cy="0" r="24" fill="#00F076" fillOpacity="0.15" className="animate-ping" />
                  <circle cx="0" cy="0" r="12" fill="#00F076" fillOpacity="0.3" />
                  <circle cx="0" cy="0" r="6" fill="#00F076" />
                  <circle cx="0" cy="0" r="2" fill="#030507" />
                </g>

                {/* Origin Dots */}
                <circle cx="60" cy="360" r="5" fill="#22D3EE" />
                <circle cx="150" cy="380" r="5" fill="#00F076" />
                <circle cx="310" cy="320" r="4" fill="#38EF7D" />
              </svg>

              {/* Floating Route Label */}
              <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-xl bg-dark-950/90 border border-white/10 text-[9px] text-slate-200 flex items-center gap-1 shadow-lg">
                <MapPin className="w-3 h-3 text-brand-green" />
                <span className="font-bold">Chennai Airport (MAA)</span>
              </div>

              {/* Dynamic Center Match Announcement Overlay */}
              <div className="absolute inset-x-4 top-[38%] -translate-y-1/2 z-30 flex flex-col items-center text-center transition-all duration-500">
                {matchPhase === 0 && (
                  <div className="px-3 py-1.5 rounded-xl bg-dark-950/95 border border-white/10 text-[11px] font-medium text-slate-300 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-300">
                    <span className="text-slate-400">Routes detected:</span> Scanning overlapping paths...
                  </div>
                )}

                {matchPhase === 1 && (
                  <div className="px-4 py-2 rounded-xl bg-brand-green/20 border border-brand-green text-brand-green font-extrabold text-xs tracking-wider shadow-glow-green backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-green animate-spin" />
                    <span>MATCH FOUND</span>
                  </div>
                )}

                {matchPhase === 2 && (
                  <div className="px-4 py-2 rounded-xl bg-dark-900/95 border border-brand-cyan/50 text-white font-bold text-[11px] tracking-wide shadow-glow-cyan backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                    "You're going the same way."
                    <div className="text-[9px] font-mono text-brand-cyan mt-0.5">96% Route Overlap</div>
                  </div>
                )}

                {matchPhase === 3 && (
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-green to-brand-cyan text-dark-950 font-black text-[11px] uppercase tracking-widest shadow-glow-green backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                    MATCH → MEET → RIDE
                  </div>
                )}
              </div>
            </div>

            {/* Overlapping Floating Phone Mockup - Scaled and elevated so bottom is visible */}
            <div className="mt-[-160px] sm:mt-[-180px] relative z-40 animate-float">
              <PhoneMockup screenId={1} className="scale-[0.70] sm:scale-[0.76] origin-top" glow={true} />
            </div>

          </div>

        </div>
      </div>

      {/* Down Arrow Scroll Prompt */}
      <div className="relative z-10 flex justify-center mt-2">
        <a
          href="#the-story"
          className="p-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-brand-green hover:border-brand-green/40 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
