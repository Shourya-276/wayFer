import React from 'react';
import { Send, MapPin, Clock, Shield } from 'lucide-react';

export const Screen4MessageRequest: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col justify-between p-4 relative overflow-hidden font-sans text-xs select-none">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3 pt-1">
          <span className="text-[10px] uppercase font-bold text-neutral-400">Step 4 • Connect</span>
          <div className="flex items-center gap-1 text-[9px] text-white bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            <Shield className="w-2.5 h-2.5" />
            Verified Profile
          </div>
        </div>

        {/* User Card */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 mb-3">
          <div className="w-11 h-11 rounded-full bg-white/20 p-0.5 shrink-0">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-sm text-white">
              RV
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Rahul Varma</div>
            <div className="text-[10px] text-neutral-400">SRM Institute (Tech Park)</div>
            <div className="flex items-center gap-2 mt-0.5 text-[9px] text-neutral-300">
              <span>96% Route Match</span>
              <span>•</span>
              <span>4.9★ (14 shared rides)</span>
            </div>
          </div>
        </div>

        {/* Coordinated Trip Summary */}
        <div className="bg-[#121212] rounded-xl p-2.5 border border-white/10 space-y-2 mb-3">
          <div className="flex items-center gap-2 text-[10px] text-neutral-300">
            <MapPin className="w-3 h-3 text-white shrink-0" />
            <span className="truncate">SRM Potheri Gate → Chennai Airport T1</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-neutral-300">
            <Clock className="w-3 h-3 text-neutral-400 shrink-0" />
            <span>Leaving today at ~04:35 PM</span>
          </div>
        </div>

        {/* Message Input Box */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-neutral-400 uppercase tracking-wider font-semibold">Intro Message</span>
            <span className="text-[9px] text-neutral-500">Preset active</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/20 text-[10px] text-neutral-200 leading-relaxed relative">
            "Hey Rahul! I'm also heading to Chennai Airport around 4:35 PM from SRM. Want to pool together and share the cab fare?"
          </div>
          {/* Quick chips */}
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="px-2 py-0.5 rounded-full bg-white/5 text-[8px] text-neutral-400 border border-white/5">
              Have 1 trolley bag
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/5 text-[8px] text-neutral-400 border border-white/5">
              Can book cab
            </span>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2 border-t border-white/10">
        <button className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <Send className="w-3.5 h-3.5" />
          Send Ride Request
        </button>
      </div>
    </div>
  );
};
