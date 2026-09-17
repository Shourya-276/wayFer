import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Plane, Building } from 'lucide-react';

interface CorridorData {
  id: string;
  name: string;
  shortName: string;
  icon: 'plane' | 'building';
  ticker: string;
  beacon: { x: number; y: number };
  mainArterial: string;
  routes: Array<{
    d: string;
    stroke: string;
    width: number;
    dash: string;
  }>;
  origins: Array<{ x: number; y: number }>;
  scanText: string;
  matchQuote: string;
  overlapPercentage: string;
}

const CORRIDORS: CorridorData[] = [
  {
    id: 'airport',
    name: 'Airport',
    shortName: 'Airport',
    icon: 'plane',
    ticker: 'Campus (30km out) → Airport (₹2,000 Solo Cab)',
    beacon: { x: 230, y: 70 },
    mainArterial: 'M70 370 C 120 300, 170 200, 230 70',
    routes: [
      { d: 'M60 360 C 110 290, 160 190, 230 70', stroke: '#FFFFFF', width: 3.5, dash: '6 4' },
      { d: 'M150 380 C 160 300, 190 190, 230 70', stroke: '#A3A3A3', width: 3.5, dash: '6 4' },
      { d: 'M310 320 C 250 250, 220 170, 230 70', stroke: '#737373', width: 2.5, dash: '5 5' },
    ],
    origins: [
      { x: 60, y: 360 },
      { x: 150, y: 380 },
      { x: 310, y: 320 },
    ],
    scanText: 'Scanning Airport corridors...',
    matchQuote: "You're going to the Airport.",
    overlapPercentage: '96% Route Overlap',
  },
  {
    id: 'techpark',
    name: 'Tech Park',
    shortName: 'Tech Park',
    icon: 'building',
    ticker: 'Residential Gates → Tech Park (₹450 Solo Cab)',
    beacon: { x: 160, y: 75 },
    mainArterial: 'M330 370 C 270 280, 210 180, 160 75',
    routes: [
      { d: 'M340 360 C 280 270, 220 180, 160 75', stroke: '#FFFFFF', width: 3.5, dash: '6 4' },
      { d: 'M240 380 C 210 290, 180 190, 160 75', stroke: '#A3A3A3', width: 3.5, dash: '6 4' },
      { d: 'M70 330 C 100 240, 130 160, 160 75', stroke: '#737373', width: 2.5, dash: '5 5' },
    ],
    origins: [
      { x: 340, y: 360 },
      { x: 240, y: 380 },
      { x: 70, y: 330 },
    ],
    scanText: 'Scanning Tech Park commuter routes...',
    matchQuote: 'Heading to Tech Park.',
    overlapPercentage: '94% Route Overlap',
  },
];

export const HeroSection: React.FC = () => {
  const [activeCorridorIndex, setActiveCorridorIndex] = useState<number>(0);
  const [matchPhase, setMatchPhase] = useState<0 | 1 | 2 | 3>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Automated animation loop: cycles through match stages, then smoothly transitions to the next corridor in loop
  const startAnimationLoop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setMatchPhase((prevPhase) => {
        if (prevPhase === 3) {
          setActiveCorridorIndex((prevIdx) => (prevIdx + 1) % CORRIDORS.length);
          return 0;
        }
        return ((prevPhase + 1) % 4) as 0 | 1 | 2 | 3;
      });
    }, 2800);
  };

  useEffect(() => {
    startAnimationLoop();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleCorridorSelect = (index: number) => {
    setActiveCorridorIndex(index);
    setMatchPhase(0);
    startAnimationLoop();
  };

  const activeCorridor = CORRIDORS[activeCorridorIndex];

  return (
    <section className="relative pt-20 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-black">
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
                <span className="text-neutral-400 font-sans normal-case tracking-normal">Ride sharing, made simple</span>
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

            {/* Right Column: Hero Visual - Black & White Map Simulation with Corridor Switching */}
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

                  {/* Dynamic Render of Both Corridors with Smooth Crossfade */}
                  {CORRIDORS.map((corridor, idx) => {
                    const isActive = activeCorridorIndex === idx;
                    return (
                      <g
                        key={corridor.id}
                        className={`transition-opacity duration-500 ease-in-out ${
                          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                      >
                        {/* Main Arterial Corridor */}
                        <path
                          d={corridor.mainArterial}
                          stroke="#262626"
                          strokeWidth="14"
                          strokeLinecap="round"
                        />

                        {/* Routes */}
                        {corridor.routes.map((r, rIdx) => (
                          <path
                            key={rIdx}
                            d={r.d}
                            stroke={r.stroke}
                            strokeWidth={r.width}
                            strokeLinecap="round"
                            strokeDasharray={r.dash}
                            className="route-animate"
                          />
                        ))}

                        {/* Destination Beacon */}
                        <g transform={`translate(${corridor.beacon.x}, ${corridor.beacon.y})`}>
                          <circle cx="0" cy="0" r="24" fill="#FFFFFF" fillOpacity="0.15" className="animate-ping" />
                          <circle cx="0" cy="0" r="12" fill="#FFFFFF" fillOpacity="0.3" />
                          <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
                          <circle cx="0" cy="0" r="2" fill="#000000" />
                        </g>

                        {/* Origin Dots */}
                        {corridor.origins.map((orig, oIdx) => (
                          <circle
                            key={oIdx}
                            cx={orig.x}
                            cy={orig.y}
                            r={oIdx === 2 ? 4 : 5}
                            fill={oIdx === 0 ? '#FFFFFF' : oIdx === 1 ? '#A3A3A3' : '#737373'}
                          />
                        ))}
                      </g>
                    );
                  })}
                </svg>

                {/* Corridor Switcher Pill Tabs (Interactive & Scroll-synced) */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center bg-black/85 p-0.5 rounded-full border border-white/15 backdrop-blur-md shadow-xl">
                  {CORRIDORS.map((corridor, idx) => {
                    const isActive = activeCorridorIndex === idx;
                    return (
                      <button
                        key={corridor.id}
                        type="button"
                        onClick={() => handleCorridorSelect(idx)}
                        className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                          isActive
                            ? 'bg-white text-black shadow-lg font-bold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {corridor.icon === 'plane' ? (
                          <Plane className={`w-3 h-3 ${isActive ? 'text-black' : 'text-neutral-400'}`} />
                        ) : (
                          <Building className={`w-3 h-3 ${isActive ? 'text-black' : 'text-neutral-400'}`} />
                        )}
                        <span>{corridor.shortName}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Center Match Announcement Overlay */}
                <div className="absolute inset-x-4 top-[44%] -translate-y-1/2 z-30 flex flex-col items-center text-center transition-all duration-500">
                  {matchPhase === 0 && (
                    <div className="px-3 py-1.5 rounded-xl bg-black/95 border border-white/15 text-[11px] font-medium text-neutral-300 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-300">
                      <span className="text-neutral-400">Routes detected:</span> {activeCorridor.scanText}
                    </div>
                  )}

                  {matchPhase === 1 && (
                    <div className="px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-black fill-black" />
                      <span>MATCH FOUND</span>
                    </div>
                  )}

                  {matchPhase === 2 && (
                    <div className="px-4 py-2 rounded-xl bg-black/95 border border-white/40 text-white font-bold text-[11px] tracking-wide shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                      "{activeCorridor.matchQuote}"
                      <div className="text-[9px] font-mono text-neutral-400 mt-0.5">{activeCorridor.overlapPercentage}</div>
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
              <div className="mt-3 px-3 py-1.5 rounded-full bg-black/90 border border-white/15 text-[11px] font-mono text-neutral-300 flex items-center gap-2 shadow-lg transition-all duration-300 max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0"></span>
                <span className="truncate">{activeCorridor.ticker}</span>
              </div>

              {/* Automated flow status indicator */}
              <div className="mt-2 flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse"></span>
                <span>Live Route Simulation • Automated Flow</span>
              </div>

            </div>

          </div>
        </div>
    </section>
  );
};
