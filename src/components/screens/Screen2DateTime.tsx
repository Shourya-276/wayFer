import React, { useState } from 'react';
import { Clock, Sparkles, Check } from 'lucide-react';

export const Screen2DateTime: React.FC = () => {
  const [isRideNow, setIsRideNow] = useState(false);
  const selectedTime = '04:30 PM';

  return (
    <div className="w-full h-full bg-[#080D16] text-white flex flex-col justify-between p-4 relative overflow-hidden font-sans text-xs select-none">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-3 pt-1">
          <div>
            <div className="text-[10px] uppercase font-bold text-brand-green tracking-wider">Step 2 of 3</div>
            <h3 className="text-sm font-bold text-white">When are you leaving?</h3>
          </div>
          <div className="w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Clock className="w-3.5 h-3.5 text-brand-green" />
          </div>
        </div>

        {/* Toggle Mode: Ride Now vs Schedule */}
        <div className="grid grid-cols-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-4">
          <button
            onClick={() => setIsRideNow(true)}
            className={`py-1.5 rounded-lg font-semibold text-[10px] transition-all ${
              isRideNow ? 'bg-brand-green text-dark-950 font-bold' : 'text-slate-400'
            }`}
          >
            Ride Now (Next 15m)
          </button>
          <button
            onClick={() => setIsRideNow(false)}
            className={`py-1.5 rounded-lg font-semibold text-[10px] transition-all ${
              !isRideNow ? 'bg-brand-green text-dark-950 font-bold' : 'text-slate-400'
            }`}
          >
            Schedule Ahead
          </button>
        </div>

        {/* Date Selector Chips */}
        <div className="space-y-1 mb-3">
          <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Select Day</span>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 rounded-xl bg-brand-green/15 border border-brand-green/40 text-center">
              <div className="text-[9px] text-brand-green font-bold">TODAY</div>
              <div className="text-xs font-extrabold text-white">16 Sep</div>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center opacity-70">
              <div className="text-[9px] text-slate-400 font-medium">TOMORROW</div>
              <div className="text-xs font-semibold text-white">17 Sep</div>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center opacity-70">
              <div className="text-[9px] text-slate-400 font-medium">THURSDAY</div>
              <div className="text-xs font-semibold text-white">18 Sep</div>
            </div>
          </div>
        </div>

        {/* Departure Time Slots */}
        <div className="space-y-1 mb-3">
          <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Suggested Match Windows</span>
          <div className="space-y-1.5">
            {['04:15 PM', '04:30 PM', '05:00 PM'].map((t) => {
              const active = t === selectedTime;
              return (
                <div
                  key={t}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                    active
                      ? 'bg-brand-green/10 border-brand-green/50 text-white'
                      : 'bg-white/5 border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className={`w-3.5 h-3.5 ${active ? 'text-brand-green' : 'text-slate-500'}`} />
                    <span className="font-semibold text-[11px]">{t}</span>
                  </div>
                  {active ? (
                    <div className="flex items-center gap-1 text-[9px] text-brand-green font-bold">
                      <Sparkles className="w-3 h-3" />
                      High match density
                    </div>
                  ) : (
                    <span className="text-[9px] text-slate-500">2 matches</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom info & proceed button */}
      <div className="pt-2 border-t border-white/10 space-y-2">
        <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
          <Check className="w-3 h-3 text-brand-green" />
          WayFer syncs with other riders with a ±15 min window
        </div>
        <button className="w-full py-2.5 rounded-xl bg-brand-green text-dark-950 font-bold text-[11px] uppercase tracking-wider shadow-glow-green">
          Confirm Schedule
        </button>
      </div>
    </div>
  );
};
