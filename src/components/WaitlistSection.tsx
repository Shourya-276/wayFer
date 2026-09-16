import React, { useState } from 'react';
import { waitlistService } from '../services/waitlistService';
import { WaitlistState } from '../types/waitlist';
import confetti from 'canvas-confetti';
import { ArrowRight, CheckCircle2, Sparkles, Loader2, MapPin, Mail, User, Phone, Building } from 'lucide-react';

export const WaitlistSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    organization: '',
    userType: 'Student' as 'Student' | 'Working Professional' | 'Other',
    useCase: 'College commute' as 'College commute' | 'Airport trips' | 'Daily commute' | 'Intercity travel' | 'Other',
  });

  const [state, setState] = useState<WaitlistState>({
    status: 'idle',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: 'loading' });

    try {
      const submission = await waitlistService.submit(formData);
      setState({ status: 'success', submission });

      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00F076', '#22D3EE', '#38EF7D', '#ffffff'],
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
    <section id="waitlist" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark-900 border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {state.status === 'success' ? (
          /* ==================================================
             16. WAITLIST SUCCESS STATE ANIMATION
             ================================================== */
          <div className="p-10 sm:p-14 rounded-3xl bg-[#080D18] border border-brand-green/50 shadow-glow-green-lg text-center space-y-8 animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden">
            
            {/* Animated Route Line Travelling Across the Screen */}
            <div className="w-full h-16 relative overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 600 60" fill="none">
                <path
                  d="M 0 30 L 600 30"
                  stroke="#16233B"
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
                    <stop stopColor="#22D3EE" />
                    <stop offset="0.5" stopColor="#00F076" />
                    <stop offset="1" stopColor="#38EF7D" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-dark-950 border border-brand-green/40 text-[10px] font-mono text-brand-green">
                <Sparkles className="w-3 h-3 text-brand-green" />
                <span>Corridor Priority Assigned</span>
              </div>
            </div>

            {/* Success Heading */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green/50 flex items-center justify-center mx-auto text-brand-green shadow-glow-green">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                You're on the list.
              </h3>
              <p className="text-lg text-slate-300 font-medium">
                Welcome to WayFer, <span className="text-white font-bold">{state.submission?.name}</span>.
              </p>
            </div>

            {/* Final Poetic Brand Statement */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 max-w-md mx-auto">
              <p className="text-base sm:text-lg font-medium text-brand-green italic">
                "Your way is about to get a little less lonely."
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              We'll notify you at <span className="text-white font-semibold">{state.submission?.email}</span> as soon as priority corridor rides open in {state.submission?.city}.
            </div>

            <button
              onClick={() => setState({ status: 'idle' })}
              className="px-6 py-2.5 rounded-full bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
            >
              Submit another response
            </button>

          </div>
        ) : (
          /* ==================================================
             15. WAITLIST FORM
             ================================================== */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#080D18] border border-white/10 shadow-2xl relative">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EARLY ACCESS WAITLIST</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Find your people <br />
                <span className="text-gradient-brand">before launch</span>.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                WayFer is getting ready to launch. Join the waitlist and be among the first to know when WayFer is available in your city.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {state.status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                  {state.errorMessage}
                </div>
              )}

              {/* Required Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                    <User className="w-3 h-3 text-brand-green" />
                    Full Name <span className="text-brand-green">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shourya Kole"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-brand-green" />
                    Email Address <span className="text-brand-green">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@campus.edu or work.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-brand-green" />
                    City <span className="text-brand-green">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chennai / Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Optional Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-slate-500" />
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-green text-white placeholder-slate-600 text-sm outline-none transition-colors"
                  />
                </div>

                {/* College / Company */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <Building className="w-3 h-3 text-slate-500" />
                    College / Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SRM IST / Infosys / TCS"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-green text-white placeholder-slate-600 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* I am a... */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    I am a...
                  </label>
                  <select
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-2xl bg-dark-850 border border-white/10 focus:border-brand-green text-white text-sm outline-none transition-colors"
                  >
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* I'd use WayFer for... */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    I'd use WayFer for...
                  </label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-2xl bg-dark-850 border border-white/10 focus:border-brand-green text-white text-sm outline-none transition-colors"
                  >
                    <option value="College commute">College commute</option>
                    <option value="Airport trips">Airport trips</option>
                    <option value="Daily commute">Daily commute</option>
                    <option value="Intercity travel">Intercity travel</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={state.status === 'loading'}
                  className="w-full py-4 rounded-full bg-brand-green hover:bg-brand-neon text-dark-950 font-black text-sm uppercase tracking-wider shadow-glow-green-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {state.status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
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

              <div className="text-center text-[11px] text-slate-500">
                🔒 We respect your inbox. Zero spam. We only notify you when corridor rides open near you.
              </div>

            </form>

          </div>
        )}

      </div>
    </section>
  );
};
