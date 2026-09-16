import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const EarlyAccessBanner: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0C1524] via-[#09101C] to-dark-950 border border-brand-green/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center justify-center md:justify-start gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              COMMUNITY-FIRST EXPANSION
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Starting with people who <br className="hidden sm:block" />
              <span className="text-brand-green">already move together.</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              We're building WayFer around real communities and real routes — from college campuses to office corridors and airport journeys.
            </p>
          </div>

          <a
            href="#waitlist"
            className="shrink-0 px-8 py-4 rounded-full bg-brand-green hover:bg-brand-neon text-dark-950 font-black text-xs uppercase tracking-wider shadow-glow-green transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
          >
            Join Early Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

        </div>
      </div>
    </section>
  );
};
