import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWayferDoes } from './components/WhatWayferDoes';
import { SrmOriginStory } from './components/SrmOriginStory';
import { CoreInsight } from './components/CoreInsight';
import { RouteCorridors } from './components/RouteCorridors';
import { ProductShowcase } from './components/ProductShowcase';
import { WaitlistSection } from './components/WaitlistSection';
import { EarlyAccessBanner } from './components/EarlyAccessBanner';
import { CinematicFinale } from './components/CinematicFinale';
import { Footer } from './components/Footer';
import { AdminPage } from './components/admin/AdminPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname;
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If on /admin, show dedicated Admin Page
  if (currentPath === '/admin' || currentPath.startsWith('/admin/')) {
    return <AdminPage onBackToSite={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-white selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections in Specified Storyboard Order */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. What WayFer Does (Two Cards) */}
        <WhatWayferDoes />

        {/* 3. The Origin Story — Splitting The Ride */}
        <SrmOriginStory />

        {/* 4. People & Routes / Corridors */}
        <CoreInsight />
        <RouteCorridors />

        {/* 5. App Screenshots & Explanations (The Walkthrough) */}
        <ProductShowcase />

        {/* 6. Expansion + Closing / Waitlist */}
        <WaitlistSection />
        <EarlyAccessBanner />
        <CinematicFinale />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
