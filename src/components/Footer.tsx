import React from 'react';
import { Logo } from './Logo';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Logo & Philosophy Tagline */}
          <div className="space-y-3">
            <Logo size="md" />
            <div className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              MATCH → MEET → RIDE.
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Discover people travelling along the same route and coordinate a shared ride.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 text-sm font-medium text-neutral-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#what-wayfer-does" className="hover:text-white transition-colors">What We Do</a>
            <a href="#the-story" className="hover:text-white transition-colors">The Story</a>
            <a href="#why-wayfer" className="hover:text-white transition-colors">Corridors</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Walkthrough</a>
            <a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-neutral-400">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div>© 2026 WayFer. All rights reserved.</div>
          <div className="flex items-center gap-1 text-neutral-400">
            Designed for real people travelling real routes.
          </div>
        </div>
      </div>
    </footer>
  );
};
