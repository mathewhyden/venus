import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard,
  ArrowRight,
  Package,
  Layers,
  ChefHat
} from 'lucide-react';
import { STORE_CONTACT } from '../data/hardwareData';
import { Logo } from './Logo';

interface HeroProps {
  onOpenCardModal: () => void;
  onOpenQuoteEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenCardModal, 
  onOpenQuoteEstimator 
}) => {
  const whatsappUrl = `https://wa.me/918903045873?text=${encodeURIComponent(
    "Hello Venus Hardware (Trichy), I would like to inquire about fancy interior kitchen & hardware materials."
  )}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background with luxury kitchen photography + dark overlay for maximum text contrast */}
      <div 
        className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-900/80" />

      {/* Decorative subtle ambient glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Value Props & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/90 border border-stone-700 text-stone-200 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-[#E03131]"></span>
              <span>Trichy’s Premier Hardware & Fancy Kitchen Destination</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Logo size="lg" textColor="white" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                All Fancy Interior Kitchen &amp; <span className="text-[#FA5252]">Hardware Materials</span>
              </h2>

              <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Direct wholesale and retail suppliers for modern homes, interior designers, and architects in Trichy. 
                Explore soft-close tandem drawers, SS 304 wire baskets, designer knurled handles, concealed hinges, and digital smart locks.
              </p>
            </div>

            {/* Quick trust checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine SS 304 &amp; Solid Brass Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Wholesale &amp; Retail Rates for Builders &amp; Carpenters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Working Physical Display at Madurai Road Showroom</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Site Consultation &amp; Fitting Guidance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl text-sm font-bold hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-emerald-950/50 cursor-pointer"
                id="hero-whatsapp-cta"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Quote Request</span>
              </a>

              <button
                onClick={onOpenQuoteEstimator}
                className="flex items-center gap-2 px-5 py-3 bg-[#C92A2A] text-white rounded-xl text-sm font-bold hover:bg-[#A61E1E] transition-all shadow-lg hover:shadow-red-950/50 cursor-pointer"
                id="hero-estimate-cta"
              >
                <ChefHat className="w-4 h-4" />
                <span>Calculate Kitchen Hardware</span>
              </button>

              <button
                onClick={() => scrollToSection('products-catalog')}
                className="flex items-center gap-2 px-4 py-3 bg-stone-800 text-stone-200 hover:text-white rounded-xl text-sm font-semibold border border-stone-700 hover:border-stone-500 transition-all cursor-pointer"
                id="hero-browse-cta"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Contact strip */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FA5252]" />
                <span className="text-stone-300 font-medium">
                  {STORE_CONTACT.address.doorNo}, {STORE_CONTACT.address.street}, {STORE_CONTACT.address.city} - {STORE_CONTACT.address.pincode}
                </span>
              </div>
              <span className="hidden sm:inline text-stone-600">•</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-stone-300">Sales: </span>
                <a href={`tel:+91${STORE_CONTACT.executiveMobile.replace(/\s+/g, '')}`} className="text-white font-bold hover:underline">
                  {STORE_CONTACT.executiveMobile} ({STORE_CONTACT.executiveName})
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card Preview & Fast Showroom Snapshot */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-blue-600/30 rounded-2xl blur-lg opacity-70" />

              {/* Card Container */}
              <div className="relative bg-stone-900 border border-stone-700 rounded-2xl p-6 shadow-2xl space-y-5">
                {/* Header with Reference Tag */}
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
                      Official Store Card
                    </span>
                  </div>
                  <button
                    onClick={onOpenCardModal}
                    className="text-xs text-[#FA5252] hover:text-red-300 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>View Full Card</span>
                  </button>
                </div>

                {/* Condensed Business Card Display */}
                <div 
                  onClick={onOpenCardModal}
                  className="rounded-xl border border-stone-700 p-4 bg-stone-950/70 hover:bg-stone-950 transition-all cursor-pointer group space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-stone-400">Sales Executive</p>
                      <p className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                        {STORE_CONTACT.executiveName}
                      </p>
                      <p className="text-xs font-mono text-stone-300">
                        {STORE_CONTACT.executiveMobile}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-stone-400">Store Lines</p>
                      <p className="text-xs font-mono text-stone-300">{STORE_CONTACT.otherMobiles[0]}</p>
                      <p className="text-xs font-mono text-stone-300">{STORE_CONTACT.otherMobiles[1]}</p>
                    </div>
                  </div>

                  <div className="text-center py-2 border-y border-stone-800/80">
                    <p className="font-extrabold text-lg text-[#FA5252] tracking-wider">
                      {STORE_CONTACT.storeName}
                    </p>
                    <p className="text-[10px] text-stone-400 uppercase font-semibold">
                      {STORE_CONTACT.tagline}
                    </p>
                    <p className="text-xs font-bold text-amber-400 mt-1">
                      ☎ {STORE_CONTACT.landline}
                    </p>
                  </div>

                  <div className="text-center text-[11px] text-stone-400">
                    <p>{STORE_CONTACT.address.doorNo}, {STORE_CONTACT.address.street}, {STORE_CONTACT.address.city} - {STORE_CONTACT.address.pincode}</p>
                    <p className="text-stone-300 font-medium">{STORE_CONTACT.email}</p>
                  </div>
                </div>

                {/* Quick Call Counters & Numbers */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:+91${STORE_CONTACT.executiveMobile.replace(/\s+/g, '')}`}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 text-center transition-colors"
                  >
                    <span className="text-[11px] text-stone-400">Executive Hotline</span>
                    <span className="text-xs font-bold text-white mt-0.5">{STORE_CONTACT.executiveMobile}</span>
                  </a>
                  <a
                    href={`tel:${STORE_CONTACT.landline.replace(/[^0-9]/g, '')}`}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 text-center transition-colors"
                  >
                    <span className="text-[11px] text-stone-400">Desk Landline</span>
                    <span className="text-xs font-bold text-white mt-0.5">{STORE_CONTACT.landline}</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
                  <span>Store Hours: Mon - Sat (9am - 9pm)</span>
                  <button
                    onClick={() => scrollToSection('contact-section')}
                    className="text-stone-300 hover:text-white underline cursor-pointer"
                  >
                    Directions &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
