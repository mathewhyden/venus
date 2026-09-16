import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { KitchenSolutions } from './components/KitchenSolutions';
import { BrandHighlights } from './components/BrandHighlights';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BusinessCardModal } from './components/BusinessCardModal';
import { KitchenQuoteEstimator } from './components/KitchenQuoteEstimator';
import { QuickContactFloating } from './components/QuickContactFloating';

export default function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isQuoteEstimatorOpen, setIsQuoteEstimatorOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 selection:bg-[#C92A2A] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenCardModal={() => setIsCardModalOpen(true)}
        onOpenQuoteEstimator={() => setIsQuoteEstimatorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCardModal={() => setIsCardModalOpen(true)}
          onOpenQuoteEstimator={() => setIsQuoteEstimatorOpen(true)}
        />

        {/* Product Catalog & Hardware Range */}
        <ProductCatalog />

        {/* Kitchen Interior Systems Showcase */}
        <KitchenSolutions
          onOpenQuoteEstimator={() => setIsQuoteEstimatorOpen(true)}
        />

        {/* Why Choose Venus Hardware */}
        <BrandHighlights />

        {/* Showroom Location, Updated Contacts & Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenCardModal={() => setIsCardModalOpen(true)}
        onOpenQuoteEstimator={() => setIsQuoteEstimatorOpen(true)}
      />

      {/* Business Card Interactive Modal */}
      <BusinessCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />

      {/* Kitchen Hardware Quote Calculator Modal */}
      <KitchenQuoteEstimator
        isOpen={isQuoteEstimatorOpen}
        onClose={() => setIsQuoteEstimatorOpen(false)}
      />

      {/* Floating Quick Action Contacts */}
      <QuickContactFloating
        onOpenCardModal={() => setIsCardModalOpen(true)}
      />
    </div>
  );
}
