import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ChefHat, 
  Sliders, 
  Box, 
  Maximize, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { STORE_CONTACT } from '../data/hardwareData';

interface KitchenSolutionsProps {
  onOpenQuoteEstimator: () => void;
}

export const KitchenSolutions: React.FC<KitchenSolutionsProps> = ({ onOpenQuoteEstimator }) => {
  const whatsappUrl = `https://wa.me/918903045873?text=${encodeURIComponent(
    "Hello Venus Hardware, I would like consultation on Modular Kitchen interior hardware planning for my house in Trichy."
  )}`;

  const solutions = [
    {
      title: 'Tandem Box Drawer Systems',
      subtitle: 'Feather-Light Motion & Lifetime Dampening',
      description: 'Replace squeaky conventional channels with German-engineered tandem runners that slide silently under 45kg loads.',
      badge: 'SS 304 & Steel',
      specs: ['30kg, 45kg & 65kg capacities', 'Anti-rebound fluid damper', 'Modular cutlery & plate dividers'],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Corner Cabinet Magic Units',
      subtitle: 'Zero Dead Space in L-Shape & U-Shape Kitchens',
      description: 'Turn difficult 90-degree corner voids into effortless accessible storage with kidney pullouts and s-carousel swing trays.',
      badge: '360° Access',
      specs: ['Revolving twin trays', 'Textured anti-slip mats', 'Fits 900mm to 1050mm corners'],
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pantry Tall Pull-Out Units',
      subtitle: 'Master Grocery & Spice Organizers',
      description: 'A 6-level full pantry system that brings deep storage forward smoothly without knocking jars or bottles.',
      badge: 'Heavy Duty 120kg',
      specs: ['Toughened baskets with glass trims', 'Silent soft closing', 'Fits 450mm & 600mm carcase'],
      image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Hydraulic Bi-Fold Lift-Up Systems',
      subtitle: 'Effortless Overhead Cabinet Accessibility',
      description: 'Lifts large dual glass or wooden shutters overhead. Stays safely positioned at any opened height for safe cooking.',
      badge: 'Multi-Position Stop',
      specs: ['Built-in finger pinch safety', 'Soft dampened descent', 'Ideal for modern chimney flanks'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="kitchen-solutions" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1E2B58] text-xs font-bold mb-3 border border-blue-100">
            <ChefHat className="w-3.5 h-3.5 text-[#C92A2A]" />
            <span>Kitchen Interior Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Complete Modular Kitchen Hardware Systems
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Planning a new modular kitchen or upgrading existing carpentry in Trichy? 
            Venus Hardware provides certified, durable fittings designed specifically for the heavy pots, spices, and daily use of Indian cooking.
          </p>
        </div>

        {/* 4 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutions.map((item, idx) => (
            <div 
              key={idx}
              className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow group"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-stone-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#1E2B58] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                  {item.badge}
                </span>
              </div>

              <div className="p-5 sm:w-3/5 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#C92A2A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1E2B58] mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-stone-200/80">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Consultation Banner */}
        <div className="bg-gradient-to-br from-[#1E2B58] to-[#141d3d] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-red-300">
              Need Kitchen Hardware Bill of Materials (BOM)?
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Get an Instant Hardware Estimate for Your Kitchen Layout
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Use our interactive calculator to estimate the exact number of tandem boxes, soft-close hinges, corner carousels, and profile handles needed for your kitchen.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteEstimator}
              className="px-5 py-3 bg-[#C92A2A] hover:bg-[#A61E1E] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
              id="solutions-calculate-btn"
            >
              <Sliders className="w-4 h-4" />
              <span>Launch Quote Calculator</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask S. Rathinavel</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
