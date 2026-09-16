import React from 'react';
import { Navigation } from 'lucide-react';

export const Screen6ActiveMeet: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#080D16] text-white flex flex-col justify-between p-3 relative overflow-hidden font-sans text-xs select-none">
      {/* Background Stylized Pickup Map */}
      <div className="absolute inset-0 bg-[#070B13] opacity-80">
        <svg className="w-full h-full" viewBox="0 0 300 450" fill="none">
          {/* Street layouts */}
          <path d="M-10 160 L 310 160" stroke="#16233B" strokeWidth="12" />
          <path d="M140 -10 L 140 460" stroke="#1A2B47" strokeWidth="16" />
          <path d="M60 160 Q 140 220 220 160" stroke="#121D2F" strokeWidth="6" />
          
          {/* Walking / Rendezvous radius circles */}
          <circle cx="140" cy="160" r="45" fill="none" stroke="#00F076" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="140" cy="160" r="80" fill="none" stroke="#22D3EE" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

          {/* Rendezvous point */}
          <circle cx="140" cy="160" r="7" fill="#00F076" />
          <circle cx="140" cy="160" r="16" fill="#00F076" fillOpacity="0.25" className="animate-ping" />

          {/* User Marker */}
          <circle cx="115" cy="175" r="5" fill="#22D3EE" />
          
          {/* Match (Rahul) Marker */}
          <circle cx="165" cy="145" r="5" fill="#38EF7D" />
          <path d="M115 175 L 140 160 L 165 145" stroke="#00F076" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Top Rendezvous Status Card */}
      <div className="relative z-10">
        <div className="bg-[#0B1322]/90 backdrop-blur-md p-3 rounded-2xl border border-brand-green/30 shadow-xl">
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green text-[9px] font-bold tracking-wider uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
              Meetup Point
            </span>
            <span className="text-[10px] text-brand-cyan font-mono font-bold">180m away</span>
          </div>
          <h4 className="font-bold text-white text-xs">SRM Main Campus Arch Gate</h4>
          <p className="text-[9px] text-slate-400 mt-0.5">Rahul is arriving on foot in ~2 minutes</p>
        </div>
      </div>

      {/* Bottom Rider Coordination Box */}
      <div className="relative z-10 bg-[#0A101C]/95 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-2xl space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center font-bold text-[10px] text-brand-green">
              RV
            </div>
            <div>
              <div className="font-bold text-white text-[11px]">Rahul Varma</div>
              <div className="text-[9px] text-brand-green">In proximity • Wearing blue hoodie</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-slate-400">Cab Status</div>
            <div className="text-[10px] text-white font-bold">Toyota Etios (TN-19-...)</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-center">
          <button className="py-2 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-[10px] flex items-center justify-center gap-1">
            <Navigation className="w-3 h-3 text-brand-cyan" />
            Navigate to Pin
          </button>
          <button className="py-2 rounded-xl bg-brand-green text-dark-950 font-bold text-[10px] flex items-center justify-center gap-1 shadow-glow-green">
            Confirm We Met
          </button>
        </div>
      </div>
    </div>
  );
};
