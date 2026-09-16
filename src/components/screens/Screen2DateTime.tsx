import React, { useState } from 'react';
import { Clock, Sparkles, Check } from 'lucide-react';

export const Screen2DateTime: React.FC = () => {
  const [isRideNow, setIsRideNow] = useState(false);
  const selectedTime = '04:30 PM';

  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col justify-between p-4 relative overflow-hidden font-sans text-xs select-none">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-3 pt-1">
          <div>
            <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Step 2 of 3</div>
            <h3 className="text-sm font-bold text-white">When are you leaving?</h3>
          </div>
          <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <Clock className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Toggle Mode: Ride Now vs Schedule */}
        <div className="grid grid-cols-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-4">
          <button
            onClick={() => setIsRideNow(true)}
            className={`py-1.5 rounded-lg font-semibold text-[10px] transition-all ${
              isRideNow ? 'bg-white text-black font-bold shadow-sm' : 'text-neutral-400'
            }`}
          >
            Ride Now (Next 15m)
          </button>
          <button
            onClick={() => setIsRideNow(false)}
            className={`py-1.5 rounded-lg font-semibold text-[10px] transition-all ${
              !isRideNow ? 'bg-white text-black font-bold shadow-sm' : 'text-neutral-400'
            }`}
          >
            Schedule Ahead
          </button>
        </div>

        {/* Date Selector Chips */}
        <div className="space-y-1 mb-3">
          <span className="text-[9px] text-neutral-400 uppercase tracking-wider font-semibold">Select Day</span>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 rounded-xl bg-white/15 border border-white/30 text-center">
              <div className="text-[9px] text-white font-bold">TODAY</div>
              <div className="text-xs font-extrabold text-white">16 Sep</div>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center opacity-70">
              <div className="text-[9px] text-neutral-400 font-medium">TOMORROW</div>
              <div className="text-xs font-semibold text-white">17 Sep</div>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center opacity-70">
              <div className="text-[9px] text-neutral-400 font-medium">THURSDAY</div>
              <div className="text-xs font-semibold text-white">18 Sep</div>
            </div>
          </div>
        </div>

        {/* Departure Time Slots */}
        <div className="space-y-1 mb-3">
          <span className="text-[9px] text-neutral-400 uppercase tracking-wider font-semibold">Suggested Match Windows</span>
          <div className="space-y-1.5">
            {['04:15 PM', '04:30 PM', '05:00 PM'].map((t) => {
              const active = t === selectedTime;
              return (
                <div
                  key={t}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                    active
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/5 border-white/5 text-neutral-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-neutral-500'}`} />
                    <span className="font-semibold text-[11px]">{t}</span>
                  </div>
                  {active ? (
                    <div className="flex items-center gap-1 text-[9px] text-white font-bold">
                      <Sparkles className="w-3 h-3" />
                      High match density
                    </div>
                  ) : (
                    <span className="text-[9px] text-neutral-500">2 matches</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom info & proceed button */}
      <div className="pt-2 border-t border-white/10 space-y-2">
        <div className="flex items-center gap-1.5 text-[9px] text-neutral-400">
          <Check className="w-3 h-3 text-white" />
          WayFer syncs with other riders with a ±15 min window
        </div>
        <button className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Find Matches Along Route
        </button>
      </div>
    </div>
  );
};
