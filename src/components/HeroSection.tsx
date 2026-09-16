import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

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
    <section className="relative min-h-[92vh] lg:min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-black">
      {/* Cinematic Ambient Glow & Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-white/[0.04] blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glow-badge text-white font-mono text-[11px] uppercase tracking-widest font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              <span>MATCH → MEET → RIDE</span>
              <span className="text-neutral-600 font-normal">|</span>
              <span className="text-neutral-400 font-sans normal-case tracking-normal">The simpler way to share a ride</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-[3.65rem] font-black tracking-tight leading-[1.1] text-white">
              Someone near you <br />
              <span className="text-gradient-white">is heading the</span> <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">exact same way.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              WayFer connects verified travellers on identical routes—so you can <strong className="text-white font-semibold">match</strong>, <strong className="text-white font-semibold">split the fare</strong>, and <strong className="text-white font-semibold">ride together</strong> without paying full price alone.
            </p>

            {/* CTAs - Prominently positioned above the fold */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#waitlist"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs sm:text-sm transition-all duration-300 hover:border-white/40 flex items-center justify-center gap-2"
              >
                See How It Works ↓
              </a>
            </div>

            {/* Micro Social Trust Metric */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-5 text-[11px] text-neutral-400">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span>Campuses & Tech Parks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                <span>Real Overlapping Routes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - Black & White Map Simulation */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Dark Map Vector Simulation Canvas Frame */}
            <div className="relative w-full max-w-[370px] sm:max-w-[390px] aspect-[4/4.2] rounded-[32px] bg-[#0A0A0A] border border-white/15 p-3 shadow-2xl overflow-hidden">
              
              {/* Stylized Map Roads and SVG Routes in Monochrome */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 420" fill="none">
                {/* Background street grids */}
                <path d="M-50 120 L 450 120" stroke="#1A1A1A" strokeWidth="8" />
                <path d="M-50 280 L 450 280" stroke="#1A1A1A" strokeWidth="6" />
                <path d="M120 -50 L 120 480" stroke="#1A1A1A" strokeWidth="10" />
                <path d="M280 -50 L 280 480" stroke="#1A1A1A" strokeWidth="6" />

                {/* Main Arterial Corridor */}
                <path
                  d="M70 370 C 120 300, 170 200, 230 70"
                  stroke="#262626"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Route A: White Route Stroke */}
                <path
                  d="M60 360 C 110 290, 160 190, 230 70"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  className="route-animate"
                />

                {/* Route B: Silver Route Stroke */}
                <path
                  d="M150 380 C 160 300, 190 190, 230 70"
                  stroke="#A3A3A3"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  className="route-animate"
                />

                {/* Route C: Muted White Route Stroke */}
                <path
                  d="M310 320 C 250 250, 220 170, 230 70"
                  stroke="#737373"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                  className="route-animate"
                />

                {/* Destination Beacon */}
                <g transform="translate(230, 70)">
                  <circle cx="0" cy="0" r="24" fill="#FFFFFF" fillOpacity="0.15" className="animate-ping" />
                  <circle cx="0" cy="0" r="12" fill="#FFFFFF" fillOpacity="0.3" />
                  <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
                  <circle cx="0" cy="0" r="2" fill="#000000" />
                </g>

                {/* Origin Dots */}
                <circle cx="60" cy="360" r="5" fill="#FFFFFF" />
                <circle cx="150" cy="380" r="5" fill="#A3A3A3" />
                <circle cx="310" cy="320" r="4" fill="#737373" />
              </svg>

              {/* Floating Route Label */}
              <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-xl bg-black/90 border border-white/15 text-[9px] text-white flex items-center gap-1 shadow-lg">
                <MapPin className="w-3 h-3 text-white" />
                <span className="font-bold">Chennai Airport (MAA)</span>
              </div>

              {/* Dynamic Center Match Announcement Overlay */}
              <div className="absolute inset-x-4 top-[38%] -translate-y-1/2 z-30 flex flex-col items-center text-center transition-all duration-500">
                {matchPhase === 0 && (
                  <div className="px-3 py-1.5 rounded-xl bg-black/95 border border-white/15 text-[11px] font-medium text-neutral-300 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-300">
                    <span className="text-neutral-400">Routes detected:</span> Scanning overlapping paths...
                  </div>
                )}

                {matchPhase === 1 && (
                  <div className="px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-black animate-spin" />
                    <span>MATCH FOUND</span>
                  </div>
                )}

                {matchPhase === 2 && (
                  <div className="px-4 py-2 rounded-xl bg-black/95 border border-white/40 text-white font-bold text-[11px] tracking-wide shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                    "You're going the same way."
                    <div className="text-[9px] font-mono text-neutral-400 mt-0.5">96% Route Overlap</div>
                  </div>
                )}

                {matchPhase === 3 && (
                  <div className="px-4 py-2 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-widest shadow-[0_0_25px_rgba(255,255,255,0.35)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                    MATCH → MEET → RIDE
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="mt-3 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Campus (30km out) → Chennai Airport T1 (₹1,000 Solo Cab)</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
