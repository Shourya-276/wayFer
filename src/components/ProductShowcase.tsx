import React, { useState, useEffect, useRef } from 'react';
import { PhoneMockup } from './PhoneMockup';
import {
  MapPin,
  Calendar,
  Users,
  MessageSquare,
  Zap,
  Navigation,
  CheckCircle2,
  Bell,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Flag,
  Play,
  Pause,
  User,
  Car,
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  const [activeScreen, setActiveScreen] = useState<number>(1);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  // 14 Real Scanned Product Screenshots & Authentic Journey Steps in Monochrome
  const screens = [
    {
      id: 1,
      screenImageId: 1,
      tabTitle: 'Map',
      title: 'Cut your travel cost in half.',
      subtitle: 'See live routes and rides near you',
      description:
        'Open WayFer to see people travelling your way right now — across the city or your campus — before you pay full fare for a solo cab.',
      icon: <MapPin className="w-3.5 h-3.5 text-white" />,
      tag: '01 • Live Route Map',
      featureA: 'Live Radar — see real commuters on your route',
      featureB: 'One tap to Book a Ride or open Requests',
    },
    {
      id: 2,
      screenImageId: 2,
      tabTitle: 'Book Ride',
      title: 'Book a ride in seconds.',
      subtitle: 'Set your pickup and drop, and we find your match',
      description:
        "Enter where you're starting and where you're going. Tap Book Ride and WayFer instantly looks for people heading the exact same way.",
      icon: <Navigation className="w-3.5 h-3.5 text-neutral-300" />,
      tag: '02 • Smart Book Ride',
      featureA: 'One-tap booking to start matching',
      featureB: 'Precise pickup points — home, campus, or tech park gate',
    },
    {
      id: 3,
      screenImageId: 3,
      tabTitle: 'Time',
      title: 'Ride now, or schedule ahead.',
      subtitle: 'Pick a departure window',
      description:
        'Travelling later? Choose a date and time. WayFer groups you with others leaving around the same 15-minute window, so more people match.',
      icon: <Calendar className="w-3.5 h-3.5 text-white" />,
      tag: '03 • Departure Window',
      featureA: 'Schedule rides ahead of time',
      featureB: 'Auto-groups riders leaving within 15 minutes',
    },
    {
      id: 4,
      screenImageId: 4,
      tabTitle: 'Scheduled',
      title: 'Your ride is set.',
      subtitle: 'Matching starts automatically',
      description:
        'Your ride is confirmed and shown on the map — green for pickup, red for drop. WayFer starts finding co-riders on your route right away.',
      icon: <Check className="w-3.5 h-3.5 text-white" />,
      tag: '04 • Ride Scheduled',
      featureA: 'Automatically scans for nearby travellers',
      featureB: 'See your full route on the map',
    },
    {
      id: 5,
      screenImageId: 12,
      tabTitle: 'Alert',
      title: "Get notified the moment there's a match.",
      subtitle: 'Real-time alerts',
      description:
        'Once your ride is set, WayFer alerts you instantly the moment someone heading your way is found — no need to keep checking.',
      icon: <Bell className="w-3.5 h-3.5 text-white" />,
      tag: '05 • Real-Time Alert',
      featureA: 'Instant push notifications',
      featureB: 'Tap the alert to jump straight to your match',
    },
    {
      id: 6,
      screenImageId: 5,
      tabTitle: 'Active',
      title: 'Find someone to split a cab with.',
      subtitle: 'See riders on your route, live',
      description:
        "Your active ride shows nearby riders heading the same way — people looking to split a cab or auto fare with you. See who's going your way before paying for the whole ride alone.",
      icon: <Users className="w-3.5 h-3.5 text-white" />,
      tag: '06 • Cab & Auto Split',
      featureA: 'Riders on your route flagged live on the map',
      featureB: 'Send a request or cancel any time',
    },
    {
      id: 7,
      screenImageId: 6,
      tabTitle: 'Co-Rider',
      title: 'Check their trip before you connect.',
      subtitle: 'Full route details up front',
      description:
        'Tap a match to see their exact pickup, drop, and timing. If it works for you, send a message request in one tap.',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />,
      tag: '07 • Co-Rider Details',
      featureA: 'See exact pickup and drop points',
      featureB: 'Connect without sharing your phone number',
    },
    {
      id: 8,
      screenImageId: 13,
      tabTitle: 'Mode',
      title: 'Rider or Host — switch any time.',
      subtitle: 'One app, both ways to travel',
      description:
        "Switch between two modes: Rider, to find and split a cab going your way, or Host, to offer seats in your own car and share the cost with people on your route. Carpool or cab-share — it's your choice.",
      icon: <User className="w-3.5 h-3.5 text-white" />,
      tag: '08 • Rider & Host Mode',
      featureA: 'Toggle between Rider and Host in one tap',
      featureB: 'Manage your account and privacy settings',
    },
    {
      id: 9,
      screenImageId: 14,
      tabTitle: 'Carpool',
      title: 'Find a car already going your way.',
      subtitle: 'See ride hosts driving your route, live',
      description:
        'WayFer also shows ride hosts — people driving their own car along your route with a free seat. Their vehicle appears live on the map, ready to share the commute for a small fare.',
      icon: <Car className="w-3.5 h-3.5 text-white" />,
      tag: '09 • Live Carpooling',
      featureA: 'Ride-host cars shown live on the map',
      featureB: 'Split fuel instead of paying for a full cab',
    },
    {
      id: 10,
      screenImageId: 15,
      tabTitle: 'Host Trip',
      title: "Join a host's ride for a small fare.",
      subtitle: 'Transparent trip and upfront cost',
      description:
        "See a host's route, vehicle, and departure time, then lock your seat for a small upfront fare instead of paying for a whole cab yourself.",
      icon: <Car className="w-3.5 h-3.5 text-neutral-300" />,
      tag: '10 • Host Trip Details',
      featureA: 'Commute for a fraction of a solo cab',
      featureB: 'Message the host directly to confirm',
    },
    {
      id: 11,
      screenImageId: 7,
      tabTitle: 'Requests',
      title: 'All your requests in one place.',
      subtitle: "Manage who's joining",
      description:
        "A red badge tells you when someone wants to share your ride. Review incoming requests and track the ones you've sent.",
      icon: <MessageSquare className="w-3.5 h-3.5 text-white" />,
      tag: '11 • Requests Hub',
      featureA: 'Instant alerts on new requests',
      featureB: 'Switch between Received and Sent',
    },
    {
      id: 12,
      screenImageId: 8,
      tabTitle: 'Chat',
      title: 'Sort out the details in chat.',
      subtitle: 'Coordinate before you ride',
      description:
        'Once matched, a private in-app chat lets you agree on an exact pickup spot and time — no phone numbers exchanged.',
      icon: <Zap className="w-3.5 h-3.5 text-white fill-white" />,
      tag: '12 • In-App Chat',
      featureA: 'Private chat, no phone number shared',
      featureB: 'Agree on a meeting point before heading out',
    },
    {
      id: 13,
      screenImageId: 9,
      tabTitle: 'Accepted',
      title: "Matched — and you're on your way.",
      subtitle: 'Live trip controls',
      description:
        'When your request is accepted, the ride switches to Accepted. Sort the shared fare in chat, with an End Trip button ready when you arrive.',
      icon: <Flag className="w-3.5 h-3.5 text-neutral-300" />,
      tag: '13 • Accepted Match',
      featureA: 'Real-time status updates',
      featureB: "End Trip with one tap when you're done",
    },
    {
      id: 14,
      screenImageId: 10,
      tabTitle: 'Completed',
      title: "You've arrived.",
      subtitle: 'Safe arrival and real savings',
      description:
        'Trip done, money saved. For your privacy, the in-app chat is automatically deleted for both riders once the trip ends.',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-white" />,
      tag: '14 • Trip Completed',
      featureA: 'Chats auto-delete after every trip',
      featureB: 'No messages or contact details left behind',
    },
  ];

  const totalSteps = screens.length;

  const STEP_DURATION = 4200; // 4.2s per step in auto loop
  const TICK = 50;

  // Automated flow loop: continuously advances through all 11 screens in loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStepProgress((prev) => {
        if (prev >= 100) {
          setActiveScreen((curr) => (curr < totalSteps ? curr + 1 : 1));
          return 0;
        }
        return prev + (100 / (STEP_DURATION / TICK));
      });
    }, TICK);

    return () => clearInterval(interval);
  }, [isPaused, totalSteps]);

  // Click handler to directly jump to any step
  const goToStep = (stepNumber: number) => {
    setActiveScreen(stepNumber);
    setStepProgress(0);
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
      id="how-it-works"
      className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden"
    >
      <div id="product-showcase" className="absolute -top-24 pointer-events-none" />
      {/* Dynamic Ambient Spotlight in Monochrome */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center gap-2 sm:gap-3">
        
        {/* 1. Ultra-Compact Header */}
        <div className="flex items-center justify-between gap-3 shrink-0 pt-1">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-mono font-bold tracking-wide">
              <Zap className="w-3 h-3 text-white fill-white" />
              <span>REAL APP EXPERIENCE</span>
            </span>
            <h2 className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-white leading-none">
              Simple enough to understand in <span className="text-neutral-300">seconds</span>.
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] sm:text-xs font-mono backdrop-blur-md">
              <span className={`w-1.5 h-1.5 rounded-full bg-white ${isPaused ? '' : 'animate-pulse'}`}></span>
              <span className="hidden md:inline text-neutral-400">Step:</span>
              <span className="text-white font-bold">
                {activeScreen < 10 ? `0${activeScreen}` : activeScreen} / {totalSteps < 10 ? `0${totalSteps}` : totalSteps}
              </span>
            </div>

            <div className="flex items-center gap-0.5 bg-white/5 p-0.5 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="p-1 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
                title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => goToStep(activeScreen > 1 ? activeScreen - 1 : totalSteps)}
                className="p-1 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous step"
                title="Previous Step"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => goToStep(activeScreen < totalSteps ? activeScreen + 1 : 1)}
                className="p-1 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Next step"
                title="Next Step"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Slim 14-Step Timeline Scrubber in Monochrome */}
        <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-14 gap-1 shrink-0">
          {screens.map((s) => {
            const isActive = s.id === activeScreen;
            const isPast = s.id < activeScreen;
            return (
              <button
                key={s.id}
                onClick={() => goToStep(s.id)}
                className={`relative px-1.5 py-1 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer group ${
                  isActive
                    ? 'bg-white/15 border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-[1.02]'
                    : isPast
                    ? 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                    : 'bg-white/[0.02] border-white/5 text-neutral-500 hover:border-white/10'
                }`}
              >
                {/* Micro Progress Line inside active button */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-75"
                    style={{ width: `${stepProgress}%` }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[9px] sm:text-[10px] font-black transition-colors ${
                      isActive ? 'text-white' : isPast ? 'text-neutral-200' : 'text-neutral-500'
                    }`}
                  >
                    {s.id < 10 ? `0${s.id}` : s.id}
                  </span>
                  {isActive && <span className="w-1 h-1 rounded-full bg-white animate-ping"></span>}
                </div>

                <div className="text-[8px] sm:text-[9px] font-bold truncate text-white leading-tight mt-0.5">
                  {s.tabTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* 3. Dynamic Stage Card (Clamped height so it NEVER exceeds viewport) */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            handleMouseLeave();
            setIsPaused(false);
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-center p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#0A0A0A] border border-white/15 shadow-2xl relative overflow-hidden shrink-0 min-h-[440px] sm:min-h-[470px]"
        >
          {/* Ambient Background Route Line in Monochrome */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <path
                d="M -50 100 C 300 400, 700 100, 1100 500"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeDasharray="10 8"
                className="route-animate"
              />
            </svg>
          </div>

          {/* Left: Real App Screenshot in 3D Chassis */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-[210px] h-[340px] sm:h-[370px] flex items-center justify-center">
              <div
                className="w-[300px] h-[610px] scale-[0.55] sm:scale-[0.60] origin-center shrink-0 transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${typeof window !== 'undefined' && window.innerWidth < 640 ? 0.55 : 0.60}) perspective(800px) rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
                }}
              >
                <PhoneMockup screenId={current.screenImageId || current.id} glow={true} />
              </div>
            </div>

          </div>

          {/* Right: Story Narrator */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-3 relative z-10 flex flex-col justify-center">
            
            {/* Step Tag */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-[11px] font-mono font-bold">
                {current.icon}
                <span>{current.tag}</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400">
                Step {activeScreen} of {totalSteps}
              </span>
            </div>

            {/* Headline & Subtitle */}
            <div className="space-y-0.5">
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-tight transition-all duration-200">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-neutral-300">
                {current.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="font-bold text-white text-[11px] mb-0.5">Feature Spotlight</div>
                <span className="text-[10px] text-neutral-400 leading-tight block">
                  {current.featureA}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="font-bold text-white text-[11px] mb-0.5">Real Experience</div>
                <span className="text-[10px] text-neutral-400 leading-tight block">
                  {current.featureB}
                </span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between shrink-0">
              <button
                type="button"
                onClick={() => goToStep(activeScreen < totalSteps ? activeScreen + 1 : 1)}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>{activeScreen < totalSteps ? 'Next Step' : 'Restart Flow'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <a
                href="#waitlist"
                className="text-xs font-bold text-white hover:underline flex items-center gap-1"
              >
                Join Waitlist <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

        {/* 4. Bottom Story Progress Strip */}
        <div className="flex items-center justify-between gap-3 text-[10px] font-mono text-neutral-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full bg-white ${isPaused ? '' : 'animate-ping'}`} />
            <span className="hidden sm:inline">Auto-advancing flow • Click any step or arrow to navigate</span>
            <span className="sm:hidden">Auto-advancing • Tap any step</span>
          </div>
          <div className="flex-1 max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-150 rounded-full"
              style={{ width: `${Math.round((activeScreen / totalSteps) * 100)}%` }}
            />
          </div>
          <span>{Math.round((activeScreen / totalSteps) * 100)}% viewed</span>
        </div>

      </div>
    </section>
  );
};
