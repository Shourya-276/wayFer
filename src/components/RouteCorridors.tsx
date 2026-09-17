import React from 'react';
import { ArrowRight, GraduationCap, Briefcase, Train, Plane } from 'lucide-react';

export const RouteCorridors: React.FC = () => {
  const corridors = [
    {
      title: 'COLLEGE → AIRPORT',
      origin: 'Campus / Hostel',
      destination: 'Airport Terminal',
      icon: <Plane className="w-5 h-5 text-white" />,
      tag: 'Semester Breaks & Holidays',
      description: 'End-of-term flights, weekend trips, and festive rushes along airport highways.',
    },
    {
      title: 'HOME → OFFICE',
      origin: 'Residential Suburbs',
      destination: 'Tech Parks',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      tag: 'Daily Rush Hours',
      description: 'Avoid solo cab surges by matching with colleagues and neighbours on identical commutes.',
    },
    {
      title: 'HOSTEL → CAMPUS',
      origin: 'Off-Campus PGs',
      destination: 'Lecture Halls & Labs',
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      tag: 'Morning Schedules',
      description: 'Sync your morning departure with students heading to the same faculty gates.',
    },
    {
      title: 'CAMPUS → RAILWAY STATION',
      origin: 'College Campuses',
      destination: 'Railway & Bus Terminals',
      icon: <Train className="w-5 h-5 text-white" />,
      tag: 'Weekend & Holiday Travel',
      description: 'Catch early morning trains and intercity departures with travellers heading along the same transit route.',
    },
  ];

  return (
    <section id="why-wayfer" className="relative py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-semibold mb-4">
            <span>PEOPLE & ROUTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your route already has a <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">community</span>.
          </h2>
          <p className="mt-4 text-lg text-neutral-300 leading-relaxed font-normal">
            Every day, thousands of people travel along overlapping routes. WayFer gives them a simple way to discover each other and coordinate a shared ride.
          </p>
        </div>

        {/* Corridor Cards Grid in Monochrome */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corridors.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Corner ambient glow on hover */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>

              {/* Tag & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {item.tag}
                </span>
              </div>

              {/* Route Direction Title */}
              <div className="text-xs font-mono font-extrabold text-white tracking-wider mb-2">
                {item.title}
              </div>

              {/* Origin -> Destination Visual Track */}
              <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <span className="truncate">{item.origin}</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="truncate text-neutral-300">{item.destination}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Route line visual in card */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>Smart match algorithm</span>
                <span className="text-white group-hover:underline flex items-center gap-1 font-semibold">
                  Active Corridor
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </span>
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-neutral-900 border border-white/20 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <span className="text-xs font-mono text-white uppercase tracking-wider font-bold">The WayFer Principle</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-3">
                Rides shouldn't happen in isolation.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                When you share a common direction, coordinating a shared vehicle reduces congestion, splits costs fairly, and makes travel collaborative. No more paying full fare for empty seats.
              </p>
            </div>
            <a
              href="#waitlist"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
            >
              Bring WayFer to your corridor →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
