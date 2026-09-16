import React, { useState } from 'react';
import { Logo } from '../Logo';
import { api } from '../../services/api';
import { Lock, Mail, ArrowRight, Loader2, ShieldCheck, Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToSite: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onBackToSite }) => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await api.login(email.trim(), password.trim());
      if (res.success) {
        onLoginSuccess();
      } else {
        setError(res.error || 'Invalid credentials. Please check ID and password.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden text-slate-100 selection:bg-brand-green selection:text-dark-950">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-green/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Back button */}
      <div className="absolute top-8 left-8 z-20">
        <button
          onClick={onBackToSite}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold transition-all hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Landing Page</span>
        </button>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080D18] border border-white/10 shadow-2xl shadow-black/80 space-y-8 relative">
          
          {/* Logo Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-2">
              <Logo size="md" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[10px] font-mono font-bold tracking-widest uppercase">
              <ShieldCheck className="w-3 h-3" />
              <span>Admin Portal Access</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Sign in to Dashboard
            </h1>
            <p className="text-xs text-slate-400">
              Authorized access to review real-time WayFer waitlist entries.
            </p>
          </div>

          {/* Credentials Helper Callout */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Target ID:</span>
              <span className="text-brand-green font-bold">admin@gmail.com</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Password:</span>
              <span className="text-brand-cyan font-bold">123</span>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="p-3.5 rounded-2xl bg-red-500/15 border border-red-500/30 text-xs text-red-300 flex items-center gap-2 animate-in fade-in duration-200">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* ID / Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-green" />
                Admin Email ID
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white placeholder-slate-500 text-sm outline-none transition-colors"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-cyan" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••"
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white placeholder-slate-500 text-sm outline-none transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 rounded-full bg-brand-green hover:bg-brand-neon text-dark-950 font-black text-xs uppercase tracking-wider shadow-glow-green transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

          </form>

          {/* Footer note */}
          <div className="text-center text-[10px] text-slate-500 font-mono">
            WayFer Internal Mobility Operations • Restricted Access
          </div>

        </div>
      </div>
    </div>
  );
};
