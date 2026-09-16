import React from 'react';
import { UserCheck, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const Screen3NearbyMatches: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#080D16] text-white flex flex-col justify-between p-4 relative overflow-hidden font-sans text-xs select-none">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3 pt-1">
          <div>
            <div className="flex items-center gap-1.5 text-brand-green text-[10px] font-bold">
              <Sparkles className="w-3 h-3" />
              <span>3 MATCHES FOUND</span>
            </div>
            <h3 className="text-sm font-bold text-white">People Going Your Way</h3>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green font-mono text-[10px]">
            Live Radius: 1.5km
          </span>
        </div>

        {/* Matches List */}
        <div className="space-y-2">
          {/* Match 1 - Rahul */}
          <div className="p-2.5 rounded-2xl bg-[#0F172A] border border-brand-green/40 shadow-lg shadow-brand-green/5 relative overflow-hidden">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-green to-brand-cyan p-0.5">
                  <div className="w-full h-full rounded-full bg-dark-950 flex items-center justify-center font-bold text-[11px] text-brand-green">
                    RV
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-white text-[11px]">Rahul V.</span>
                    <ShieldCheck className="w-3 h-3 text-brand-cyan" />
                  </div>
                  <span className="text-[9px] text-slate-400">SRM Institute (Verified Student)</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-brand-green/15 text-brand-green font-bold text-[9px] border border-brand-green/30">
                96% Route Overlap
              </span>
            </div>

            <div className="bg-white/5 rounded-xl p-2 text-[9px] space-y-1 text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Route:</span>
                <span className="font-medium text-white">SRM Potheri → Terminal 1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Departure:</span>
                <span className="text-brand-green font-semibold">04:35 PM (±5 mins)</span>
              </div>
            </div>

            <button className="w-full mt-2 py-1.5 rounded-xl bg-brand-green text-dark-950 font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1">
              Send Ride Request
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Match 2 - Sneha */}
          <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all opacity-85">
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-[10px]">
                  SK
                </div>
                <div>
                  <span className="font-bold text-white text-[11px]">Sneha K.</span>
                  <div className="text-[9px] text-slate-400">Tambaram East → Airport</div>
                </div>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-slate-300 text-[9px]">
                91% match
              </span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/5">
              <span>Departs 04:40 PM</span>
              <span className="text-brand-cyan">View Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proximity Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-400">
        <div className="flex items-center gap-1">
          <UserCheck className="w-3 h-3 text-brand-green" />
          Both going to Airport
        </div>
        <span>Fare split: 50%</span>
      </div>
    </div>
  );
};
