import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CreditCard,
  ChefHat,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { STORE_CONTACT } from '../data/hardwareData';

interface FooterProps {
  onOpenCardModal: () => void;
  onOpenQuoteEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenCardModal, 
  onOpenQuoteEstimator 
}) => {
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
    <footer className="bg-stone-950 text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" textColor="white" />
            
            <p className="text-stone-400 text-xs sm:text-sm font-semibold tracking-wide uppercase text-red-400">
              {STORE_CONTACT.tagline}
            </p>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Trichy’s trusted wholesale &amp; retail house for high-grade modular kitchen baskets, soft-close drawers, designer handles, and architectural hardware fittings.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenCardModal}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-lg text-xs font-semibold text-stone-200 transition-colors cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#FA5252]" />
                <span>View Digital Business Card</span>
              </button>

              <button
                onClick={onOpenQuoteEstimator}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C92A2A] hover:bg-[#A61E1E] rounded-lg text-xs font-bold text-white transition-colors cursor-pointer"
              >
                <ChefHat className="w-3.5 h-3.5" />
                <span>Kitchen Calculator</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => scrollToSection('products-catalog')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hardware Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kitchen-solutions')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kitchen Interiors
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenQuoteEstimator}
                  className="hover:text-white transition-colors cursor-pointer text-left text-amber-300"
                >
                  Instant Quote Estimator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-us')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why Choose Venus
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Showroom Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Interior Hardware Range
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>• SS 304 Soft-Close Tandem Boxes</li>
              <li>• Corner Carousel &amp; Magic Units</li>
              <li>• 6-Tier Pantry Tall Pullouts</li>
              <li>• Knurled Rose Gold &amp; Brass Handles</li>
              <li>• Anodized Gola J-Profile Channels</li>
              <li>• Hydraulic Bi-Fold Overhead Lift-Ups</li>
              <li>• High-Security Mortise &amp; Smart Locks</li>
              <li>• Glass Shower Hinges &amp; Patch Fittings</li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Showroom &amp; Contacts
            </h4>
            
            <div className="text-xs text-stone-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FA5252] shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  {STORE_CONTACT.address.doorNo}, {STORE_CONTACT.address.street},<br />
                  {STORE_CONTACT.address.city} - {STORE_CONTACT.address.pincode}.
                </span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${STORE_CONTACT.email}`}
                  className="text-stone-200 hover:text-white underline break-all"
                >
                  {STORE_CONTACT.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 font-bold">
                    Sales: {STORE_CONTACT.executiveMobile}
                  </p>
                  <p className="text-[11px] text-stone-400">
                    ({STORE_CONTACT.executiveName}, {STORE_CONTACT.executiveTitle})
                  </p>
                  <p className="text-stone-400 mt-1">
                    Lines: {STORE_CONTACT.otherMobiles.join(' / ')}
                  </p>
                  <p className="text-stone-400">
                    Desk: {STORE_CONTACT.landline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Venus Hardware (Trichy). All rights reserved.</p>
          <p className="text-stone-400">
            Dealers in all fancy interior kitchen &amp; hardware materials • Trichy - 620 008.
          </p>
        </div>
      </div>
    </footer>
  );
};
