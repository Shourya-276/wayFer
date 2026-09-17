import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const imageSizes = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-[1.75rem]',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official WayFer Logo in Monochrome */}
      <div className="relative flex items-center justify-center group shrink-0">
        {/* Sleek Monochrome Backglow */}
        <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
        
        <img
          src="/wayfer-logo-trimmed.png"
          alt="WayFer Logo"
          className={`relative z-10 ${imageSizes[size]} object-contain filter grayscale contrast-125 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/wayfer-logo.jpeg';
          }}
        />
      </div>

      {showText && (
        <div className="flex items-center tracking-tight">
          <span className={`font-black tracking-tight text-white ${textSizes[size]}`}>
            WayFer
          </span>
        </div>
      )}
    </div>
  );
};
