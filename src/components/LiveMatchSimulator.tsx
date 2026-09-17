import React, { useState, useEffect } from 'react';
import { Zap, Users, Navigation2, Check, RefreshCw } from 'lucide-react';

export const LiveMatchSimulator: React.FC = () => {
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0);

  // Cycle simulation stages
  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => ((prev + 1) % 5) as 0 | 1 | 2 | 3 | 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const stageLabels = [
    { label: 'Scanning Routes', desc: 'Riders A, B, C, and D are travelling on nearby roads.' },
    { label: 'Possible match', desc: 'Rider A and Rider C have pickup origins within 1.2 km.' },
    { label: 'Same direction', desc: 'Destinations overlap along the same expressway segment.' },
    { label: 'Connect', desc: 'Automated coordination prompt sent to both travellers.' },
    { label: 'MATCHED', desc: 'Shared cab arranged • 50% fare reduction unlocked.' },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 text-white fill-white" />
            <span>CONCEPTUAL ALGORITHM SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            See who's <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">going your way</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            WayFer’s proximity logic evaluates trip origins, travel vectors, and destination proximity to find natural travel matches.
          </p>
        </div>

        {/* Map Simulation Interactive Container */}
        <div className="rounded-3xl bg-[#0A0A0A] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Status Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-xs">
                A+C
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                  Status: {stageLabels[stage].label}
                </span>
                <div className="text-sm font-bold text-white">{stageLabels[stage].desc}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setStage(0)}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Sim
              </button>
            </div>
          </div>

          {/* Stylized Canvas Map Area */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#050505] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
            
            <svg className="w-full h-full" viewBox="0 0 800 340" fill="none">
              {/* Background Roads */}
              <path d="M-50 170 L 850 170" stroke="#171717" strokeWidth="22" />
              <path d="M400 -50 L 400 390" stroke="#171717" strokeWidth="16" />
              <path d="M100 -50 Q 400 170 700 390" stroke="#171717" strokeWidth="12" />

              {/* Highway Arterial */}
              <path
                d="M50 280 C 250 250, 450 120, 720 100"
                stroke="#262626"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* Rider A Route (White) */}
              <path
                d="M80 260 C 260 220, 460 120, 720 100"
                stroke="#FFFFFF"
                strokeWidth={stage >= 1 ? 4 : 2}
                strokeDasharray="6 4"
                className="route-animate"
              />

              {/* Rider C Route (Silver - Converging with A) */}
              <path
                d="M140 310 C 290 230, 470 120, 720 100"
                stroke="#A3A3A3"
                strokeWidth={stage >= 1 ? 4 : 2}
                strokeDasharray="6 4"
                className="route-animate"
              />

              {/* Rider B (Different direction) */}
              <path
                d="M100 60 C 250 90, 380 240, 450 320"
                stroke="#404040"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.5"
              />

              {/* Rider D (Diverging direction) */}
              <path
                d="M480 320 C 520 220, 620 200, 750 260"
                stroke="#404040"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.5"
              />

              {/* Rider Pins */}
              {/* Rider A */}
              <g transform="translate(80, 260)">
                <circle cx="0" cy="0" r="10" fill="#FFFFFF" />
                <text x="0" y="4" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">
                  A
                </text>
              </g>

              {/* Rider C */}
              <g transform="translate(140, 310)">
                <circle cx="0" cy="0" r="10" fill="#A3A3A3" />
                <text x="0" y="4" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle">
                  C
                </text>
              </g>

              {/* Rider B */}
              <g transform="translate(100, 60)" opacity="0.6">
                <circle cx="0" cy="0" r="8" fill="#525252" />
                <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  B
                </text>
              </g>

              {/* Rider D */}
              <g transform="translate(480, 320)" opacity="0.6">
                <circle cx="0" cy="0" r="8" fill="#525252" />
                <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  D
                </text>
              </g>

              {/* Destination Point */}
              <g transform="translate(720, 100)">
                <circle cx="0" cy="0" r="24" fill="#FFFFFF" fillOpacity="0.15" className="animate-ping" />
                <circle cx="0" cy="0" r="12" fill="#FFFFFF" fillOpacity="0.3" />
                <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
              </g>

              {/* Connecting Corridor Pulse if stage >= 2 */}
              {stage >= 2 && (
                <path
                  d="M260 220 Q 380 170 500 120"
                  stroke="#FFFFFF"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              )}
            </svg>

            {/* Central Animated Badge based on Stage */}
            <div className="absolute z-20 transition-all duration-300 transform scale-100">
              {stage === 1 && (
                <div className="px-4 py-2 rounded-2xl bg-black/90 border border-white/40 text-white font-bold text-xs shadow-2xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  Possible match detected (A + C)
                </div>
              )}

              {stage === 2 && (
                <div className="px-5 py-2.5 rounded-2xl bg-black/90 border border-white/50 text-white font-bold text-xs shadow-2xl flex items-center gap-2">
                  <Navigation2 className="w-3.5 h-3.5 text-white" />
                  Same direction • 94% alignment
                </div>
              )}

              {stage === 3 && (
                <div className="px-5 py-2.5 rounded-2xl bg-neutral-900 border border-white text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2">
                  <Users className="w-4 h-4 text-white" />
                  Ready to Connect
                </div>
              )}

              {stage === 4 && (
                <div className="px-6 py-3 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center gap-2 animate-bounce">
                  <Check className="w-4 h-4 stroke-[3]" />
                  MATCHED
                </div>
              )}
            </div>

            {/* Bottom Disclaimer */}
            <span className="absolute bottom-2 right-4 text-[9px] font-mono text-neutral-500">
              *Visual simulation of WayFer's corridor proximity logic
            </span>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-5 gap-2 mt-6">
            {stageLabels.map((s, idx) => (
              <button
                key={s.label}
                onClick={() => setStage(idx as 0 | 1 | 2 | 3 | 4)}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  stage === idx
                    ? 'bg-white/15 border-white/60 text-white font-bold'
                    : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider">{s.label}</div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
