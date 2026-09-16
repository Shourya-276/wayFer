import React from 'react';
import { Send, CheckCheck, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export const Screen5ChatMatch: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#080D16] text-white flex flex-col justify-between p-3 relative overflow-hidden font-sans text-xs select-none">
      {/* Top Chat Bar */}
      <div>
        <div className="flex items-center justify-between p-2 rounded-2xl bg-white/5 border border-white/10 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-dark-850 border border-brand-green/50 flex items-center justify-center font-bold text-xs text-brand-green">
                RV
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-green border-2 border-dark-950"></div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-white text-[11px]">Rahul Varma</span>
                <ShieldCheck className="w-3 h-3 text-brand-cyan" />
              </div>
              <div className="text-[9px] text-brand-green flex items-center gap-1 font-medium">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Match Accepted • Shared Trip</span>
              </div>
            </div>
          </div>
          <button className="w-7 h-7 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
            <Phone className="w-3 h-3" />
          </button>
        </div>

        {/* Status Pill */}
        <div className="text-center my-2">
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[9px] text-slate-400 border border-white/5">
            Today • Departing 04:35 PM
          </span>
        </div>

        {/* Chat Thread */}
        <div className="space-y-2.5 my-2">
          {/* Incoming */}
          <div className="flex flex-col items-start max-w-[82%]">
            <div className="p-2.5 rounded-2xl rounded-tl-sm bg-[#121A2C] border border-white/10 text-[10px] text-slate-200 leading-relaxed">
              Hey Shourya! Saw your request. Yes absolutely, heading to Terminal 1 for a 7:30 PM flight.
            </div>
            <span className="text-[8px] text-slate-500 mt-0.5 px-1">04:12 PM</span>
          </div>

          {/* Outgoing */}
          <div className="flex flex-col items-end max-w-[85%] ml-auto">
            <div className="p-2.5 rounded-2xl rounded-tr-sm bg-brand-green/20 border border-brand-green/40 text-[10px] text-white leading-relaxed">
              Awesome! I'm booking an Uber Premier right now from Potheri Gate. Let's meet there in 15 mins?
            </div>
            <div className="flex items-center gap-1 text-[8px] text-brand-cyan mt-0.5 px-1">
              <span>04:14 PM</span>
              <CheckCheck className="w-3 h-3 text-brand-green" />
            </div>
          </div>

          {/* Incoming */}
          <div className="flex flex-col items-start max-w-[82%]">
            <div className="p-2.5 rounded-2xl rounded-tl-sm bg-[#121A2C] border border-white/10 text-[10px] text-slate-200 leading-relaxed">
              Perfect, walking toward the gate now. We'll split the ₹1,000 on WayFer!
            </div>
            <span className="text-[8px] text-slate-500 mt-0.5 px-1">04:15 PM</span>
          </div>
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className="pt-2 border-t border-white/10">
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-1.5 border border-white/10">
          <input
            type="text"
            readOnly
            value="Meet you at the archway..."
            className="bg-transparent text-[10px] text-slate-300 w-full focus:outline-none"
          />
          <button className="w-6 h-6 rounded-lg bg-brand-green text-dark-950 flex items-center justify-center shrink-0">
            <Send className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
