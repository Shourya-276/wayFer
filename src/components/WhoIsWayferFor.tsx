import React from 'react';
import { GraduationCap, Briefcase, Plane, School, Navigation } from 'lucide-react';

export const WhoIsWayferFor: React.FC = () => {
  const personas = [
    {
      title: 'STUDENTS',
      quote: 'Heading to class, home, or the airport.',
      description: 'Find friends and peers heading toward train stations, city centers, or transit terminals during holidays and weekends.',
      icon: <GraduationCap className="w-6 h-6 text-brand-green" />,
    },
    {
      title: 'WORKING PROFESSIONALS',
      quote: 'Travelling the same commute every day.',
      description: 'Transform monotonous, high-surge rush hours into dependable shared journeys with verified professionals in nearby offices.',
      icon: <Briefcase className="w-6 h-6 text-brand-cyan" />,
    },
    {
      title: 'AIRPORT TRAVELLERS',
      quote: 'Going to the airport around the same time?',
      description: 'Long terminal drives are prime for ride sharing. Connect with travellers boarding flights in the same window.',
      icon: <Plane className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'COLLEGE COMMUNITIES',
      quote: 'Thousands of students. Hundreds of overlapping routes.',
      description: 'Colleges form tightly clustered geographic nodes where hundreds of people depart at the exact same hour.',
      icon: <School className="w-6 h-6 text-teal-300" />,
    },
    {
      title: 'INTERCITY TRAVELLERS',
      quote: 'Find people heading in the same direction.',
      description: 'Heading home to a nearby district or city for the long weekend? Share highway tolls and fuel expenses easily.',
      icon: <Navigation className="w-6 h-6 text-brand-green" />,
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-green">
            COMMUNITIES IN MOTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mt-2">
            Who is <span className="text-brand-green">WayFer</span> for?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Built for anyone whose daily life involves repeated journeys along shared arterial roads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-[#080D17] border border-white/10 hover:border-brand-green/30 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-green/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <span className="text-xs font-mono font-bold tracking-wider text-brand-green uppercase">
                  {item.title}
                </span>

                <h3 className="text-lg font-bold text-white mt-1 mb-3">
                  "{item.quote}"
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-500 group-hover:text-brand-green transition-colors">
                Available at Launch →
              </div>
            </div>
          ))}

          {/* Quick Waitlist Banner Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-green/20 via-[#0C1422] to-dark-950 border border-brand-green/40 flex flex-col justify-between shadow-glow-green">
            <div>
              <span className="text-xs font-mono text-brand-green uppercase font-bold tracking-wider">
                JOIN THE CORRIDOR
              </span>
              <h3 className="text-2xl font-black text-white mt-2 mb-3">
                Be the first in your campus or office.
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                When 50+ people from your college or company join the waitlist, we activate priority route matching for your location.
              </p>
            </div>

            <a
              href="#waitlist"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-green text-dark-950 font-extrabold text-xs uppercase tracking-wider hover:bg-brand-neon transition-all hover:scale-105"
            >
              Join Your Community Waitlist
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
