import React from 'react';
import { Compass, Users, Car, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      action: 'MATCH',
      headline: "Tell WayFer where you're going and when.",
      description:
        'Set your departure point, destination, and departure window. Our corridor-matching engine immediately scans for nearby travellers with high route overlap.',
      icon: <Compass className="w-7 h-7 text-brand-green" />,
      accent: 'border-brand-green/40 shadow-glow-green',
    },
    {
      number: '02',
      action: 'MEET',
      headline: 'Discover people travelling your way and connect with them.',
      description:
        'Review matched profiles, route overlap percentages, and verified identities. Send a quick ride request and coordinate an effortless rendezvous spot.',
      icon: <Users className="w-7 h-7 text-brand-cyan" />,
      accent: 'border-brand-cyan/40 shadow-glow-cyan',
    },
    {
      number: '03',
      action: 'RIDE',
      headline: 'Coordinate the journey and share the ride.',
      description:
        'Meet at your agreed spot, hop into a shared cab or ride together, and split the travel cost seamlessly without complicated math or awkward exchanges.',
      icon: <Car className="w-7 h-7 text-emerald-400" />,
      accent: 'border-emerald-400/40 shadow-glow-green',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark-950 overflow-hidden">
      {/* Visual Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glow-badge text-brand-green font-mono text-xs uppercase tracking-widest font-bold mb-4">
          <span>THE PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          MATCH <span className="text-brand-green">→</span> MEET <span className="text-brand-cyan">→</span> RIDE
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Three simple stages designed to make shared mobility feel natural, dependable, and instant.
        </p>
      </div>

      {/* Steps Grid with Connecting Vector Road line */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Desktop Animated Route Line running behind cards */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-16 -z-10 opacity-40 pointer-events-none">
          <svg className="w-full h-20" viewBox="0 0 1000 60" fill="none">
            <path
              d="M 50 30 C 250 60, 400 0, 500 30 C 600 60, 750 0, 950 30"
              stroke="#00F076"
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
              className="p-8 rounded-3xl bg-[#080D17] border border-white/10 hover:border-white/20 transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-2 shadow-2xl"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black font-mono text-slate-600 group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Step Action Name */}
                <span className="text-xs font-mono font-bold tracking-widest text-brand-green uppercase">
                  STEP {step.number}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mt-1 mb-3">
                  {step.action}
                </h3>

                {/* Headline Quote */}
                <p className="text-base font-semibold text-slate-200 mb-3 leading-snug">
                  "{step.headline}"
                </p>

                {/* Detailed Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Micro Indicator */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase {step.number}</span>
                <span className="text-brand-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Central Statement */}
        <div className="mt-16 p-6 rounded-3xl bg-white/5 border border-white/10 text-center max-w-2xl mx-auto backdrop-blur-md">
          <p className="text-sm font-semibold text-slate-300">
            No complex route negotiations. No awkward fare disputes. Just people heading your way.
          </p>
        </div>

      </div>
    </section>
  );
};
