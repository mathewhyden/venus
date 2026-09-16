import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  ExternalLink 
} from 'lucide-react';
import { Logo } from './Logo';
import { STORE_CONTACT } from '../data/hardwareData';

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessCardModal: React.FC<BusinessCardModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const shareCard = () => {
    const text = `*${STORE_CONTACT.storeName}*\n${STORE_CONTACT.tagline}\n\n*Sales Executive:* ${STORE_CONTACT.executiveName} (${STORE_CONTACT.executiveMobile})\n*Mobiles:* ${STORE_CONTACT.otherMobiles.join(', ')}\n*Landline:* ${STORE_CONTACT.landline}\n*Address:* ${STORE_CONTACT.address.doorNo}, ${STORE_CONTACT.address.street}, ${STORE_CONTACT.address.city} - ${STORE_CONTACT.address.pincode}\n*Email:* ${STORE_CONTACT.email}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Venus Hardware - S. Rathinavel
ORG:VENUS HARDWARE
TITLE:Sales Executive
TEL;TYPE=CELL,VOICE:+918903045873
TEL;TYPE=CELL,VOICE:+919659958875
TEL;TYPE=CELL,VOICE:+916380575823
TEL;TYPE=WORK,VOICE:04312511875
EMAIL;TYPE=PREF,INTERNET:venushardwarestrichy@gmail.com
ADR;TYPE=WORK:;;No: 88, Madurai Road;Trichy;;620008;India
NOTE:Dealers in all fancy interior kitchen and hardware materials.
URL:https://venushardware.com
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Venus_Hardware_Rathinavel.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h3 className="font-bold text-stone-900 text-sm sm:text-base">
              Venus Hardware — Official Business Card
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Business Card Canvas */}
        <div className="p-6 sm:p-8 bg-stone-100 flex flex-col items-center">
          <p className="text-xs text-stone-600 mb-4 text-center max-w-md">
            Verified contact reference card for Venus Hardware, Madurai Road, Trichy.
          </p>

          {/* THE AUTHENTIC BUSINESS CARD REPLICA */}
          <div 
            className="w-full max-w-lg aspect-[1.75/1] relative rounded-xl border border-stone-300 shadow-xl overflow-hidden bg-white text-stone-900 p-5 sm:p-6 flex flex-col justify-between select-none transform hover:scale-[1.01] transition-transform duration-200"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.91), rgba(255, 255, 255, 0.94)), url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            id="physical-card-replica"
          >
            {/* Top row: Left executive details, Right mobile numbers */}
            <div className="flex justify-between items-start gap-2">
              {/* Left: S. Rathinavel */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#C92A2A] text-white flex items-center justify-center text-[10px] font-bold">
                    👤
                  </div>
                  <span className="font-extrabold text-[#C92A2A] text-sm sm:text-base tracking-wide">
                    {STORE_CONTACT.executiveName}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#1E2B58] ml-6 -mt-0.5">
                  {STORE_CONTACT.executiveTitle}
                </span>
                <div className="flex items-center gap-1.5 mt-1 ml-0.5">
                  <div className="w-4 h-4 rounded-sm bg-[#C92A2A] text-white flex items-center justify-center text-[9px]">
                    📱
                  </div>
                  <span className="font-extrabold text-[#C92A2A] text-xs sm:text-sm tracking-wide">
                    {STORE_CONTACT.executiveMobile}
                  </span>
                </div>
              </div>

              {/* Right: Mobiles */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#C92A2A] text-white flex items-center justify-center text-[9px]">
                    📱
                  </div>
                  <span className="font-extrabold text-[#C92A2A] text-xs sm:text-sm tracking-wide">
                    {STORE_CONTACT.otherMobiles[0]}
                  </span>
                </div>
                <div className="text-right mt-1">
                  <span className="font-extrabold text-[#C92A2A] text-xs sm:text-sm tracking-wide">
                    {STORE_CONTACT.otherMobiles[1]}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Logo & Firm Name */}
            <div className="flex flex-col items-center justify-center text-center my-2">
              <div className="mb-1">
                <Logo size="card" showText={false} />
              </div>

              <h1 
                className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#C92A2A] tracking-wider leading-none"
                style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
              >
                {STORE_CONTACT.storeName}
              </h1>

              <div className="mt-1.5">
                <p className="text-[10px] sm:text-xs font-black tracking-wide text-[#1E2B58] uppercase">
                  {STORE_CONTACT.tagline}
                </p>
              </div>

              {/* Landline */}
              <div className="mt-1.5 flex items-center gap-1.5 bg-stone-50/80 px-2.5 py-0.5 rounded-full border border-stone-200/60">
                <span className="text-[11px] text-[#C92A2A]">☎</span>
                <span className="font-extrabold text-sm sm:text-base text-[#C92A2A] tracking-wide">
                  {STORE_CONTACT.landline}
                </span>
              </div>
            </div>

            {/* Bottom: Address and Email */}
            <div className="text-center border-t border-stone-300/80 pt-2">
              <p className="text-xs sm:text-sm font-black text-[#1E2B58] tracking-wide">
                {STORE_CONTACT.address.doorNo}, {STORE_CONTACT.address.street}, {STORE_CONTACT.address.city} - {STORE_CONTACT.address.pincode}.
              </p>
              <p className="text-[11px] sm:text-xs font-extrabold text-[#1E2B58] mt-0.5">
                E Mail : <span className="underline">{STORE_CONTACT.email}</span>
              </p>
            </div>
          </div>

          {/* Quick Copy & Action Buttons for Visitors */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg">
            <button
              onClick={() => copyToClipboard(STORE_CONTACT.executiveMobile, 'Sales No')}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 cursor-pointer transition-colors shadow-2xs"
            >
              {copied === 'Sales No' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
              <span>{copied === 'Sales No' ? 'Copied!' : 'Copy Mobile'}</span>
            </button>

            <button
              onClick={() => copyToClipboard(STORE_CONTACT.email, 'Email')}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 cursor-pointer transition-colors shadow-2xs"
            >
              {copied === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
              <span>{copied === 'Email' ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={shareCard}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 cursor-pointer transition-colors shadow-2xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Card</span>
            </button>

            <button
              onClick={downloadVCard}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#1E2B58] text-white rounded-lg text-xs font-semibold hover:bg-[#141d3d] cursor-pointer transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Contact</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500">
          <span>Trichy Store Timing: 9:00 AM – 9:00 PM</span>
          <button
            onClick={onClose}
            className="text-stone-700 font-medium hover:underline cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
