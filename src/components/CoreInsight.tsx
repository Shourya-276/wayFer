import React from 'react';

export const CoreInsight: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden flex items-center justify-center">
      {/* Subtle moving route lines behind the typography in Monochrome */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M-100 300 C 300 150, 700 450, 1300 300"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="8 6"
            className="route-animate"
          />
          <path
            d="M-50 400 C 400 500, 800 200, 1250 350"
            stroke="#A3A3A3"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="route-animate"
          />
          <path
            d="M100 -50 C 300 350, 900 250, 1100 650"
            stroke="#525252"
            strokeWidth="1"
            strokeDasharray="4 10"
            className="route-animate"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8">
        
        {/* Statement 1 */}
        <p className="text-2xl sm:text-4xl lg:text-5xl font-light text-neutral-400 tracking-tight">
          The problem wasn't finding a ride.
        </p>

        {/* Statement 2 - Major visual moment */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          The problem was <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">finding the people.</span>
        </h2>

        {/* Statement 3 */}
        <p className="text-xl sm:text-3xl font-medium text-neutral-300 tracking-tight max-w-2xl mx-auto">
          People who were <span className="text-white font-semibold underline decoration-white/60 decoration-2 underline-offset-8">already going your way</span>.
        </p>

      </div>
    </section>
  );
};
