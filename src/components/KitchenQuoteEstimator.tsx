import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Check, 
  MessageSquare, 
  Mail, 
  ChevronRight, 
  Sparkles, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { STORE_CONTACT } from '../data/hardwareData';

interface KitchenQuoteEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KitchenQuoteEstimator: React.FC<KitchenQuoteEstimatorProps> = ({ isOpen, onClose }) => {
  const [layout, setLayout] = useState<'l-shape' | 'straight' | 'u-shape' | 'parallel'>('l-shape');
  const [drawerCount, setDrawerCount] = useState<number>(6);
  const [overheadDoors, setOverheadDoors] = useState<number>(6);
  const [hasTallUnit, setHasTallUnit] = useState<boolean>(true);
  const [hasCornerUnit, setHasCornerUnit] = useState<boolean>(true);
  const [handleStyle, setHandleStyle] = useState<'rosegold' | 'black' | 'brass' | 'gola' | 'ss'>('rosegold');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('Trichy');

  if (!isOpen) return null;

  // Compute calculated hardware requirements
  const tandemBoxes = drawerCount;
  const cutleryDividers = Math.max(1, Math.floor(drawerCount / 3));
  const softCloseHingesPairs = Math.ceil(overheadDoors * 1.5) + (hasCornerUnit ? 2 : 0);
  const liftUpFittings = Math.floor(overheadDoors / 3);
  const handlesCount = handleStyle === 'gola' ? 0 : drawerCount + overheadDoors + (hasTallUnit ? 2 : 0);
  const golaRunningFeet = handleStyle === 'gola' ? (layout === 'straight' ? 12 : layout === 'l-shape' ? 18 : 24) : 0;

  const handleStyleNames = {
    rosegold: 'Luxury Knurled Rose Gold Handles',
    black: 'Matte Jet Black Minimalist Profiles',
    brass: 'Satin Brass Modern Designer Pulls',
    gola: 'Handleless Anodized Gola Profile Channels',
    ss: 'Classic SS 304 Tubular Bar Handles',
  };

  const layoutNames = {
    'l-shape': 'L-Shaped Kitchen (Approx 8ft x 10ft)',
    'straight': 'Straight Wall Kitchen (Approx 10ft)',
    'u-shape': 'U-Shaped Kitchen (Approx 8ft x 10ft x 8ft)',
    'parallel': 'Parallel / Galley Kitchen (Approx 10ft x 10ft)',
  };

  const generateWhatsAppMessage = () => {
    const text = `*VENUS HARDWARE (TRICHY) - KITCHEN HARDWARE ESTIMATE REQUEST*\n\n` +
      `*Customer:* ${clientName || 'Valued Customer'}\n` +
      `*Contact:* ${clientPhone || 'Not provided'}\n` +
      `*Location:* ${clientCity}\n\n` +
      `*Kitchen Configuration:*\n` +
      `• Layout: ${layoutNames[layout]}\n` +
      `• Base Soft-Close Drawers: ${drawerCount} Nos\n` +
      `• Overhead Shutters: ${overheadDoors} Nos\n` +
      `• Pantry Tall Unit: ${hasTallUnit ? 'Yes (6-Tier Pullout)' : 'No'}\n` +
      `• Blind Corner Unit: ${hasCornerUnit ? 'Yes (360 Carousel / Magic Corner)' : 'No'}\n` +
      `• Handle Preference: ${handleStyleNames[handleStyle]}\n\n` +
      `*Suggested Bill of Materials:*\n` +
      `✓ Tandem Soft-Close Drawer Boxes: ${tandemBoxes} Sets\n` +
      `✓ Cutlery Tray Inserts: ${cutleryDividers} Nos\n` +
      `✓ 3D Soft-Close Concealed Hinges: ${softCloseHingesPairs * 2} pcs (${softCloseHingesPairs} pairs)\n` +
      `✓ Bi-Fold Hydraulic Overhead Lift-Ups: ${liftUpFittings} Sets\n` +
      (handleStyle === 'gola' 
        ? `✓ Anodized Gola Channels: ~${golaRunningFeet} Running Feet\n` 
        : `✓ Designer Cabinet Handles: ${handlesCount} Nos\n`) +
      `\nPlease provide wholesale/retail quotation and stock availability at Madurai Road showroom.`;

    return text;
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/918903045873?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSendEmail = () => {
    const subject = `Hardware Estimate Request - ${clientName || 'Customer'} (${clientCity})`;
    const body = generateWhatsAppMessage();
    const mailto = `mailto:${STORE_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-100 text-[#C92A2A]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg leading-tight">
                Modular Kitchen Hardware Quote Calculator
              </h3>
              <p className="text-xs text-stone-500">
                Venus Hardware — Madurai Road, Trichy (0431- 2511875)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Step 1: Layout Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
              1. Select Kitchen Layout
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'l-shape', label: 'L-Shaped', desc: '8ft x 10ft Corner' },
                { id: 'straight', label: 'Straight', desc: 'Single 10ft Wall' },
                { id: 'parallel', label: 'Parallel', desc: 'Two Opposing Walls' },
                { id: 'u-shape', label: 'U-Shaped', desc: '3-Sided Counter' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLayout(item.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    layout === item.id 
                      ? 'border-[#C92A2A] bg-red-50/50 ring-1 ring-[#C92A2A]' 
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <p className="font-bold text-xs text-stone-900">{item.label}</p>
                  <p className="text-[10px] text-stone-500 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Sliders for Drawer and Cabinet counts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-stone-700">Base Drawer Boxes (Tandem)</label>
                <span className="text-xs font-bold bg-[#1E2B58] text-white px-2 py-0.5 rounded-sm">
                  {drawerCount} Drawers
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="16"
                step="1"
                value={drawerCount}
                onChange={(e) => setDrawerCount(parseInt(e.target.value))}
                className="w-full accent-[#C92A2A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                <span>3 Drawers</span>
                <span>8 (Standard)</span>
                <span>16 Drawers</span>
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-stone-700">Overhead Cabinet Shutters</label>
                <span className="text-xs font-bold bg-[#1E2B58] text-white px-2 py-0.5 rounded-sm">
                  {overheadDoors} Shutters
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="16"
                step="1"
                value={overheadDoors}
                onChange={(e) => setOverheadDoors(parseInt(e.target.value))}
                className="w-full accent-[#C92A2A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                <span>2 Doors</span>
                <span>6 (Standard)</span>
                <span>16 Doors</span>
              </div>
            </div>
          </div>

          {/* Step 3: Special Organizers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
              hasTallUnit ? 'bg-red-50/40 border-red-300' : 'bg-white border-stone-200'
            }`}>
              <input
                type="checkbox"
                checked={hasTallUnit}
                onChange={(e) => setHasTallUnit(e.target.checked)}
                className="mt-0.5 accent-[#C92A2A] rounded-sm w-4 h-4"
              />
              <div>
                <p className="text-xs font-bold text-stone-900">Include 6-Tier Pantry Tall Unit</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Heavy-duty vertical pullout organizer with 120kg dynamic slides.</p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
              hasCornerUnit ? 'bg-red-50/40 border-red-300' : 'bg-white border-stone-200'
            }`}>
              <input
                type="checkbox"
                checked={hasCornerUnit}
                onChange={(e) => setHasCornerUnit(e.target.checked)}
                className="mt-0.5 accent-[#C92A2A] rounded-sm w-4 h-4"
              />
              <div>
                <p className="text-xs font-bold text-stone-900">Include Blind Corner Magic Unit</p>
                <p className="text-[11px] text-stone-500 mt-0.5">360-degree rotating kidney carousel or swing pullout.</p>
              </div>
            </label>
          </div>

          {/* Step 4: Handle & Profile Style */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
              4. Preferred Handle or Profile System
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                { id: 'rosegold', name: 'Knurled Rose Gold Pulls', tag: 'Luxury Trend' },
                { id: 'black', name: 'Matte Jet Black Profiles', tag: 'Modern Minimal' },
                { id: 'brass', name: 'Satin Brass Designer Knobs', tag: 'Warm Metallic' },
                { id: 'gola', name: 'Handleless Anodized Gola', tag: 'Seamless Look' },
                { id: 'ss', name: 'SS 304 Tubular Bar Handles', tag: 'High Durability' },
              ].map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setHandleStyle(style.id as any)}
                  className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    handleStyle === style.id 
                      ? 'border-[#C92A2A] bg-red-50/50 ring-1 ring-[#C92A2A]' 
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-stone-900">{style.name}</p>
                    <p className="text-[10px] text-stone-500">{style.tag}</p>
                  </div>
                  {handleStyle === style.id && <Check className="w-4 h-4 text-[#C92A2A]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Customer Details for Quote Request */}
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Optional Contact Details (for Quote Verification)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Anand Kumar"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#C92A2A] outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 98424 XXXXX"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#C92A2A] outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Location / Area</label>
                <input
                  type="text"
                  placeholder="e.g. Thillai Nagar, Trichy"
                  value={clientCity}
                  onChange={(e) => setClientCity(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#C92A2A] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Generated Bill of Materials Preview */}
          <div className="bg-stone-900 text-white p-5 rounded-xl space-y-3">
            <div className="flex justify-between items-center border-b border-stone-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Estimated Hardware Requirement Summary
              </span>
              <span className="text-[11px] text-stone-400">Madurai Road Showroom Estimate</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-stone-800/80 p-2.5 rounded-lg">
                <span className="text-stone-400 text-[10px]">Tandem Drawer Boxes</span>
                <p className="font-bold text-white text-sm mt-0.5">{tandemBoxes} Sets (Soft-Close)</p>
              </div>
              <div className="bg-stone-800/80 p-2.5 rounded-lg">
                <span className="text-stone-400 text-[10px]">3D Hydraulic Hinges</span>
                <p className="font-bold text-white text-sm mt-0.5">{softCloseHingesPairs * 2} Pcs ({softCloseHingesPairs} Pairs)</p>
              </div>
              <div className="bg-stone-800/80 p-2.5 rounded-lg">
                <span className="text-stone-400 text-[10px]">Overhead Lift-Ups</span>
                <p className="font-bold text-white text-sm mt-0.5">{liftUpFittings} Bi-fold Sets</p>
              </div>
              <div className="bg-stone-800/80 p-2.5 rounded-lg">
                <span className="text-stone-400 text-[10px]">Special Units</span>
                <p className="font-bold text-white text-xs mt-0.5">
                  {hasTallUnit && hasCornerUnit 
                    ? 'Pantry + Corner Unit' 
                    : hasTallUnit 
                    ? 'Tall Unit' 
                    : hasCornerUnit 
                    ? 'Corner Unit' 
                    : 'Standard Base'}
                </p>
              </div>
              <div className="bg-stone-800/80 p-2.5 rounded-lg col-span-2">
                <span className="text-stone-400 text-[10px]">Handle / Profile Selection</span>
                <p className="font-bold text-amber-300 text-xs mt-0.5">
                  {handleStyle === 'gola' ? `Gola Profiles (~${golaRunningFeet} Rft)` : `${handlesCount} Pcs (${handleStyleNames[handleStyle]})`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-600">
            <span>Sales Counter: </span>
            <a href="tel:+918903045873" className="font-bold text-[#C92A2A] hover:underline">
              89030 45873 (S. Rathinavel)
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSendEmail}
              className="flex items-center gap-1.5 px-3.5 py-2 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-100 cursor-pointer shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-stone-500" />
              <span>Email to Store</span>
            </button>

            <button
              onClick={handleSendWhatsApp}
              className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl text-xs font-bold hover:bg-[#20bd5a] cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
