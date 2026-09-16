import React from 'react';
import { Logo } from './Logo';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-dark-950 border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Philosophy Tagline */}
          <div className="space-y-3">
            <Logo size="md" />
            <div className="text-xs font-mono font-bold tracking-widest text-brand-green uppercase">
              MATCH → MEET → RIDE.
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Discover people travelling along the same route and coordinate a shared ride.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-brand-green transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-brand-green transition-colors">How It Works</a>
            <a href="#why-wayfer" className="hover:text-brand-green transition-colors">Why WayFer</a>
            <a href="#the-story" className="hover:text-brand-green transition-colors">The Story</a>
            <a href="#product-showcase" className="hover:text-brand-green transition-colors">App Preview</a>
            <a href="#waitlist" className="hover:text-brand-green transition-colors">Waitlist</a>
            <button
              onClick={onAdminClick || (() => window.location.href = '/admin')}
              className="hover:text-brand-green text-slate-400 hover:underline transition-colors font-mono"
            >
              /admin
            </button>
            <a href="#privacy" className="hover:text-brand-green transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-brand-green transition-colors">Terms</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-brand-green hover:border-brand-green/40 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-brand-green hover:border-brand-green/40 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-brand-green hover:border-brand-green/40 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-brand-green hover:border-brand-green/40 transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>© 2026 WayFer. All rights reserved.</div>
          <div className="flex items-center gap-1 text-slate-400">
            Designed for real people travelling real routes.
          </div>
        </div>
      </div>
    </footer>
  );
};
