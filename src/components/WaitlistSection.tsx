import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Zap, ArrowRight, CheckCircle2, Loader2, MapPin, Mail, User, Phone, Building } from 'lucide-react';
import { WaitlistFormData, WaitlistState } from '../types/waitlist';

export const WaitlistSection: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    city: '',
    phone: '',
    organization: '',
    userType: 'Student',
    useCase: 'College commute',
  });

  const [state, setState] = useState<WaitlistState>({ status: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: 'loading' });

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit. Please try again.');
      }

      setState({ status: 'success', submission: result.data });

      // Trigger subtle monochrome celebration confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#FFFFFF', '#E5E5E5', '#A3A3A3', '#737373'],
        });
      } catch {
        // Fallback gracefully
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setState({ status: 'error', errorMessage: message });
    }
  };

  return (
    <section id="waitlist" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {state.status === 'success' ? (
          /* ==================================================
             WAITLIST SUCCESS STATE ANIMATION
             ================================================== */
          <div className="p-10 sm:p-14 rounded-3xl bg-[#0A0A0A] border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.15)] text-center space-y-8 animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden">
            
            {/* Animated Route Line Travelling Across the Screen */}
            <div className="w-full h-16 relative overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 600 60" fill="none">
                <path
                  d="M 0 30 L 600 30"
                  stroke="#1E1E1E"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 30 L 600 30"
                  stroke="url(#success-route-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="16 10"
                  className="route-animate"
                />
                <defs>
                  <linearGradient id="success-route-grad" x1="0" y1="30" x2="600" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="0.5" stopColor="#E5E5E5" />
                    <stop offset="1" stopColor="#A3A3A3" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-white/30 text-[10px] font-mono text-white">
                <Zap className="w-3 h-3 text-white fill-white" />
                <span>Corridor Priority Assigned</span>
              </div>
            </div>

            {/* Success Heading */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                You're on the list.
              </h3>
              <p className="text-lg text-neutral-300 font-medium">
                Welcome to WayFer, <span className="text-white font-bold">{state.submission?.name}</span>.
              </p>
            </div>

            {/* Final Poetic Brand Statement */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto">
              <p className="text-base sm:text-lg font-medium text-white italic">
                "Your way is about to get a little less lonely."
              </p>
            </div>

            <div className="pt-2 text-xs text-neutral-400 font-mono">
              We'll notify you at <span className="text-white font-semibold">{state.submission?.email}</span> as soon as priority corridor rides open in {state.submission?.city}.
            </div>

            <button
              onClick={() => setState({ status: 'idle' })}
              className="px-6 py-2.5 rounded-full bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold transition-colors"
            >
              Submit another response
            </button>

          </div>
        ) : (
          /* ==================================================
             WAITLIST FORM (Monochrome Black & White)
             ================================================== */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] border border-white/15 shadow-2xl relative">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-semibold mb-4">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
                <span>EARLY ACCESS WAITLIST</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Find your people <br />
                <span className="text-neutral-400">before launch</span>.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                WayFer is getting ready to launch. Join the waitlist and be among the first to know when WayFer is available in your city.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {state.status === 'error' && (
                <div className="p-4 rounded-2xl bg-neutral-900 border border-red-500/40 text-xs text-neutral-300">
                  {state.errorMessage}
                </div>
              )}

              {/* Required Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-1.5">
                    <User className="w-3 h-3 text-white" />
                    Full Name <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shourya Kole"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-neutral-500 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-white" />
                    Email Address <span className="text-white">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@campus.edu or work.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-neutral-500 text-sm outline-none transition-colors"
                  />
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-white" />
                    City <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chennai / Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-neutral-500 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Optional Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-neutral-500" />
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white text-white placeholder-neutral-600 text-sm outline-none transition-colors"
                  />
                </div>

                {/* College / Company */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                    <Building className="w-3 h-3 text-neutral-500" />
                    College / Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Campus / Office / Company"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white text-white placeholder-neutral-600 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* I am a... */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    I am a...
                  </label>
                  <select
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#121212] border border-white/10 focus:border-white text-white text-sm outline-none transition-colors"
                  >
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* I'd use WayFer for... */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    I'd use WayFer for...
                  </label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#121212] border border-white/10 focus:border-white text-white text-sm outline-none transition-colors"
                  >
                    <option value="College commute">College commute</option>
                    <option value="Airport trips">Airport trips</option>
                    <option value="Daily commute">Daily commute</option>
                    <option value="Metro & transit">Metro & transit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={state.status === 'loading'}
                  className="w-full py-4 rounded-full bg-white hover:bg-neutral-200 text-black font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {state.status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Reserving your spot in line...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Waitlist</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-500">
                🔒 We respect your inbox. Zero spam. We only notify you when corridor rides open near you.
              </div>

            </form>

          </div>
        )}

      </div>
    </section>
  );
};
