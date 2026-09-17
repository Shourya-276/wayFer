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
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Flag,
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const [activeScreen, setActiveScreen] = useState<number>(1);
  const [overallProgress, setOverallProgress] = useState<number>(0);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  // 11 Real Scanned Product Screenshots & Authentic Journey Steps in Monochrome
  const screens = [
    {
      id: 1,
      screenImageId: 1,
      tabTitle: 'Map',
      title: 'Cut your travel cost in half.',
      subtitle: 'Explore live city & campus corridors',
      description:
        'Open the app to discover live travel corridors and active ride opportunities across your city before spending full fare on a solo cab.',
      icon: <MapPin className="w-3.5 h-3.5 text-white" />,
      tag: '01 • Live Corridor Map',
      featureA: 'Live Radar: Real-time commuter corridor detection.',
      featureB: 'Instant Actions: One-tap Requests & Book Ride.',
    },
    {
      id: 2,
      screenImageId: 2,
      tabTitle: 'Book Ride',
      title: 'Smart book rides in seconds.',
      subtitle: 'Set origin, destination & initiate smart route matching',
      description:
        "Enter your pickup and dropoff points with precise gate drops. Tap 'Book Ride' to trigger WayFer's smart algorithm, which maps intersecting corridor vectors to find riders heading the exact same way.",
      icon: <Navigation className="w-3.5 h-3.5 text-neutral-300" />,
      tag: '02 • Smart Book Rides',
      featureA: "Smart Booking: Instant one-tap 'Book Ride' to activate matching.",
      featureB: 'Gate Precision: Exact residential, campus, & tech park drop points.',
    },
    {
      id: 3,
      screenImageId: 3,
      tabTitle: 'Time',
      title: 'Select ride time & date.',
      subtitle: 'Smart 15-minute departure windows',
      description:
        'Choose today or schedule ahead with flexible 15-minute departure slots (7:00, 7:15, 7:30, 7:45 PM) to maximize overlapping co-riders.',
      icon: <Calendar className="w-3.5 h-3.5 text-white" />,
      tag: '03 • Departure Scheduling',
      featureA: 'Scheduled Rides: Lock ahead for future travels.',
      featureB: 'Flexible Sync: Automatic grouping within 15 min.',
    },
    {
      id: 4,
      screenImageId: 4,
      tabTitle: 'Scheduled',
      title: 'Your ride is scheduled.',
      subtitle: 'Corridor matching automatically begins',
      description:
        'Confirmation sheet displays your confirmed schedule (for example: 15/9/2026 at 7:30 PM) with green pickup and red destination markers connecting on the map.',
      icon: <Check className="w-3.5 h-3.5 text-white" />,
      tag: '04 • Ride Scheduled',
      featureA: 'Auto Discovery: Scans for nearby travellers.',
      featureB: 'Visual Path: Full route overview on city map.',
    },
    {
      id: 5,
      screenImageId: 5,
      tabTitle: 'Active',
      title: '1 match found nearby.',
      subtitle: 'Live commuter radar detected along your path',
      description:
        'Active ride status shows 1 match nearby with a marker showing the co-rider\'s initial appearing on Hosa Road. Review their path before booking a costly solo cab.',
      icon: <Users className="w-3.5 h-3.5 text-white" />,
      tag: '05 • Active Ride Radar',
      featureA: 'Waypoint Radar: Co-rider waypoints flagged along active riding routes.',
      featureB: 'Live Controls: Instant request or cancel option.',
    },
    {
      id: 6,
      screenImageId: 12,
      tabTitle: 'Alert',
      title: 'Instant push notifications.',
      subtitle: 'Real-time alert system on mobile',
      description:
        'Receive instant system notifications, deep-linking straight into requests.',
      icon: <Bell className="w-3.5 h-3.5 text-white" />,
      tag: '06 • Push Notifications',
      featureA: 'Instant Push: Delivered straight to notification shade.',
      featureB: 'One-Tap Action: Deep-link straight to chat & accept.',
    },
    {
      id: 7,
      screenImageId: 6,
      tabTitle: 'Co-Rider',
      title: 'Co-rider trip details.',
      subtitle: 'Complete route transparency before connecting',
      description:
        "Inspect your matched co-rider's route from Owners Court Layout to Silverwood Regency Apartment at 7:15 PM. Send a message request in one tap.",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />,
      tag: '07 • Co-Rider Profile',
      featureA: 'Route Transparency: Exact pickup & dropoff addresses.',
      featureB: 'Direct Request: Send message request without sharing numbers.',
    },
    {
      id: 8,
      screenImageId: 7,
      tabTitle: 'Requests',
      title: 'Message requests hub.',
      subtitle: 'Manage incoming & sent co-rider requests',
      description:
        'A red alert badge notifies you of incoming requests to review and coordinate departures seamlessly.',
      icon: <MessageSquare className="w-3.5 h-3.5 text-white" />,
      tag: '08 • Message Requests',
      featureA: 'Alert Badges: Red notification dot on Requests tab.',
      featureB: 'Dual Tabs: Toggle between Received & Sent requests.',
    },
    {
      id: 9,
      screenImageId: 8,
      tabTitle: 'Chat',
      title: 'Coordinate directly in chat.',
      subtitle: 'Co-rider ✓ Matched in real time',
      description:
        'Private in-app chat lets matched riders coordinate and agree on exact pickup points without friction.',
      icon: <Zap className="w-3.5 h-3.5 text-white fill-white" />,
      tag: '09 • In-App Match Chat',
      featureA: 'Private Chat: Zero personal phone number exposure.',
      featureB: 'Rendezvous Sync: Coordinate meeting spot before hailing.',
    },
    {
      id: 10,
      screenImageId: 9,
      tabTitle: 'Accepted',
      title: 'Trip accepted & underway.',
      subtitle: 'Status switches to Accepted with live trip controls',
      description:
        'Your co-rider\'s request updates to "Accepted" at 8:43 PM. The shared fare arrangement is locked, with prominent "End Trip" control at your fingertips.',
      icon: <Flag className="w-3.5 h-3.5 text-neutral-300" />,
      tag: '10 • Accepted Match',
      featureA: 'Status Sync: Real-time update to Accepted badge.',
      featureB: 'Trip Controls: Red End Trip button ready for destination.',
    },
    {
      id: 11,
      screenImageId: 10,
      tabTitle: 'Completed',
      title: 'The trip has ended.',
      subtitle: 'Safe arrival confirmation & verified savings',
      description:
        'Destination reached safely! "The trip has ended. Thank you for riding with us!" — complete with 50% cash saved and cleaner air delivered.',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-white" />,
      tag: '11 • Trip Completed',
      featureA: 'Chat Auto-Deletion: In-app chats are permanently removed and deleted for both users once the trip ends successfully.',
      featureB: 'Total Post-Trip Privacy: Zero lingering messages or contact traces remain on either device.',
    },
  ];

  const totalSteps = screens.length;

  // Scroll-driven story progression across all steps
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

      // Map scroll progress evenly across steps
      const stepIndex = Math.min(totalSteps, Math.max(1, Math.floor(rawProgress * totalSteps) + 1));
      setActiveScreen(stepIndex);

      // Progress within active step (0% to 100%)
      const withinStep = (rawProgress * totalSteps) % 1;
      setStepProgress(withinStep * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSteps]);

  // Smooth scroll to a specific step
  const scrollToStep = (targetStep: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const containerTop = scrollTop + rect.top;
    const totalScrollable = sectionRef.current.clientHeight - window.innerHeight;
    const targetProgress = (targetStep - 0.5) / totalSteps;
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
      className="relative h-[520vh] bg-black border-t border-white/10"
    >
      {/* Sticky Viewport Canvas - Starts cleanly below navbar with guaranteed full view */}
      <div className="sticky top-16 h-[calc(100vh-4.5rem)] w-full flex flex-col justify-center py-2 px-3 sm:px-6 lg:px-8 z-20 overflow-hidden">
        
        {/* Dynamic Ambient Spotlight in Monochrome */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center gap-2 sm:gap-2.5">
          
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

            {/* Scroll Indicator & Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] sm:text-xs font-mono backdrop-blur-md">
                <ArrowDown className="w-3 h-3 text-white animate-bounce" />
                <span className="hidden md:inline text-neutral-400">Scroll to advance:</span>
                <span className="text-white font-bold">
                  {activeScreen < 10 ? `0${activeScreen}` : activeScreen} / {totalSteps < 10 ? `0${totalSteps}` : totalSteps}
                </span>
              </div>

              <div className="flex items-center gap-0.5 bg-white/5 p-0.5 rounded-xl border border-white/10">
                <button
                  onClick={() => scrollToStep(activeScreen > 1 ? activeScreen - 1 : totalSteps)}
                  className="p-1 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Previous step"
                  title="Previous Step"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => scrollToStep(activeScreen < totalSteps ? activeScreen + 1 : 1)}
                  className="p-1 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Next step"
                  title="Next Step"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Slim 11-Step Timeline Scrubber in Monochrome */}
          <div className="grid grid-cols-6 sm:grid-cols-11 gap-1 shrink-0">
            {screens.map((s) => {
              const isActive = s.id === activeScreen;
              const isPast = s.id < activeScreen;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToStep(s.id)}
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
            onMouseLeave={handleMouseLeave}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-center p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#0A0A0A] border border-white/15 shadow-2xl relative overflow-hidden shrink-0 max-h-[440px] sm:max-h-[460px]"
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
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
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
                  onClick={() => scrollToStep(activeScreen < totalSteps ? activeScreen + 1 : 1)}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all flex items-center gap-1"
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
            <span className="hidden sm:inline">Scroll down to move through all {totalSteps} app steps</span>
            <div className="flex-1 max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-150 rounded-full"
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
