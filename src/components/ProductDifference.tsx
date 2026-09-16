import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProductDifference: React.FC = () => {
  const otherExperiences = [
    'Too many fragmented steps to set up a shared trip',
    'Difficult to discover travellers heading your exact way',
    'Awkward and endless manual coordination on chat groups',
    'Unclear matching criteria and uncertain meeting points',
  ];

  const wayferExperience = [
    'Choose your route with zero friction',
    'Find verified people travelling your corridor',
    'Connect instantly with contextual message requests',
    'Ride together and share the journey effortlessly',
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
            DESIGN PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mt-2">
            Sharing a ride shouldn't feel like <br />
            <span className="text-neutral-500">solving a puzzle.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal">
            We wanted the experience to feel completely natural.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Complex Experiences */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-6 opacity-75 hover:opacity-95 transition-opacity">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                CONVENTIONAL EXPERIENCES
              </span>
              <h3 className="text-xl font-bold text-neutral-200 mt-1">
                Friction & Overhead
              </h3>
            </div>

            <ul className="space-y-4 pt-2">
              {otherExperiences.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-neutral-400">
                  <XCircle className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5 text-xs text-neutral-500 font-mono">
              Result: Most people end up travelling solo and paying full price.
            </div>
          </div>

          {/* WayFer Experience */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141414] to-[#080808] border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.08)] space-y-6 relative overflow-hidden">
            {/* Top right decorative glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl"></div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                THE WAYFER APPROACH
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Four Natural Steps
              </h3>
            </div>

            <ul className="space-y-4 pt-2 relative z-10">
              {wayferExperience.map((point, index) => (
                <li key={point} className="flex items-start gap-3 text-sm font-medium text-neutral-100">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-white font-bold mr-2">0{index + 1}.</span>
                    <span>{point}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white font-mono">
              <span>MATCH → MEET → RIDE</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
