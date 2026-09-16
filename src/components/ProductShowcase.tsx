import React, { useState, useEffect, useRef } from 'react';
import { PhoneMockup } from './PhoneMockup';
import {
  MapPin,
  Calendar,
  Users,
  MessageSquare,
  Sparkles,
  Navigation,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ArrowRight,
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const [activeScreen, setActiveScreen] = useState<number>(1);
  const [overallProgress, setOverallProgress] = useState<number>(0);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const screens = [
    {
      id: 1,
      title: "Choose where you're going.",
      subtitle: 'Set origin & destination',
      description:
        'Drop your pin or select from frequent campus and corporate corridors. WayFer calculates intersecting route corridors across all nearby travellers in real time.',
      icon: <MapPin className="w-3.5 h-3.5 text-brand-green" />,
      tag: '01 • Origin & Destination',
      routeLabel: 'SRM Campus → Chennai Airport T1',
    },
    {
      id: 2,
      title: "Choose when you're leaving.",
      subtitle: 'Flexible departure windows',
      description:
        'Specify whether you need a ride right now or schedule ahead for an upcoming flight or shift with a flexible ±15 min window to maximize co-rider overlap.',
      icon: <Calendar className="w-3.5 h-3.5 text-brand-cyan" />,
      tag: '02 • Schedule & Time',
      routeLabel: 'Today • 04:30 PM (±15 min flex)',
    },
    {
      id: 3,
      title: "See who's going your way.",
      subtitle: 'Corridor match algorithm',
      description:
        'Discover verified passengers and drivers heading in your direction, ranked by route overlap percentage, pickup proximity, and community verification.',
      icon: <Users className="w-3.5 h-3.5 text-emerald-400" />,
      tag: '03 • Match Discovery',
      routeLabel: '3 Matches found • 96% route overlap',
    },
    {
      id: 4,
      title: 'Connect before the ride.',
      subtitle: 'Effortless messaging',
      description:
        'Send a ride request with your luggage count or seat preferences. No awkward phone calls needed before knowing you share the exact same travel intent.',
      icon: <MessageSquare className="w-3.5 h-3.5 text-teal-300" />,
      tag: '04 • Ride Request',
      routeLabel: 'Request sent to Rahul Varma',
    },
    {
      id: 5,
      title: 'Match.',
      subtitle: 'Instant confirmation & chat',
      description:
        'Once accepted, coordinate pickup nuances in the private match chat. WayFer automatically locks in the shared fare split breakdown.',
      icon: <Sparkles className="w-3.5 h-3.5 text-brand-green" />,
      tag: '05 • Confirmed Match',
      routeLabel: 'Match confirmed • Shared fare active',
    },
    {
      id: 6,
      title: 'Meet.',
      subtitle: 'Pickup rendezvous guidance',
      description:
        'Live proximity radar guides you and your co-rider directly to a recognized, safe meeting spot (like the campus main arch or station pillar).',
      icon: <Navigation className="w-3.5 h-3.5 text-brand-cyan" />,
      tag: '06 • Rendezvous Spot',
      routeLabel: 'Meeting point: SRM Potheri Gate',
    },
    {
      id: 7,
      title: 'Ride.',
      subtitle: 'Live shared journey',
      description:
        'Track live progress along the highway or expressways with automated fair split tracking and peace of mind from start to finish.',
      icon: <Car className="w-3.5 h-3.5 text-emerald-400" />,
      tag: '07 • In-Transit Trip',
      routeLabel: 'En-route GST Road • 18 km left',
    },
    {
      id: 8,
      title: 'Done.',
      subtitle: 'Seamless split & rating',
      description:
        'Arrive at your destination, review your verified savings, and rate your co-rider. The easiest ₹500+ you will ever save on a commute.',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />,
      tag: '08 • Completed Journey',
      routeLabel: 'Arrived MAA Airport • Saved ₹510',
    },
  ];

  // Scroll-driven story progression: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(0.9999, currentScroll / totalScrollable));
      setOverallProgress(rawProgress);

      // Map scroll progress across 8 steps
      const stepIndex = Math.min(8, Math.max(1, Math.floor(rawProgress * 8) + 1));
      setActiveScreen(stepIndex);

      // Progress within active step (0% to 100%)
      const withinStep = (rawProgress * 8) % 1;
      setStepProgress(withinStep * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to a specific step
  const scrollToStep = (targetStep: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const containerTop = scrollTop + rect.top;
    const totalScrollable = sectionRef.current.clientHeight - window.innerHeight;
    const targetProgress = (targetStep - 0.5) / 8;
    const targetY = containerTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  // 3D Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setMouseTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const current = screens[activeScreen - 1];

  return (
    <section
      id="product-showcase"
      ref={sectionRef}
      className="relative h-[420vh] bg-dark-900 border-t border-white/5"
    >
      {/* Sticky Viewport Canvas - Starts cleanly below navbar with guaranteed full view */}
      <div className="sticky top-16 h-[calc(100vh-4.5rem)] w-full flex flex-col justify-center py-2 px-3 sm:px-6 lg:px-8 z-20 overflow-hidden">
        
        {/* Dynamic Ambient Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand-green/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center gap-2 sm:gap-2.5">
          
          {/* 1. Ultra-Compact Header */}
          <div className="flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[10px] font-mono font-bold tracking-wide">
                <Sparkles className="w-3 h-3" />
                <span>PRODUCT JOURNEY</span>
              </span>
              <h2 className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-white leading-none">
                Simple enough to understand in <span className="text-brand-green">seconds</span>.
              </h2>
            </div>

            {/* Scroll Indicator & Prev/Next */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs font-mono backdrop-blur-md">
                <ArrowDown className="w-3 h-3 text-brand-green animate-bounce" />
                <span className="hidden md:inline text-slate-400">Scroll down:</span>
                <span className="text-brand-green font-bold">0{activeScreen} / 08</span>
              </div>

              <div className="flex items-center gap-0.5 bg-white/5 p-0.5 rounded-xl border border-white/10">
                <button
                  onClick={() => scrollToStep(activeScreen > 1 ? activeScreen - 1 : 8)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Previous step"
                  title="Previous Step"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => scrollToStep(activeScreen < 8 ? activeScreen + 1 : 1)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Next step"
                  title="Next Step"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Slim 8-Step Timeline Scrubber (Takes ~32px height) */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 shrink-0">
            {screens.map((s) => {
              const isActive = s.id === activeScreen;
              const isPast = s.id < activeScreen;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToStep(s.id)}
                  className={`relative px-2 py-1 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer group ${
                    isActive
                      ? 'bg-brand-green/15 border-brand-green/60 shadow-glow-green scale-[1.01]'
                      : isPast
                      ? 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      : 'bg-white/[0.02] border-white/5 text-slate-500 hover:border-white/10'
                  }`}
                >
                  {/* Micro Progress Line inside active button */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-green transition-all duration-75"
                      style={{ width: `${stepProgress}%` }}
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] font-black transition-colors ${
                        isActive ? 'text-brand-green' : isPast ? 'text-white' : 'text-slate-500'
                      }`}
                    >
                      0{s.id}
                    </span>
                    {isActive && <span className="w-1 h-1 rounded-full bg-brand-green animate-ping"></span>}
                  </div>

                  <div className="text-[9px] font-bold truncate text-white leading-tight mt-0.5">
                    {s.title.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* 3. Dynamic Stage Card (Clamped height so it NEVER exceeds viewport) */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-center p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#080D18] border border-white/10 shadow-2xl relative overflow-hidden shrink-0 max-h-[440px] sm:max-h-[460px]"
          >
            {/* Ambient Background Route Line */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
                <path
                  d="M -50 100 C 300 400, 700 100, 1100 500"
                  stroke="#00F076"
                  strokeWidth="4"
                  strokeDasharray="10 8"
                  className="route-animate"
                />
              </svg>
            </div>

            {/* Left: Strictly Boxed Phone (Layout height is clamped to 380px) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-[210px] h-[340px] sm:h-[370px] flex items-center justify-center">
                <div
                  className="w-[300px] h-[610px] scale-[0.55] sm:scale-[0.60] origin-center shrink-0 transition-transform duration-300 ease-out"
                  style={{
                    transform: `scale(${window.innerWidth < 640 ? 0.55 : 0.60}) perspective(800px) rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
                  }}
                >
                  <PhoneMockup screenId={activeScreen} glow={true} />
                </div>
              </div>

              {/* Corridor Micro Badge */}
              <div className="-mt-2 px-2.5 py-0.5 rounded-full bg-dark-950/90 border border-white/10 text-[9px] sm:text-[10px] font-mono text-slate-300 flex items-center gap-1.5 backdrop-blur-md shadow-lg shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                <span className="truncate max-w-[220px]">{current.routeLabel}</span>
              </div>
            </div>

            {/* Right: Story Narrator (Tight, complete layout) */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-3 relative z-10 flex flex-col justify-center">
              
              {/* Step Tag */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[10px] sm:text-[11px] font-mono font-bold">
                  {current.icon}
                  <span>{current.tag}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-500">
                  Phase {activeScreen} of 8
                </span>
              </div>

              {/* Headline & Subtitle */}
              <div className="space-y-0.5">
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-tight transition-all duration-200">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-green">
                  {current.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                {current.description}
              </p>

              {/* Compact 2-Pill Feature Grid */}
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
                  <div className="font-bold text-white text-[11px] mb-0.5">Effortless Flow</div>
                  <span className="text-[10px] text-slate-400 leading-tight block">
                    Zero phone-call friction.
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
                  <div className="font-bold text-white text-[11px] mb-0.5">Corridor Privacy</div>
                  <span className="text-[10px] text-slate-400 leading-tight block">
                    Coordinates stay masked.
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between shrink-0">
                <button
                  onClick={() => scrollToStep(activeScreen < 8 ? activeScreen + 1 : 1)}
                  className="px-3 py-1.5 rounded-xl bg-brand-green hover:bg-brand-neon text-dark-950 text-xs font-black uppercase tracking-wider shadow-glow-green transition-all flex items-center gap-1"
                >
                  <span>{activeScreen < 8 ? 'Next Step' : 'Restart Story'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <a
                  href="#waitlist"
                  className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
                >
                  Join Waitlist <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

          {/* 4. Bottom Story Progress Strip (Takes ~16px height) */}
          <div className="flex items-center justify-between gap-3 text-[10px] font-mono text-slate-500 shrink-0">
            <span className="hidden sm:inline">Scroll down to move through all 8 steps</span>
            <div className="flex-1 max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-green transition-all duration-150 rounded-full"
                style={{ width: `${Math.round(overallProgress * 100)}%` }}
              />
            </div>
            <span>{Math.round(overallProgress * 100)}% viewed</span>
          </div>

        </div>

      </div>
    </section>
  );
};
