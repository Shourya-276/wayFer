import React from 'react';
import { ShieldCheck, Gauge } from 'lucide-react';

export const Screen7RideTransit: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col justify-between p-3 relative overflow-hidden font-sans text-xs select-none">
      {/* Background Highway Map */}
      <div className="absolute inset-0 bg-black opacity-85">
        <svg className="w-full h-full" viewBox="0 0 300 450" fill="none">
          {/* GST Road Highway */}
          <path d="M50 460 C 90 320, 160 210, 240 -10" stroke="#222222" strokeWidth="18" />
          <path d="M50 460 C 90 320, 160 210, 240 -10" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="6 4" className="route-animate" />

          {/* Current vehicle coordinate */}
          <g transform="translate(145, 230)">
            <circle cx="0" cy="0" r="16" fill="#FFFFFF" fillOpacity="0.2" className="animate-ping" />
            <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          </g>

          {/* Destination Icon */}
          <circle cx="235" cy="15" r="8" fill="#A3A3A3" />
        </svg>
      </div>

      {/* Top Trip Banner */}
      <div className="relative z-10">
        <div className="bg-[#121212]/95 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl">
          <div className="flex items-center justify-between mb-1">
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-bold text-[9px] uppercase tracking-wider flex items-center gap-1 border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              On Route • Highway GST
            </span>
            <span className="text-[10px] text-neutral-300 font-bold">22 mins left</span>
          </div>
          <div className="flex items-baseline justify-between mt-1">
            <h4 className="font-extrabold text-white text-base">Arriving 05:12 PM</h4>
            <span className="text-[10px] text-neutral-400">18.4 km remaining</span>
          </div>
        </div>
      </div>

      {/* In-Trip Live Telemetry & Co-riders */}
      <div className="relative z-10 bg-[#121212]/95 backdrop-blur-md p-3 rounded-2xl border border-white/15 shadow-2xl space-y-2">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-neutral-400">Shared Co-Riders (2)</span>
          <span className="text-white font-bold">Split: 50% Active</span>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
          <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-[10px]">
            RV
          </div>
          <div className="flex-1 truncate">
            <div className="font-semibold text-white truncate text-[10px]">Rahul Varma</div>
            <div className="text-[8px] text-neutral-400">Drop-off: Terminal 1 Gate 3</div>
          </div>
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-neutral-400">
          <div className="flex items-center gap-1">
            <Gauge className="w-3 h-3 text-neutral-300" />
            <span>Speed: 58 km/h</span>
          </div>
          <span className="text-white font-semibold">Estimated Fare: ₹510 / person</span>
        </div>
      </div>
    </div>
  );
};
