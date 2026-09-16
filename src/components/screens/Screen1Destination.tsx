import React from 'react';
import { MapPin, Navigation, Clock, Search, ChevronRight } from 'lucide-react';

export const Screen1Destination: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col justify-between p-4 relative overflow-hidden select-none font-sans text-xs">
      {/* Top Map Background representation */}
      <div className="absolute inset-0 bg-black opacity-80">
        <svg className="w-full h-full" viewBox="0 0 300 450" fill="none">
          {/* Stylized road network */}
          <path d="M-20 80 Q 80 120 180 90 T 320 160" stroke="#222222" strokeWidth="6" />
          <path d="M40 -20 Q 60 180 90 280 T 200 480" stroke="#2A2A2A" strokeWidth="8" />
          <path d="M120 30 L 290 280" stroke="#222222" strokeWidth="4" />
          <path d="M-10 240 Q 140 220 280 340" stroke="#1A1A1A" strokeWidth="5" />
          
          {/* Active route corridor highlight */}
          <path d="M90 280 L 175 110" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="5 3" className="route-animate" />

          {/* Pickup and drop pins */}
          <circle cx="90" cy="280" r="6" fill="#A3A3A3" />
          <circle cx="90" cy="280" r="14" fill="#FFFFFF" fillOpacity="0.2" className="animate-ping" />
          <circle cx="175" cy="110" r="7" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Top Bar Header */}
      <div className="relative z-10 pt-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
              <Navigation className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight">Plan a Trip</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-neutral-300">Ride Share</span>
        </div>
      </div>

      {/* Main Destination Card */}
      <div className="relative z-10 bg-[#121212]/95 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-2xl mt-auto">
        <div className="space-y-2.5">
          {/* Origin */}
          <div className="flex items-center gap-2.5 bg-white/5 rounded-xl p-2.5 border border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-400 shrink-0"></div>
            <div className="flex-1 truncate">
              <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">Origin</div>
              <div className="text-white font-medium truncate text-[11px]">SRM University Main Campus, Gate 1</div>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-center gap-2.5 bg-white/10 rounded-xl p-2.5 border border-white/25">
            <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
            <div className="flex-1 truncate">
              <div className="text-[9px] uppercase tracking-wider text-white font-semibold">Destination</div>
              <div className="text-white font-semibold truncate text-[11px]">Chennai Int'l Airport (MAA)</div>
            </div>
          </div>
        </div>

        {/* Quick Options */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-white/10">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
            <Clock className="w-3 h-3 text-neutral-400" />
            <span className="text-[10px] text-neutral-200">Today, 04:30 PM</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
            <Search className="w-3 h-3 text-neutral-400" />
            <span className="text-[10px] text-neutral-200">± 15 min flex</span>
          </div>
        </div>

        {/* CTA Button inside phone */}
        <button className="w-full mt-3 py-2.5 rounded-xl bg-white text-black font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Find People Going My Way
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
