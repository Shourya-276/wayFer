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
      icon: <MapPin className="w-4 h-4 text-brand-green" />,
      tag: '01 • Origin & Destination',
      routeLabel: 'SRM Campus → Chennai Airport T1',
      actionHint: 'Scroll to pick departure time',
    },
    {
      id: 2,
      title: "Choose when you're leaving.",
      subtitle: 'Flexible departure windows',
      description:
        'Specify whether you need a ride right now or schedule ahead for an upcoming flight or shift with a flexible ±15 min window to maximize co-rider overlap.',
      icon: <Calendar className="w-4 h-4 text-brand-cyan" />,
      tag: '02 • Schedule & Time',
      routeLabel: 'Today • 04:30 PM (±15 min flex)',
      actionHint: 'Scroll to discover matches',
    },
    {
      id: 3,
      title: "See who's going your way.",
      subtitle: 'Corridor match algorithm',
      description:
        'Discover verified passengers and drivers heading in your direction, ranked by route overlap percentage, pickup proximity, and community verification.',
      icon: <Users className="w-4 h-4 text-emerald-400" />,
      tag: '03 • Match Discovery',
      routeLabel: '3 Matches found • 96% route overlap',
      actionHint: 'Scroll to connect with riders',
    },
    {
      id: 4,
      title: 'Connect before the ride.',
      subtitle: 'Effortless messaging',
      description:
        'Send a ride request with your luggage count or seat preferences. No awkward phone calls needed before knowing you share the exact same travel intent.',
      icon: <MessageSquare className="w-4 h-4 text-teal-300" />,
      tag: '04 • Ride Request',
      routeLabel: 'Request sent to Rahul Varma',
      actionHint: 'Scroll to confirm match',
    },
    {
      id: 5,
      title: 'Match.',
      subtitle: 'Instant confirmation & chat',
      description:
        'Once accepted, coordinate pickup nuances in the private match chat. WayFer automatically locks in the shared fare split breakdown.',
      icon: <Sparkles className="w-4 h-4 text-brand-green" />,
      tag: '05 • Confirmed Match',
      routeLabel: 'Match confirmed • Shared fare active',
      actionHint: 'Scroll to meet co-rider',
    },
    {
      id: 6,
      title: 'Meet.',
      subtitle: 'Pickup rendezvous guidance',
      description:
        'Live proximity radar guides you and your co-rider directly to a recognized, safe meeting spot (like the campus main arch or station pillar).',
      icon: <Navigation className="w-4 h-4 text-brand-cyan" />,
      tag: '06 • Rendezvous Spot',
      routeLabel: 'Meeting point: SRM Potheri Gate',
      actionHint: 'Scroll to embark on ride',
    },
    {
      id: 7,
      title: 'Ride.',
      subtitle: 'Live shared journey',
      description:
        'Track live progress along the highway or expressways with automated fair split tracking and peace of mind from start to finish.',
      icon: <Car className="w-4 h-4 text-emerald-400" />,
      tag: '07 • In-Transit Trip',
      routeLabel: 'En-route GST Road • 18 km left',
      actionHint: 'Scroll to complete trip',
    },
    {
      id: 8,
      title: 'Done.',
      subtitle: 'Seamless split & rating',
      description:
        'Arrive at your destination, review your verified savings, and rate your co-rider. The easiest ₹500+ you will ever save on a commute.',
      icon: <CheckCircle2 className="w-4 h-4 text-brand-green" />,
      tag: '08 • Completed Journey',
      routeLabel: 'Arrived MAA Airport • Saved ₹510',
      actionHint: 'Scroll to join the waitlist',
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

      // Divide scroll progress into 8 distinct steps
      const stepIndex = Math.min(8, Math.max(1, Math.floor(rawProgress * 8) + 1));
      setActiveScreen(stepIndex);

      // Progress within the active step (0% to 100%)
      const withinStep = (rawProgress * 8) % 1;
      setStepProgress(withinStep * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to a specific step when user clicks on a number
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
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
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
      className="relative h-[480vh] bg-dark-900 border-t border-white/5"
    >
      {/* Sticky Cinematic Viewport Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
        
        {/* Dynamic Ambient Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-green/8 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between py-4 sm:py-6 h-[92vh] max-h-[850px]">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3 h-3" />
                <span>THE COMPLETE PRODUCT JOURNEY • SCROLL TO EXPLORE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Simple enough to understand in <span className="text-brand-green">seconds</span>.
              </h2>
            </div>

            {/* Scroll Progress Pill */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-md">
                <ArrowDown className="w-3.5 h-3.5 text-brand-green animate-bounce" />
                <span>Scroll to advance</span>
                <span className="text-brand-green font-bold ml-1">0{activeScreen} / 08</span>
              </div>

              {/* Prev / Next Jump Buttons */}
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10">
                <button
                  onClick={() => scrollToStep(activeScreen > 1 ? activeScreen - 1 : 8)}
                  className="p-1 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Previous step"
                  title="Previous Step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToStep(activeScreen < 8 ? activeScreen + 1 : 1)}
                  className="p-1 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Next step"
                  title="Next Step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 8-Step Interactive Timeline Scrubber */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 shrink-0">
            {screens.map((s) => {
              const isActive = s.id === activeScreen;
              const isPast = s.id < activeScreen;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToStep(s.id)}
                  className={`relative p-2 sm:p-2.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group ${
                    isActive
                      ? 'bg-brand-green/15 border-brand-green/60 shadow-glow-green scale-[1.02]'
                      : isPast
                      ? 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25'
                      : 'bg-white/[0.02] border-white/5 text-slate-500 hover:border-white/15'
                  }`}
                >
                  {/* Micro Progress Line inside active button */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-green transition-all duration-75"
                      style={{ width: `${stepProgress}%` }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-0.5">
                    <span
                      className={`font-mono text-xs font-black transition-colors ${
                        isActive ? 'text-brand-green' : isPast ? 'text-white' : 'text-slate-500'
                      }`}
                    >
                      0{s.id}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>}
                  </div>

                  <div className="text-[10px] font-bold truncate text-white leading-tight">
                    {s.title.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Stage Card with 3D Phone + Story Narrator */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-5 sm:p-8 rounded-[32px] bg-[#080D18] border border-white/10 shadow-2xl relative overflow-hidden flex-1"
          >
            {/* Ambient Route Vector Background */}
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

            {/* Left: 3D Phone with screen transition */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative h-full">
              <div
                className="transition-transform duration-300 ease-out transform scale-[0.82] sm:scale-[0.88] lg:scale-95"
                style={{
                  transform: `perspective(1000px) rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
                }}
              >
                <PhoneMockup screenId={activeScreen} glow={true} />
              </div>

              {/* Corridor Micro Badge */}
              <div className="mt-1 px-3 py-0.5 rounded-full bg-dark-950/90 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-2 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                <span>{current.routeLabel}</span>
              </div>
            </div>

            {/* Right: Story Narrator */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 relative z-10 flex flex-col justify-center">
              
              {/* Step Tag */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
                  {current.icon}
                  <span>{current.tag}</span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Phase {activeScreen} of 8
                </span>
              </div>

              {/* Headline & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight transition-all duration-300">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-brand-green">
                  {current.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Features Pill Box */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
                  <div className="font-bold text-white text-xs mb-0.5">Effortless Flow</div>
                  <span className="text-[11px] text-slate-400 leading-tight">
                    Designed around real-world travel pain points with zero clutter.
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
                  <div className="font-bold text-white text-xs mb-0.5">Corridor Privacy</div>
                  <span className="text-[11px] text-slate-400 leading-tight">
                    Exact locations remain private until a shared trip is agreed upon.
                  </span>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => scrollToStep(activeScreen < 8 ? activeScreen + 1 : 1)}
                  className="px-4 py-2 rounded-xl bg-brand-green hover:bg-brand-neon text-dark-950 text-xs font-black uppercase tracking-wider shadow-glow-green transition-all flex items-center gap-1.5"
                >
                  <span>{activeScreen < 8 ? 'Next Step' : 'Restart Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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

          {/* Bottom Story Progress Strip */}
          <div className="flex items-center justify-between gap-4 text-xs font-mono text-slate-500 shrink-0 pt-1">
            <span className="hidden sm:inline">Scroll down to move through all 8 steps</span>
            <div className="flex-1 max-w-md h-1.5 bg-white/10 rounded-full overflow-hidden">
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
