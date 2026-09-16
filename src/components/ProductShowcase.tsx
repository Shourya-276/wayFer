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
  Play,
  Pause,
  ArrowRight,
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [stepProgress, setStepProgress] = useState<number>(0);
  const stageRef = useRef<HTMLDivElement>(null);

  const screens = [
    {
      id: 1,
      title: "Choose where you're going.",
      subtitle: 'Set origin & destination',
      description:
        'Drop your pin or pick from frequent campus and office corridors. WayFer immediately calculates intersecting road vectors.',
      icon: <MapPin className="w-4 h-4 text-brand-green" />,
      tag: '01 • Origin & Destination',
      routeLabel: 'SRM Campus → Chennai Airport T1',
    },
    {
      id: 2,
      title: "Choose when you're leaving.",
      subtitle: 'Flexible departure windows',
      description:
        'Specify whether you need a ride right now or want to schedule ahead for an upcoming flight or shift with a flexible ±15 min window.',
      icon: <Calendar className="w-4 h-4 text-brand-cyan" />,
      tag: '02 • Schedule & Time',
      routeLabel: 'Today • 04:30 PM (±15 min flex)',
    },
    {
      id: 3,
      title: "See who's going your way.",
      subtitle: 'Corridor match algorithm',
      description:
        'View verified travellers heading in the same direction, scored by route overlap percentage, pickup proximity, and verified student badges.',
      icon: <Users className="w-4 h-4 text-emerald-400" />,
      tag: '03 • Match Discovery',
      routeLabel: '3 Matches found • 96% route overlap',
    },
    {
      id: 4,
      title: 'Connect before the ride.',
      subtitle: 'Effortless messaging',
      description:
        'Send a ride request with luggage notes or preferences. No awkward phone calls required before knowing you share the same travel intent.',
      icon: <MessageSquare className="w-4 h-4 text-teal-300" />,
      tag: '04 • Ride Request',
      routeLabel: 'Request sent to Rahul Varma',
    },
    {
      id: 5,
      title: 'Match.',
      subtitle: 'Instant confirmation & chat',
      description:
        'When your request is accepted, coordinate the meetup spot via in-app chat and lock in the shared cab arrangement.',
      icon: <Sparkles className="w-4 h-4 text-brand-green" />,
      tag: '05 • Confirmed Match',
      routeLabel: 'Match confirmed • Shared fare active',
    },
    {
      id: 6,
      title: 'Meet.',
      subtitle: 'Pickup rendezvous guidance',
      description:
        'Live proximity radar guides you and your co-rider to an easy meeting point (like the campus arch or station gate).',
      icon: <Navigation className="w-4 h-4 text-brand-cyan" />,
      tag: '06 • Rendezvous Spot',
      routeLabel: 'Meeting point: SRM Potheri Gate',
    },
    {
      id: 7,
      title: 'Ride.',
      subtitle: 'Live shared journey',
      description:
        'Track live progress along the highway or city expressways with automated fair split tracking throughout the trip.',
      icon: <Car className="w-4 h-4 text-emerald-400" />,
      tag: '07 • In-Transit Trip',
      routeLabel: 'En-route GST Road • 18 km left',
    },
    {
      id: 8,
      title: 'Done.',
      subtitle: 'Seamless split & rating',
      description:
        'Arrive at your destination, review your verified savings, and rate your co-rider in seconds.',
      icon: <CheckCircle2 className="w-4 h-4 text-brand-green" />,
      tag: '08 • Completed Journey',
      routeLabel: 'Arrived MAA Airport • Saved ₹510',
    },
  ];

  const STEP_DURATION = 4200; // ms per slide

  // Cinematic fluid auto-flow timer with progress bar
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / STEP_DURATION) * 100);
      setStepProgress(progress);

      if (elapsed >= STEP_DURATION) {
        setActiveScreen((prev) => (prev < screens.length ? prev + 1 : 1));
        setStepProgress(0);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isPlaying, activeScreen, screens.length]);

  // Handle subtle 3D parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14; // max +/- 7 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setMouseTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const selectScreen = (id: number) => {
    setActiveScreen(id);
    setStepProgress(0);
  };

  const current = screens[activeScreen - 1];

  return (
    <section
      id="product-showcase"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-900 border-t border-white/5 overflow-hidden"
    >
      {/* Dynamic Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-green/8 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE COMPLETE PRODUCT JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Simple enough to understand in <span className="text-brand-green">seconds</span>.
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Watch how natural it is to match, meet, and share a ride — from route discovery to doorstep.
            </p>
          </div>

          {/* Autoplay & Scrubbing Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono flex items-center gap-2 transition-all hover:border-brand-green/40 shadow-sm"
              title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-brand-green" />
                  <span>Pause Story</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-brand-green" />
                  <span>Resume Flow</span>
                </>
              )}
            </button>

            {/* Quick Prev / Next Buttons */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10">
              <button
                onClick={() => selectScreen(activeScreen > 1 ? activeScreen - 1 : screens.length)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono text-brand-green font-bold">
                {activeScreen} / 8
              </span>
              <button
                onClick={() => selectScreen(activeScreen < screens.length ? activeScreen + 1 : 1)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 8-Step Timeline Scrubber Bar */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-10">
          {screens.map((s) => {
            const isActive = s.id === activeScreen;
            const isPast = s.id < activeScreen;
            return (
              <button
                key={s.id}
                onClick={() => selectScreen(s.id)}
                className={`relative p-2.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isActive
                    ? 'bg-brand-green/15 border-brand-green/60 shadow-glow-green'
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

                <div className="flex items-center justify-between mb-1">
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

        {/* Dynamic 3D Stage & Interactive Card */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-[36px] bg-[#080D18] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Route Line running diagonally */}
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

          {/* Left Column: Interactive 3D Phone with Smooth Parallax & Transition */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div
              className="transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
              }}
            >
              <PhoneMockup screenId={activeScreen} glow={true} />
            </div>

            {/* Micro Badge for active corridor */}
            <div className="mt-4 px-3 py-1 rounded-full bg-dark-950/80 border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-2 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span>{current.routeLabel}</span>
            </div>
          </div>

          {/* Right Column: Dynamic Stage Card with Smooth Slide */}
          <div className="lg:col-span-6 space-y-6 relative z-10">
            
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
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {current.title}
              </h3>
              <p className="text-base font-semibold text-brand-green">
                {current.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Feature Highlights Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
                <div className="font-bold text-white text-xs mb-1">Effortless Flow</div>
                <span className="text-[11px] text-slate-400 leading-tight">
                  Designed around real-world travel pain points with zero clutter.
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
                <div className="font-bold text-white text-xs mb-1">Corridor Privacy</div>
                <span className="text-[11px] text-slate-400 leading-tight">
                  Exact locations remain private until a shared trip is agreed upon.
                </span>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => selectScreen(activeScreen > 1 ? activeScreen - 1 : screens.length)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => selectScreen(activeScreen < screens.length ? activeScreen + 1 : 1)}
                  className="px-4 py-2 rounded-xl bg-brand-green hover:bg-brand-neon text-dark-950 text-xs font-black uppercase tracking-wider shadow-glow-green transition-all"
                >
                  Next Step →
                </button>
              </div>

              <a
                href="#waitlist"
                className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
              >
                Join Waitlist <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
