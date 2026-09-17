import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OpeningStory } from './components/OpeningStory';
import { SrmOriginStory } from './components/SrmOriginStory';
import { CoreInsight } from './components/CoreInsight';
import { RouteCorridors } from './components/RouteCorridors';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { WaitlistSection } from './components/WaitlistSection';
import { EarlyAccessBanner } from './components/EarlyAccessBanner';
import { CinematicFinale } from './components/CinematicFinale';
import { Footer } from './components/Footer';
import { BackgroundAudio } from './components/BackgroundAudio';
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

      {/* Main Content Sections in Cinematic Storyboard Order */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. The Opening Story */}
        <OpeningStory />

        {/* 3. The Origin Story — Splitting The Ride */}
        <SrmOriginStory />

        {/* 4. The Core Insight */}
        <CoreInsight />

        {/* 5. Why WayFer Exists (Route Corridors) */}
        <RouteCorridors />

        {/* 6. How WayFer Works (MATCH → MEET → RIDE) */}
        <HowItWorks />

        {/* 7. Real Product Showcase (11-Screen Experience) */}
        <ProductShowcase />

        {/* 8. Primary Waitlist & Route-trail Success */}
        <WaitlistSection />

        {/* 14. Early Access */}
        <EarlyAccessBanner />

        {/* 15. Cinematic Finale */}
        <CinematicFinale />
      </main>

      {/* Footer */}
      <Footer />

      {/* Background Audio (Song only, audio background player) */}
      <BackgroundAudio />
    </div>
  );
};

export default App;
