/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioGallery } from './components/PortfolioGallery';
import { StudioSpaces } from './components/StudioSpaces';
import { PricingCalculator } from './components/PricingCalculator';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { BookingModal } from './components/BookingModal';
import { PortfolioItem } from './types';
import { PORTFOLIO_ITEMS } from './data/studioData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);
  const [selectedSpaceId, setSelectedSpaceId] = useState<string | undefined>(undefined);
  const [selectedAddOns, setSelectedAddOns] = useState<string[] | undefined>(undefined);

  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const handleOpenBooking = (serviceId?: string, spaceId?: string, addOns?: string[]) => {
    setSelectedPackageId(serviceId);
    setSelectedSpaceId(spaceId);
    setSelectedAddOns(addOns);
    setIsBookingOpen(true);
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSimilar = (item: PortfolioItem) => {
    // Map item category to package
    const serviceMap: Record<string, string> = {
      'editorial': 'pkg-portrait',
      'fashion': 'pkg-lookbook',
      'still-life': 'pkg-rental',
      'monochrome': 'pkg-portrait'
    };
    handleOpenBooking(serviceMap[item.category] || 'pkg-portrait');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* Top Bar Contract Compliant Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Split-Screen Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* Selected Works Bento Portfolio with Category Filter & Lightbox */}
        <PortfolioGallery
          onSelectItem={(item) => setActiveLightboxItem(item)}
          onBookSession={() => handleOpenBooking('pkg-lookbook')}
        />

        {/* Studio Spaces & Equipment Locker */}
        <StudioSpaces
          onBookSpace={(spaceId) => handleOpenBooking('pkg-rental', spaceId)}
        />

        {/* Transparent Packages & Live Price Estimator */}
        <PricingCalculator
          onSelectPackage={(pkgId, addOns) => handleOpenBooking(pkgId, undefined, addOns)}
        />

        {/* Resident Photographers, Craft & Client Testimonials */}
        <TeamSection />

        {/* Location & Policies FAQ */}
        <FaqSection />
      </main>

      {/* Grounded Studio Footer */}
      <Footer />

      {/* Lightbox Modal with EXIF Data */}
      <LightboxModal
        item={activeLightboxItem}
        items={PORTFOLIO_ITEMS}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
        onBookSimilar={handleBookSimilar}
      />

      {/* Interactive Booking Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={selectedPackageId}
        preselectedSpaceId={selectedSpaceId}
        preselectedAddOns={selectedAddOns}
      />
    </div>
  );
}
