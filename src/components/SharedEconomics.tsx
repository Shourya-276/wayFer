import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const SharedEconomics: React.FC = () => {
  const [riders, setRiders] = useState<1 | 2 | 3>(2);
  const baseFare = 1000; // SRM -> Airport creator origin example

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-900 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-mono font-semibold mb-4">
            <span>SHARED ECONOMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            When the ride is shared, the journey makes <span className="text-brand-green">more sense</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Instead of one person carrying the entire cost of the ride, people going the same way can share it.
          </p>
        </div>

        {/* Interactive Shared Cost Visualizer */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090E19] border border-white/10 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Example: SRM Campus → Airport Cab
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Total Vehicle Fare: ₹{baseFare}</h3>
            </div>

            {/* Rider Selector Controls */}
            <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10">
              <button
                onClick={() => setRiders(1)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  riders === 1 ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                1 Rider
              </button>
              <button
                onClick={() => setRiders(2)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  riders === 2 ? 'bg-brand-green text-dark-950 shadow-glow-green' : 'text-slate-400 hover:text-white'
                }`}
              >
                2 Riders
              </button>
              <button
                onClick={() => setRiders(3)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  riders === 3 ? 'bg-brand-green text-dark-950 shadow-glow-green' : 'text-slate-400 hover:text-white'
                }`}
              >
                3 Riders
              </button>
            </div>
          </div>

          {/* Breakdown Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            
            {/* Solo */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                riders === 1
                  ? 'bg-white/10 border-white/30 scale-105 shadow-xl'
                  : 'bg-white/5 border-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400">Solo Rider</span>
                <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              </div>
              <div className="text-3xl font-black text-white mb-1">₹1,000</div>
              <p className="text-xs text-slate-400">Carrying the full trip expense alone</p>
            </div>

            {/* 2 Riders */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                riders === 2
                  ? 'bg-brand-green/15 border-brand-green/50 scale-105 shadow-glow-green'
                  : 'bg-white/5 border-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-green font-bold">2 Riders Sharing</span>
                <Sparkles className="w-4 h-4 text-brand-green" />
              </div>
              <div className="text-3xl font-black text-brand-green mb-1">Shared Cost</div>
              <p className="text-xs text-slate-300">~₹500 per person along the overlapping corridor</p>
            </div>

            {/* 3 Riders */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                riders === 3
                  ? 'bg-brand-green/15 border-brand-green/50 scale-105 shadow-glow-green'
                  : 'bg-white/5 border-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-green font-bold">3 Riders Sharing</span>
                <Sparkles className="w-4 h-4 text-brand-green" />
              </div>
              <div className="text-3xl font-black text-brand-green mb-1">Shared Cost</div>
              <p className="text-xs text-slate-300">~₹333 per person for identical route destinations</p>
            </div>

          </div>

          {/* Philosophy Note */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center text-xs text-slate-300 font-medium">
            <span className="text-brand-green font-bold">Core Insight:</span> Matching people creates the possibility of sharing the ride.
          </div>

        </div>

      </div>
    </section>
  );
};
