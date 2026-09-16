import React, { useState } from 'react';
import { User, Users, MapPin, Sparkles } from 'lucide-react';

export const SrmOriginStory: React.FC = () => {
  const [viewMode, setViewMode] = useState<'alone' | 'connected'>('alone');

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-900 border-y border-white/5 overflow-hidden">
      {/* Subtle Background map contour glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ORIGIN STORY</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              WayFer started with a <br />
              <span className="text-brand-green">₹1,000 cab ride.</span>
            </h2>

            {/* Authentic personal story text */}
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                While studying at <strong className="text-white font-semibold">SRM Institute</strong>, I often had to travel from campus to the Chennai airport before holidays and semester breaks.
              </p>
              <p>
                A solo cab could easily cost around <strong className="text-white font-semibold">₹1,000</strong>.
              </p>
              <p className="text-slate-200 font-medium italic border-l-2 border-brand-green/50 pl-4 my-3">
                "But the interesting part wasn't the price. It was knowing that other students were probably heading to the same airport around the exact same time."
              </p>
              <p>
                The problem was simple: <span className="text-white font-semibold">there was no easy way to find them.</span>
              </p>
            </div>

            {/* Key takeaway quote */}
            <div className="pt-2 text-xl sm:text-2xl font-bold text-white leading-snug">
              Same destination. <br />
              Same direction. <br />
              <span className="text-slate-400 font-normal">No easy way to connect.</span>
            </div>

            <p className="text-sm font-mono text-brand-green uppercase tracking-wider font-semibold">
              → That's where WayFer began.
            </p>
          </div>

          {/* Right Visual Column: SRM to Airport Interactive Corridor */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#080D17] border border-white/10 shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                    Corridor Simulation
                  </span>
                  <h4 className="text-base font-bold text-white">SRM Kattankulathur → Airport</h4>
                </div>

                {/* Interactive Toggle */}
                <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setViewMode('alone')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      viewMode === 'alone' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    1 Rider Solo
                  </button>
                  <button
                    onClick={() => setViewMode('connected')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      viewMode === 'connected' ? 'bg-brand-green text-dark-950 shadow-glow-green' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Connected
                  </button>
                </div>
              </div>

              {/* Highway Corridor Line & Nodes */}
              <div className="space-y-6 relative py-4">
                
                {/* Destination: Airport */}
                <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-green font-bold">Destination</span>
                    <div className="font-bold text-white text-sm">Chennai International Airport (MAA)</div>
                  </div>
                </div>

                {/* Connecting road track */}
                <div className="relative h-28 my-2 flex justify-center">
                  <div className="w-1 h-full bg-gradient-to-b from-brand-green via-brand-cyan to-slate-700 rounded-full"></div>
                  
                  {/* Highway Marker Badges */}
                  <div className="absolute top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-dark-950 border border-white/10 text-[10px] font-mono text-slate-300">
                    GST Road • ~28 km
                  </div>
                </div>

                {/* Origins Section */}
                {viewMode === 'alone' ? (
                  /* 1 Person Alone */
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-xs">1 Person (Travelling Alone)</div>
                          <span className="text-[10px] text-slate-400">SRM Potheri Campus</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400">Cab Fare</div>
                        <div className="text-sm font-bold text-white">₹1,000</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[11px] text-red-300 text-center">
                      2 more students nearby were heading to the airport at 4:30 PM, but had no way to find each other.
                    </div>
                  </div>
                ) : (
                  /* 3 People Connected with WayFer */
                  <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
                    <div className="p-4 rounded-2xl bg-brand-green/10 border border-brand-green/40 shadow-glow-green space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-brand-green font-bold text-xs">
                          <Users className="w-4 h-4" />
                          <span>3 Students Matched Along Route</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green text-[10px] font-bold">
                          Matched
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 rounded-xl bg-dark-950/70 border border-white/5">
                          <div className="font-bold text-white">Student A</div>
                          <div className="text-[9px] text-slate-400">SRM Gate 1</div>
                        </div>
                        <div className="p-2 rounded-xl bg-dark-950/70 border border-white/5">
                          <div className="font-bold text-white">Student B</div>
                          <div className="text-[9px] text-slate-400">Arch Gate</div>
                        </div>
                        <div className="p-2 rounded-xl bg-dark-950/70 border border-white/5">
                          <div className="font-bold text-white">Student C</div>
                          <div className="text-[9px] text-slate-400">Estancia</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-brand-green/20 text-xs">
                        <span className="text-slate-300">Shared ₹1,000 Fare:</span>
                        <span className="font-extrabold text-brand-green text-sm">~₹333 / person</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
