import React from 'react';

export const CoreInsight: React.FC = () => {
  return (
    <section className="relative py-36 px-4 sm:px-6 lg:px-8 bg-dark-950 overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Subtle moving route lines behind the typography */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M-100 300 C 300 150, 700 450, 1300 300"
            stroke="#00F076"
            strokeWidth="2"
            strokeDasharray="8 6"
            className="route-animate"
          />
          <path
            d="M-50 400 C 400 500, 800 200, 1250 350"
            stroke="#22D3EE"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="route-animate"
          />
          <path
            d="M100 -50 C 300 350, 900 250, 1100 650"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 10"
            className="route-animate"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        
        {/* Statement 1 */}
        <p className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-400 tracking-tight">
          The problem wasn't finding a ride.
        </p>

        {/* Statement 2 - Major visual moment */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          The problem was <br />
          <span className="text-gradient-brand">finding the people.</span>
        </h2>

        {/* Statement 3 */}
        <p className="text-xl sm:text-3xl font-medium text-slate-300 tracking-tight max-w-2xl mx-auto">
          People who were <span className="text-white font-semibold underline decoration-brand-green/60 decoration-2 underline-offset-8">already going your way</span>.
        </p>

      </div>
    </section>
  );
};
