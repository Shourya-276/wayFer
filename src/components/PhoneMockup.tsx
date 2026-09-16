import React, { useState } from 'react';
import { Screen1Destination } from './screens/Screen1Destination';
import { Screen2DateTime } from './screens/Screen2DateTime';
import { Screen3NearbyMatches } from './screens/Screen3NearbyMatches';
import { Screen4MessageRequest } from './screens/Screen4MessageRequest';
import { Screen5ChatMatch } from './screens/Screen5ChatMatch';
import { Screen6ActiveMeet } from './screens/Screen6ActiveMeet';
import { Screen7RideTransit } from './screens/Screen7RideTransit';
import { Screen8TripDone } from './screens/Screen8TripDone';

interface PhoneMockupProps {
  screenId: number;
  className?: string;
  glow?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ screenId, className = '', glow = true }) => {
  const [imageError, setImageError] = useState(false);

  // Map screenId to corresponding component
  const renderScreen = () => {
    switch (screenId) {
      case 1:
        return <Screen1Destination />;
      case 2:
        return <Screen2DateTime />;
      case 3:
        return <Screen3NearbyMatches />;
      case 4:
        return <Screen4MessageRequest />;
      case 5:
        return <Screen5ChatMatch />;
      case 6:
        return <Screen6ActiveMeet />;
      case 7:
        return <Screen7RideTransit />;
      case 8:
        return <Screen8TripDone />;
      default:
        return <Screen1Destination />;
    }
  };

  const imageSrc = `/screens/screen-${screenId}.png`;

  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Outer ambient glow */}
      {glow && (
        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green/25 via-brand-cyan/20 to-transparent rounded-[52px] blur-2xl -z-10 opacity-70"></div>
      )}

      {/* Titanium / Obsidian Device Chassis */}
      <div className="relative w-[300px] h-[610px] sm:w-[320px] sm:h-[650px] bg-[#121620] rounded-[48px] p-3 shadow-phone-3d border-[3.5px] border-[#2C3549] ring-1 ring-white/20">
        {/* Antennas & Side Button Accents */}
        <div className="absolute -left-[5.5px] top-24 w-1 h-8 bg-slate-700 rounded-l-sm"></div>
        <div className="absolute -left-[5.5px] top-36 w-1 h-12 bg-slate-700 rounded-l-sm"></div>
        <div className="absolute -right-[5.5px] top-32 w-1 h-14 bg-slate-700 rounded-r-sm"></div>

        {/* Screen Bezel and Inner Display */}
        <div className="relative w-full h-full bg-[#070B12] rounded-[38px] overflow-hidden border border-black flex flex-col justify-between">
          {!imageError ? (
            <img
              src={imageSrc}
              alt={`WayFer Screen ${screenId}`}
              className="w-full h-full object-cover object-top select-none"
              onError={() => setImageError(true)}
            />
          ) : (
            <>
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between px-3 w-28 h-6 bg-black rounded-full shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#131B2B] border border-white/10 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-brand-cyan/70"></div>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#0F172A] border border-white/5"></div>
              </div>

              {/* Time & Battery Status Header */}
              <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-300">
                <span>04:28</span>
                <div className="flex items-center gap-1.5 text-[9px]">
                  <span>5G</span>
                  <div className="w-4 h-2 rounded-sm border border-slate-400 p-0.5 flex items-center">
                    <div className="w-full h-full bg-brand-green rounded-2xs"></div>
                  </div>
                </div>
              </div>

              {/* Screen Content Container */}
              <div className="relative flex-1 w-full overflow-hidden">
                {renderScreen()}
              </div>

              {/* Bottom Home Indicator Line */}
              <div className="relative z-20 pb-2 pt-1 flex justify-center bg-[#070B12]">
                <div className="w-28 h-1 bg-white/30 rounded-full"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
