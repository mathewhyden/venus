import React from 'react';
import { 
  Sparkles, 
  BadgePercent, 
  UserCheck, 
  Store, 
  ShieldCheck, 
  Truck,
  Award,
  CheckCircle,
  PhoneCall
} from 'lucide-react';
import { WHY_CHOOSE_US, STORE_CONTACT } from '../data/hardwareData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-[#C92A2A]" />,
  BadgePercent: <BadgePercent className="w-5 h-5 text-[#C92A2A]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#C92A2A]" />,
  Store: <Store className="w-5 h-5 text-[#C92A2A]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C92A2A]" />,
  Truck: <Truck className="w-5 h-5 text-[#C92A2A]" />,
};

export const BrandHighlights: React.FC = () => {
  return (
    <section id="why-us" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#C92A2A] text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Venus Hardware Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Why Trichy Chooses Venus Hardware
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5">
            Serving homeowners, interior designers, civil contractors, and carpenters with premium architectural and modular kitchen fittings.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:border-stone-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-[#C92A2A]/10 transition-colors">
                  {iconMap[item.icon] || <CheckCircle className="w-5 h-5 text-[#C92A2A]" />}
                </div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#C92A2A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Consultation Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1E2B58] text-white flex items-center justify-center shrink-0 text-xl font-bold">
              VH
            </div>
            <div>
              <p className="text-xs font-bold text-[#C92A2A] uppercase tracking-wider">
                Personalized On-Counter Guidance
              </p>
              <h4 className="text-base sm:text-lg font-bold text-stone-900">
                Consult with {STORE_CONTACT.executiveName} ({STORE_CONTACT.executiveTitle})
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Bring your floor plan, carpentry measurements, or kitchen elevations for exact fittings estimation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:+91${STORE_CONTACT.executiveMobile.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#C92A2A] hover:bg-[#A61E1E] text-white text-xs font-bold rounded-xl transition-all shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {STORE_CONTACT.executiveMobile}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
