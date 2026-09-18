import React from 'react';
import { Search, Users, Car, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      action: 'MATCH',
      headline: 'Find people going your way.',
      description:
        'Enter where you are and where you are headed. WayFer identifies commuters with overlapping destination corridors, compatible departure times, and verified student or employee status.',
      icon: <Search className="w-7 h-7 text-white" />,
      accent: 'border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    },
    {
      number: '02',
      action: 'MEET',
      headline: 'Connect before the ride.',
      description:
        'Coordinate safely with in-app chat. Agree on an easy pickup spot like the campus arch or station gate. No awkward phone calls or personal number exchanges.',
      icon: <Users className="w-7 h-7 text-white" />,
      accent: 'border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    },
    {
      number: '03',
      action: 'RIDE',
      headline: 'Split the fare. Share the ride.',
      description:
        'Hop into the cab together, split the cost fairly in half (or thirds), and arrive at your destination with 50% more money in your wallet.',
      icon: <Car className="w-7 h-7 text-white" />,
      accent: 'border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    },
  ];

  return (
    <section id="philosophy" className="relative py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Visual Header */}
      <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glow-badge text-white font-mono text-xs uppercase tracking-widest font-bold mb-4">
          <span>THE PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          MATCH <span className="text-white">→</span> MEET <span className="text-neutral-400">→</span> RIDE
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-normal">
          Three simple stages designed to make shared mobility feel natural, dependable, and instant.
        </p>
      </div>

      {/* Steps Grid with Connecting Vector Road line */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Desktop Animated Route Line running behind cards */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-16 -z-10 opacity-30 pointer-events-none">
          <svg className="w-full h-20" viewBox="0 0 1000 60" fill="none">
            <path
              d="M 50 30 C 250 60, 400 0, 500 30 C 600 60, 750 0, 950 30"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeDasharray="8 6"
              className="route-animate"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.action}
              className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-2 shadow-2xl"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black font-mono text-neutral-600 group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Step Action Name */}
                <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                  STEP {step.number}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mt-1 mb-3">
                  {step.action}
                </h3>

                {/* Headline Quote */}
                <p className="text-base font-semibold text-neutral-200 mb-3 leading-snug">
                  "{step.headline}"
                </p>

                {/* Detailed Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Micro Indicator */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Phase {step.number}</span>
                <span className="text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Central Statement */}
        <div className="mt-16 p-6 rounded-3xl bg-white/5 border border-white/10 text-center max-w-2xl mx-auto backdrop-blur-md">
          <p className="text-sm font-semibold text-neutral-300">
            No complex route negotiations. No awkward fare disputes. Just people heading your way.
          </p>
        </div>

      </div>
    </section>
  );
};
