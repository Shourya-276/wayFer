import React from 'react';
import { Navigation } from 'lucide-react';

export const Screen6ActiveMeet: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col justify-between p-3 relative overflow-hidden font-sans text-xs select-none">
      {/* Background Stylized Pickup Map */}
      <div className="absolute inset-0 bg-black opacity-85">
        <svg className="w-full h-full" viewBox="0 0 300 450" fill="none">
          {/* Street layouts */}
          <path d="M-10 160 L 310 160" stroke="#222222" strokeWidth="12" />
          <path d="M140 -10 L 140 460" stroke="#2A2A2A" strokeWidth="16" />
          <path d="M60 160 Q 140 220 220 160" stroke="#1A1A1A" strokeWidth="6" />
          
          {/* Walking / Rendezvous radius circles */}
          <circle cx="140" cy="160" r="45" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="140" cy="160" r="80" fill="none" stroke="#A3A3A3" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

          {/* Rendezvous point */}
          <circle cx="140" cy="160" r="7" fill="#FFFFFF" />
          <circle cx="140" cy="160" r="16" fill="#FFFFFF" fillOpacity="0.25" className="animate-ping" />

          {/* User Marker */}
          <circle cx="115" cy="175" r="5" fill="#A3A3A3" />
          
          {/* Match (Rahul) Marker */}
          <circle cx="165" cy="145" r="5" fill="#FFFFFF" />
          <path d="M115 175 L 140 160 L 165 145" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Top Rendezvous Status Card */}
      <div className="relative z-10">
        <div className="bg-[#121212]/95 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl">
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              Meetup Point
            </span>
            <span className="text-[10px] text-neutral-300 font-mono font-bold">180m away</span>
          </div>
          <h4 className="font-bold text-white text-xs">SRM Main Campus Arch Gate</h4>
          <p className="text-[9px] text-neutral-400 mt-0.5">Rahul is arriving on foot in ~2 minutes</p>
        </div>
      </div>

      {/* Bottom Rider Coordination Box */}
      <div className="relative z-10 bg-[#121212]/95 backdrop-blur-md p-3 rounded-2xl border border-white/15 shadow-2xl space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-[10px] text-white">
              RV
            </div>
            <div>
              <div className="font-bold text-white text-[11px]">Rahul Varma</div>
              <div className="text-[9px] text-neutral-300">In proximity • Wearing blue hoodie</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-neutral-400">Cab Status</div>
            <div className="text-[10px] text-white font-bold">Toyota Etios (TN-19-...)</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-center">
          <button className="py-2 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-[10px] flex items-center justify-center gap-1">
            <Navigation className="w-3 h-3 text-neutral-300" />
            Navigate to Pin
          </button>
          <button className="py-2 rounded-xl bg-white text-black font-bold text-[10px] flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Confirm We Met
          </button>
        </div>
      </div>
    </div>
  );
};
