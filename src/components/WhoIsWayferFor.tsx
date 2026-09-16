import React from 'react';
import { GraduationCap, Briefcase, Plane, School } from 'lucide-react';

export const WhoIsWayferFor: React.FC = () => {
  const personas = [
    {
      title: 'STUDENTS',
      quote: 'Heading to class, home, or the airport.',
      description: 'Find friends and peers heading toward train stations, city centers, or airport terminals during holidays and weekends.',
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    },
    {
      title: 'WORKING PROFESSIONALS',
      quote: 'Travelling the same commute every day.',
      description: 'Transform monotonous, high-surge rush hours into dependable shared journeys with verified professionals in nearby offices.',
      icon: <Briefcase className="w-6 h-6 text-neutral-300" />,
    },
    {
      title: 'AIRPORT TRAVELLERS',
      quote: 'Going to the airport around the same time?',
      description: 'Long terminal drives are prime for ride sharing. Connect with travellers boarding flights in the same window.',
      icon: <Plane className="w-6 h-6 text-white" />,
    },
    {
      title: 'COLLEGE COMMUNITIES',
      quote: 'Thousands of students. Hundreds of overlapping routes.',
      description: 'Colleges form tightly clustered geographic nodes where hundreds of people depart at the exact same hour.',
      icon: <School className="w-6 h-6 text-neutral-300" />,
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
            COMMUNITIES IN MOTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mt-2">
            Who is <span className="text-white underline decoration-white/30 underline-offset-8">WayFer</span> for?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal">
            Built for anyone whose daily life involves repeated journeys along shared arterial routes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  {item.title}
                </span>

                <h3 className="text-lg font-bold text-white mt-1 mb-3">
                  "{item.quote}"
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-neutral-500 group-hover:text-white transition-colors">
                Available at Launch →
              </div>
            </div>
          ))}

          {/* Quick Waitlist Banner Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/15 via-[#121212] to-black border border-white/30 flex flex-col justify-between shadow-[0_0_35px_rgba(255,255,255,0.08)] md:col-span-2 lg:col-span-2">
            <div>
              <span className="text-xs font-mono text-neutral-300 uppercase font-bold tracking-wider">
                JOIN THE CORRIDOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-3">
                Be the first in your campus or office.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
                When 50+ people from your college campus or company join the waitlist, we activate priority route matching for your location so you can split rides from day one.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all hover:scale-105"
              >
                Join Your Community Waitlist
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
