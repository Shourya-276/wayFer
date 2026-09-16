import React from 'react';
import { ArrowRight, GraduationCap, Briefcase, Building, Plane, Navigation2 } from 'lucide-react';

export const RouteCorridors: React.FC = () => {
  const corridors = [
    {
      title: 'COLLEGE → AIRPORT',
      origin: 'Campus / Hostel',
      destination: 'Airport Terminal',
      icon: <Plane className="w-5 h-5 text-brand-green" />,
      tag: 'Semester Breaks & Holidays',
      description: 'End-of-term flights, weekend trips, and festive rushes along airport highways.',
    },
    {
      title: 'HOME → OFFICE',
      origin: 'Residential Suburbs',
      destination: 'Tech Parks & CBD',
      icon: <Briefcase className="w-5 h-5 text-brand-cyan" />,
      tag: 'Daily Rush Hours',
      description: 'Avoid solo cab surges by matching with colleagues and neighbours on identical commutes.',
    },
    {
      title: 'HOSTEL → CAMPUS',
      origin: 'Off-Campus PGs',
      destination: 'Lecture Halls & Labs',
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      tag: 'Morning Schedules',
      description: 'Sync your morning departure with students heading to the same faculty gates.',
    },
    {
      title: 'RESIDENCE → TECH PARK',
      origin: 'Gated Communities',
      destination: 'IT Corridors',
      icon: <Building className="w-5 h-5 text-teal-300" />,
      tag: 'Weekday Schedules',
      description: 'Shared daily rides along major arterial expressways without complicated setups.',
    },
    {
      title: 'CITY → CITY',
      origin: 'Hub Central',
      destination: 'Intercity Highway',
      icon: <Navigation2 className="w-5 h-5 text-brand-green" />,
      tag: 'Weekend Journeys',
      description: 'Find fellow travellers heading in the exact same intercity direction.',
    },
  ];

  return (
    <section id="why-wayfer" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-mono font-semibold mb-4">
            <span>PEOPLE & ROUTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your route already has a <span className="text-brand-green">community</span>.
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            Every day, thousands of people travel along overlapping routes. WayFer gives them a simple way to discover each other and coordinate a shared ride.
          </p>
        </div>

        {/* Corridor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corridors.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-3xl bg-[#090E18] border border-white/10 hover:border-brand-green/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-green/5 relative overflow-hidden"
            >
              {/* Corner ambient glow on hover */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl group-hover:bg-brand-green/20 transition-all"></div>

              {/* Tag & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-green/30 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {item.tag}
                </span>
              </div>

              {/* Route Direction Title */}
              <div className="text-xs font-mono font-extrabold text-brand-green tracking-wider mb-2">
                {item.title}
              </div>

              {/* Origin -> Destination Visual Track */}
              <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <span className="truncate">{item.origin}</span>
                <ArrowRight className="w-4 h-4 text-brand-green shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="truncate text-slate-200">{item.destination}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Route line visual in card */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Direct match algorithm</span>
                <span className="text-brand-green group-hover:underline flex items-center gap-1">
                  Active Corridor
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                </span>
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-brand-green/15 via-[#0A101C] to-dark-950 border border-brand-green/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand-green uppercase tracking-wider font-bold">The WayFer Principle</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                Rides shouldn't happen in isolation.
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                When you share a common direction, coordinating a shared vehicle reduces congestion, splits costs fairly, and makes travel collaborative.
              </p>
            </div>
            <a
              href="#waitlist"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green hover:text-white transition-colors"
            >
              Bring WayFer to your corridor →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
