import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  UserCheck, 
  Building2, 
  Navigation,
  ExternalLink
} from 'lucide-react';
import { STORE_CONTACT } from '../data/hardwareData';
import { Logo } from './Logo';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirementType: 'Modular Kitchen Fittings',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Prepare email body
    const subject = `Hardware Inquiry from ${formData.name} (${formData.requirementType})`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirement: ${formData.requirementType}\n\nMessage:\n${formData.message}\n\nSent via Venus Hardware Website`;
    
    const mailtoUrl = `mailto:${STORE_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        requirementType: 'Modular Kitchen Fittings',
        message: '',
      });
    }, 4000);
  };

  const handleWhatsAppInquiry = () => {
    const text = `*Inquiry for Venus Hardware (Trichy)*\n\nName: ${formData.name || 'Customer'}\nPhone: ${formData.phone || 'Not provided'}\nCategory: ${formData.requirementType}\nNote: ${formData.message || 'Please send catalog and price list'}`;
    const url = `https://wa.me/918903045873?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("88 Madurai Road Trichy 620008")}`;

  return (
    <section id="contact-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#C92A2A] text-xs font-bold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Visit Our Trichy Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Contact &amp; Store Location
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5">
            Conveniently located on Madurai Road, Trichy. Drop by to examine hardware samples in person, or connect with our sales team via phone, WhatsApp, or email.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Card 1: Address */}
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#C92A2A] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">Showroom Address</h3>
              <p className="text-stone-800 text-xs sm:text-sm font-semibold mt-2 leading-relaxed">
                {STORE_CONTACT.address.doorNo}, {STORE_CONTACT.address.street},<br />
                {STORE_CONTACT.address.city} - {STORE_CONTACT.address.pincode}.
              </p>
              <p className="text-stone-500 text-[11px] mt-1">
                Central Tamil Nadu (Trichy)
              </p>
            </div>
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#C92A2A] hover:underline"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2: Sales Executive */}
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E2B58] flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">{STORE_CONTACT.executiveName}</h3>
              <p className="text-[#C92A2A] text-xs font-bold mt-0.5">{STORE_CONTACT.executiveTitle}</p>
              <div className="mt-3 space-y-1">
                <p className="text-[11px] text-stone-500 font-medium">Direct Mobile Hotline:</p>
                <a 
                  href={`tel:+91${STORE_CONTACT.executiveMobile.replace(/\s+/g, '')}`}
                  className="text-base font-extrabold text-stone-900 hover:text-[#C92A2A] transition-colors block font-mono"
                >
                  {STORE_CONTACT.executiveMobile}
                </a>
              </div>
            </div>
            <a
              href={`https://wa.me/918903045873`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Additional Lines & Landline */}
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">Store &amp; Desk Numbers</h3>
              <div className="mt-2 space-y-1 text-xs">
                <p className="text-stone-500 text-[11px]">Landline (Trichy STD):</p>
                <a 
                  href={`tel:${STORE_CONTACT.landline.replace(/[^0-9]/g, '')}`}
                  className="font-extrabold text-sm text-stone-900 hover:text-[#C92A2A] block font-mono"
                >
                  {STORE_CONTACT.landline}
                </a>
                <p className="text-stone-500 text-[11px] pt-1">Direct Lines:</p>
                <div className="space-y-0.5">
                  <a href={`tel:+91${STORE_CONTACT.otherMobiles[0]}`} className="font-semibold text-stone-800 hover:text-[#C92A2A] block font-mono">
                    {STORE_CONTACT.otherMobiles[0]}
                  </a>
                  <a href={`tel:+91${STORE_CONTACT.otherMobiles[1]}`} className="font-semibold text-stone-800 hover:text-[#C92A2A] block font-mono">
                    {STORE_CONTACT.otherMobiles[1]}
                  </a>
                </div>
              </div>
            </div>
            <span className="mt-4 text-[11px] text-stone-400">Call during working hours</span>
          </div>

          {/* Card 4: Email & Hours */}
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">Email &amp; Timings</h3>
              <p className="text-stone-500 text-[11px] mt-2">Official Gmail:</p>
              <a 
                href={`mailto:${STORE_CONTACT.email}`}
                className="text-xs sm:text-[13px] font-bold text-stone-900 hover:text-[#C92A2A] break-all block mt-0.5"
                id="contact-official-email"
              >
                {STORE_CONTACT.email}
              </a>
              <div className="mt-3">
                <p className="text-[11px] text-stone-500">Operating Hours:</p>
                <p className="text-xs text-stone-800 font-medium mt-0.5">
                  Mon – Sat: 9:00 AM – 9:00 PM<br />
                  Sun: 10:00 AM – 3:00 PM
                </p>
              </div>
            </div>
            <a
              href={`mailto:${STORE_CONTACT.email}`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#C92A2A] hover:underline"
            >
              <span>Compose Email</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Main Grid: Form + Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-900">
                Send Product Inquiry or Request a Price Quote
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Fill in your project requirements below. Messages are routed directly to <span className="font-semibold text-stone-800">{STORE_CONTACT.email}</span>.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your email client has been prepared, and our team will get in touch shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. R. Karthik"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C92A2A] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98424 XXXXX"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C92A2A] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C92A2A] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.requirementType}
                    onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C92A2A] focus:border-transparent transition-all"
                  >
                    <option value="Modular Kitchen Fittings">Modular Kitchen Fittings (Baskets, Tandem)</option>
                    <option value="Fancy Handles & Knobs">Fancy Handles &amp; Knobs (Rose Gold, Brass)</option>
                    <option value="Door Locks & Hinges">Door Locks &amp; Soft-Close Hinges</option>
                    <option value="Wardrobe Accessories">Wardrobe Accessories (Pants Rack, Trays)</option>
                    <option value="Glass & Bathroom Hardware">Glass &amp; Bathroom Fittings</option>
                    <option value="Full House Interior Package">Full House Interior Hardware Package</option>
                    <option value="Wholesale / Contractor Inquiry">Wholesale / Contractor Bulk Order</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Message / Dimensions / Bill of Quantities
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe what you need (e.g. 6 tandem drawers, 12 rose gold handles, L-shape kitchen accessories)..."
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C92A2A] focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-[11px] text-stone-500">
                  Direct Store Desk: 0431- 2511875
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20bd5a] transition-all cursor-pointer shadow-2xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send on WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-[#C92A2A] text-white text-xs font-bold rounded-xl hover:bg-[#A61E1E] transition-all cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email Quote</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Interactive Map & Directions (5 cols) */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-stone-900 text-base">
                  Interactive Showroom Map
                </h4>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Open Today
                </span>
              </div>
              <p className="text-xs text-stone-600 mb-3">
                {STORE_CONTACT.address.doorNo}, {STORE_CONTACT.address.street}, {STORE_CONTACT.address.city} - {STORE_CONTACT.address.pincode}
              </p>

              {/* Map container with realistic interactive iframe location for Madurai Road, Trichy */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-300 shadow-inner bg-stone-200">
                <iframe
                  title="Venus Hardware Trichy Location Map"
                  src="https://maps.google.com/maps?q=Madurai%20Road,%20Tiruchirappalli,%20Tamil%20Nadu%20620008&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Map actions */}
            <div className="pt-2 space-y-2">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1E2B58] text-white text-xs font-bold rounded-xl hover:bg-[#151e3d] transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-red-400" />
                <span>Navigate via Google Maps</span>
              </a>

              <div className="p-3 rounded-xl bg-white border border-stone-200 text-[11px] text-stone-600 space-y-1">
                <p className="font-bold text-stone-800">Showroom Landmarks:</p>
                <p>• Located on main Madurai Road commercial stretch in Trichy.</p>
                <p>• Convenient parking available for customers &amp; loading tempos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
