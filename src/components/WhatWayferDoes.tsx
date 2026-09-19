import React from 'react';
import { Navigation, ArrowRight, Zap, Repeat } from 'lucide-react';

export const WhatWayferDoes: React.FC = () => {
  return (
    <section
      id="what-wayfer-does"
      className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Anchor for backwards compatibility with any philosophy links */}
      <div id="philosophy" className="absolute -top-24 pointer-events-none" />

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glow-badge text-white font-mono text-xs uppercase tracking-widest font-bold">
            <Zap className="w-3.5 h-3.5 text-white fill-white" />
            <span>WHAT WAYFER DOES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Two ways to share the ride.
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            One app for the trips you take every day, and the ones you take now.
          </p>
        </div>

        {/* Two Primary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1 — Carpool your daily commute */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0A] border border-white/15 hover:border-white/35 transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1.5 shadow-2xl overflow-hidden">
            {/* Corner ambient glow on hover */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>

            <div>
              {/* Card Header: Tag & Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-white bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                  EVERYDAY
                </span>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:border-white/35 transition-all">
                  <Repeat className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Carpool your daily commute
              </h3>

              {/* Card Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Going to work or college and back on the same route, same time? Match with people who make that trip too, share one vehicle, and split the cost — every single day.
              </p>
            </div>

            {/* Feature pill at bottom of card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Fixed Routes & Daily Hours
              </span>
              <span className="text-white group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                Daily Loop <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2 — Split a ride going your way */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0A] border border-white/15 hover:border-white/35 transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1.5 shadow-2xl overflow-hidden">
            {/* Corner ambient glow on hover */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>

            <div>
              {/* Card Header: Tag & Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-white bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                  ON-DEMAND
                </span>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:border-white/35 transition-all">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Split a ride going your way
              </h3>

              {/* Card Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Booking a cab, auto, or heading to the airport? Find someone travelling the same direction right now, share the ride, and pay a fraction of the solo fare.
              </p>
            </div>

            {/* Feature pill at bottom of card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Airport Runs & Instant City Cabs
              </span>
              <span className="text-white group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                Live Match <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>

        {/* Moved Bottom Central Statement */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/15 text-center max-w-3xl mx-auto backdrop-blur-md shadow-lg">
          <p className="text-base sm:text-lg font-medium text-neutral-200 tracking-tight">
            No complex route negotiations. No awkward fare disputes. Just people heading your way.
          </p>
        </div>

      </div>
    </section>
  );
};
