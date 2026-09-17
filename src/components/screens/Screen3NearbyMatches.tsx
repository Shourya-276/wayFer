import React from 'react';
import { UserCheck, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export const Screen3NearbyMatches: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col justify-between p-4 relative overflow-hidden font-sans text-xs select-none">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3 pt-1">
          <div>
            <div className="flex items-center gap-1.5 text-white text-[10px] font-bold">
              <Zap className="w-3 h-3 fill-white" />
              <span>3 MATCHES FOUND</span>
            </div>
            <h3 className="text-sm font-bold text-white">People Going Your Way</h3>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px]">
            Live Radius: 1.5km
          </span>
        </div>

        {/* Matches List */}
        <div className="space-y-2">
          {/* Match 1 - Rahul */}
          <div className="p-2.5 rounded-2xl bg-[#141414] border border-white/20 shadow-lg relative overflow-hidden">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 p-0.5">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-[11px] text-white">
                    RV
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-white text-[11px]">Rahul V.</span>
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[9px] text-neutral-400">SRM Institute (Verified Student)</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-bold text-[9px] border border-white/20">
                96% Route Overlap
              </span>
            </div>

            <div className="bg-white/5 rounded-xl p-2 text-[9px] space-y-1 text-neutral-300">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Route:</span>
                <span className="font-medium text-white">SRM Potheri → Terminal 1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Departure:</span>
                <span className="text-white font-semibold">04:35 PM (±5 mins)</span>
              </div>
            </div>

            <button className="w-full mt-2 py-1.5 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm">
              Send Ride Request
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Match 2 - Sneha */}
          <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all opacity-85">
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 text-neutral-200 flex items-center justify-center font-bold text-[10px]">
                  SK
                </div>
                <div>
                  <span className="font-bold text-white text-[11px]">Sneha K.</span>
                  <div className="text-[9px] text-neutral-400">Tambaram East → Airport</div>
                </div>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-neutral-300 text-[9px]">
                91% match
              </span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-neutral-400 pt-1 border-t border-white/5">
              <span>Departs 04:40 PM</span>
              <span className="text-neutral-300">View Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proximity Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-neutral-400">
        <div className="flex items-center gap-1">
          <UserCheck className="w-3 h-3 text-white" />
          Both going to Airport
        </div>
        <span>Fare split: 50%</span>
      </div>
    </div>
  );
};
