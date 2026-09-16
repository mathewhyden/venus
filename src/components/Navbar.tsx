import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  MessageSquare, 
  CreditCard,
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { Logo } from './Logo';
import { STORE_CONTACT } from '../data/hardwareData';

interface NavbarProps {
  onOpenCardModal: () => void;
  onOpenQuoteEstimator: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCardModal, 
  onOpenQuoteEstimator 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  const whatsappUrl = `https://wa.me/918903045873?text=${encodeURIComponent(
    "Hello Venus Hardware (Trichy), I would like to inquire about fancy interior kitchen & hardware materials."
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs border-b border-stone-200">
      {/* Top Bar with exact contact numbers and address from the business card */}
      <div className="bg-[#1E2B58] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-stone-200">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#E03131]" />
              <span>{STORE_CONTACT.address.doorNo}, {STORE_CONTACT.address.street}, {STORE_CONTACT.address.city} - {STORE_CONTACT.address.pincode}</span>
            </div>

            <span className="hidden lg:inline text-stone-500">|</span>

            <a 
              href={`mailto:${STORE_CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              id="topbar-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-stone-300" />
              <span>{STORE_CONTACT.email}</span>
            </a>
          </div>

          {/* Right representative & desk numbers */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-1">
            <div className="flex items-center gap-1.5 bg-[#2A3B75] px-2.5 py-0.5 rounded-full text-[11px]">
              <UserCheck className="w-3 h-3 text-red-300" />
              <span className="font-semibold text-white">{STORE_CONTACT.executiveName} ({STORE_CONTACT.executiveTitle}):</span>
              <a href={`tel:+91${STORE_CONTACT.executiveMobile.replace(/\s+/g, '')}`} className="font-bold text-amber-300 hover:underline">
                {STORE_CONTACT.executiveMobile}
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-stone-200 text-[11px]">
              <Phone className="w-3 h-3 text-stone-300" />
              <span>Landline:</span>
              <a href={`tel:${STORE_CONTACT.landline.replace(/[^0-9]/g, '')}`} className="font-semibold text-white hover:text-amber-300">
                {STORE_CONTACT.landline}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-left cursor-pointer focus:outline-none"
          id="nav-brand-button"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
          <button 
            onClick={() => scrollToSection('products-catalog')}
            className="hover:text-[#C92A2A] transition-colors cursor-pointer py-1"
            id="nav-link-products"
          >
            Hardware Catalog
          </button>
          <button 
            onClick={() => scrollToSection('kitchen-solutions')}
            className="hover:text-[#C92A2A] transition-colors cursor-pointer py-1"
            id="nav-link-kitchen"
          >
            Kitchen Interiors
          </button>
          <button 
            onClick={onOpenQuoteEstimator}
            className="text-[#C92A2A] hover:text-[#A61E1E] transition-colors cursor-pointer py-1 flex items-center gap-1.5 font-bold"
            id="nav-link-quote-estimator"
          >
            <span>Quote Calculator</span>
            <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-sm font-medium">Free</span>
          </button>
          <button 
            onClick={() => scrollToSection('why-us')}
            className="hover:text-[#C92A2A] transition-colors cursor-pointer py-1"
            id="nav-link-why-us"
          >
            Why Venus
          </button>
          <button 
            onClick={() => scrollToSection('contact-section')}
            className="hover:text-[#C92A2A] transition-colors cursor-pointer py-1"
            id="nav-link-contact"
          >
            Showroom & Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Card Reference button */}
          <button
            onClick={onOpenCardModal}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-all cursor-pointer shadow-2xs"
            id="view-business-card-button"
            title="View original Venus Hardware business card"
          >
            <CreditCard className="w-3.5 h-3.5 text-[#C92A2A]" />
            <span>Digital Card</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#25D366] text-white rounded-lg text-xs font-bold hover:bg-[#20bd5a] transition-all shadow-xs"
            id="nav-whatsapp-button"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Quick Call */}
          <a
            href={`tel:+918903045873`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#C92A2A] text-white rounded-lg text-xs font-bold hover:bg-[#A61E1E] transition-all shadow-xs"
            id="nav-call-button"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Store</span>
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-stone-800">
            <button 
              onClick={() => scrollToSection('products-catalog')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Hardware Catalog
            </button>
            <button 
              onClick={() => scrollToSection('kitchen-solutions')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Kitchen Interiors
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteEstimator();
              }}
              className="text-left px-3 py-2 rounded-md bg-red-50 text-[#C92A2A] font-bold flex items-center justify-between"
            >
              <span>Instant Kitchen Quote Calculator</span>
              <span className="text-xs bg-[#C92A2A] text-white px-2 py-0.5 rounded-full">Free</span>
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Why Venus Hardware
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Showroom Location & Contact
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCardModal();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 bg-stone-50"
            >
              <CreditCard className="w-4 h-4 text-[#C92A2A]" />
              <span>Digital Card</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] text-white rounded-lg text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="bg-stone-50 p-3 rounded-lg text-xs text-stone-600 space-y-1">
            <p className="font-bold text-stone-800">Direct Contact Numbers:</p>
            <p>Sales: <a href="tel:+918903045873" className="text-[#C92A2A] font-bold">89030 45873</a> (S. Rathinavel)</p>
            <p>Lines: <a href="tel:+919659958875" className="text-stone-800 font-medium">96599 58875</a> / <a href="tel:+916380575823" className="text-stone-800 font-medium">63805 75823</a></p>
            <p>Landline: <a href="tel:04312511875" className="text-stone-800 font-medium">0431- 2511875</a></p>
          </div>
        </div>
      )}
    </header>
  );
};
