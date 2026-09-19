import React, { useState, useEffect, useRef } from 'react';
import { User, Users, MapPin, Zap } from 'lucide-react';

export const SrmOriginStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [viewMode, setViewMode] = useState<'alone' | 'connected'>('alone');
  const prevTriggerState = useRef<'above' | 'below'>('above');

  // When user scrolls down into the section, automatically move from 1 rider solo to connected
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const threshold = window.innerHeight * 0.45;
      const currentState = rect.top < threshold ? 'below' : 'above';

      if (currentState !== prevTriggerState.current) {
        prevTriggerState.current = currentState;
        setViewMode(currentState === 'below' ? 'connected' : 'alone');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="the-story" className="relative py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/10 overflow-hidden">
      {/* Subtle Background map contour glow in Monochrome */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-semibold">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
              <span>THE ORIGIN STORY</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Born from a simple reality: <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Rides were too expensive to take alone.</span>
            </h2>

            {/* Authentic personal story text */}
            <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              <p>
                While studying at college which was in a rural area 30km away from the city, I often had to travel from campus to the airport before holidays and semester breaks.
              </p>
              <p>
                The initial Uber fare would show around ₹1,000, but drivers routinely demanded extra and overcharged—pushing the cost up to <strong className="text-white font-semibold">₹2,000</strong> for a single trip. An unreasonable expense for students to bear alone.
              </p>
              <p className="text-neutral-100 font-medium border-l-2 border-white/40 pl-4 my-3 bg-white/[0.02] py-2 rounded-r-xl">
                The whole point was the price. We knew dozens of other students were heading to the airport around the exact same time, yet everyone was paying inflated fares in separate cabs simply because there was no easy way to find each other and split the cost.
              </p>
              <p>
                By connecting students heading the exact same direction at the exact same hour, that steep <span className="text-white font-semibold">₹2,000 cab drops down to ₹500 to ₹650 per person</span>.
              </p>
            </div>

            {/* Key takeaway quote */}
            <div className="pt-2 text-xl sm:text-2xl font-bold text-white leading-snug">
              Same destination. <br />
              Same departure time. <br />
              <span className="text-neutral-400 font-normal">Splitting rides to cut down costs for everyone.</span>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-sm font-mono text-white uppercase tracking-wider font-semibold">
                → That's where WayFer began.
              </p>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                What started with airport runs became something bigger — the same problem happens every single day, on every commute to work, college, and back.
              </p>
            </div>
          </div>

          {/* Right Visual Column: Campus to Airport Interactive Corridor */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-white/15 shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                    Corridor Simulation
                  </span>
                  <h4 className="text-base font-bold text-white">Campus (30km out) → Airport</h4>
                </div>

                {/* Interactive Toggle in Monochrome */}
                <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setViewMode('alone')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      viewMode === 'alone' ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    1 Rider Solo
                  </button>
                  <button
                    onClick={() => setViewMode('connected')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      viewMode === 'connected' ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.25)]' : 'text-neutral-400 hover:text-white'
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
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white font-bold">Destination</span>
                    <div className="font-bold text-white text-sm">Airport Terminal</div>
                  </div>
                </div>

                {/* Connecting road track */}
                <div className="relative h-28 my-2 flex justify-center">
                  <div className="w-1 h-full bg-gradient-to-b from-white via-neutral-400 to-neutral-700 rounded-full"></div>
                  
                  {/* Highway Marker Badges */}
                  <div className="absolute top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-black border border-white/10 text-[10px] font-mono text-neutral-300">
                    Arterial Highway • ~30 km
                  </div>
                </div>

                {/* Origins Section */}
                {viewMode === 'alone' ? (
                  /* 1 Person Alone */
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-xs">1 Person (Travelling Alone)</div>
                          <span className="text-[10px] text-neutral-400">Rural College Campus</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-neutral-400">Solo Cab Fare</div>
                        <div className="text-sm font-bold text-white">₹2,000</div>
                        <div className="text-[9px] text-neutral-500 font-mono">Uber ₹1k + Driver extra</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-[11px] text-neutral-300 text-center">
                      Uber showed ~₹1,000, but driver overcharging pushed fares up to ₹2,000 for solo students.
                    </div>
                  </div>
                ) : (
                  /* 3 People Connected with WayFer */
                  <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.15)] space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white font-bold text-xs">
                          <Users className="w-4 h-4 text-white" />
                          <span>3 Students Matched Along Route</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
                          Matched
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 rounded-xl bg-black/80 border border-white/10">
                          <div className="font-bold text-white">Student A</div>
                          <div className="text-[9px] text-neutral-400">Campus Gate 1</div>
                        </div>
                        <div className="p-2 rounded-xl bg-black/80 border border-white/10">
                          <div className="font-bold text-white">Student B</div>
                          <div className="text-[9px] text-neutral-400">Hostel Gate</div>
                        </div>
                        <div className="p-2 rounded-xl bg-black/80 border border-white/10">
                          <div className="font-bold text-white">Student C</div>
                          <div className="text-[9px] text-neutral-400">Main Junction</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs">
                        <span className="text-neutral-300">Split ₹2,000 Fare:</span>
                        <span className="font-extrabold text-white text-sm">~₹660 / person (Save ~67%)</span>
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
