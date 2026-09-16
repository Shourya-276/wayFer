import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const imageSizes = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official WayFer Map Pin Logo */}
      <div className="relative flex items-center justify-center group shrink-0">
        {/* Subtle Ambient Emerald & Cyan Backglow */}
        <div className="absolute inset-0 bg-brand-green/25 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
        
        <img
          src="/wayfer-logo-trimmed.png"
          alt="WayFer Logo"
          className={`relative z-10 ${imageSizes[size]} object-contain drop-shadow-[0_4px_12px_rgba(0,240,118,0.25)] transition-transform duration-300 group-hover:scale-105`}
          onError={(e) => {
            // Fallback to jpeg if needed
            (e.target as HTMLImageElement).src = '/wayfer-logo.jpeg';
          }}
        />
      </div>

      {showText && (
        <div className="flex items-center tracking-tight">
          <span className={`font-black tracking-tight text-white ${textSizes[size]}`}>
            Way<span className="text-brand-green">Fer</span>
          </span>
        </div>
      )}
    </div>
  );
};
