import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why WayFer', href: '#why-wayfer' },
    { name: 'The Story', href: '#the-story' },
    { name: 'App Preview', href: '#product-showcase' },
    { name: 'Waitlist', href: '#waitlist' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group transition-transform duration-200 hover:scale-[1.02]">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors duration-200 hover:text-white relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#waitlist"
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Join Waitlist
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-neutral-900 text-neutral-300 border border-white/10 hover:text-white hover:border-white/40 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-5 text-base font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-white transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                {link.name}
                <ArrowRight className="w-4 h-4 text-neutral-600" />
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-3.5 rounded-xl bg-white text-black font-bold text-center uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
