import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, CreditCard, ArrowUp } from 'lucide-react';
import { STORE_CONTACT } from '../data/hardwareData';

interface QuickContactFloatingProps {
  onOpenCardModal: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ onOpenCardModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/918903045873?text=${encodeURIComponent(
    "Hello Venus Hardware (Trichy), I would like to inquire about fancy kitchen hardware materials."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-stone-900/80 hover:bg-stone-900 text-white rounded-full shadow-lg backdrop-blur-xs transition-all cursor-pointer hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* View Business Card floating button */}
      <button
        onClick={onOpenCardModal}
        className="flex items-center gap-2 px-3 py-2 bg-white text-stone-800 border border-stone-300 rounded-full shadow-lg hover:shadow-xl hover:bg-stone-50 transition-all cursor-pointer group"
        title="View Venus Hardware business card"
      >
        <CreditCard className="w-4 h-4 text-[#C92A2A] group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline">Business Card</span>
      </button>

      {/* Direct Call Floating */}
      <a
        href={`tel:+918903045873`}
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#C92A2A] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#A61E1E] transition-all cursor-pointer group"
        title="Call S. Rathinavel (89030 45873)"
      >
        <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline">Call 89030 45873</span>
      </a>

      {/* WhatsApp Floating */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all cursor-pointer group animate-bounce-subtle"
        title="Chat on WhatsApp with Venus Hardware"
      >
        <MessageSquare className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};
