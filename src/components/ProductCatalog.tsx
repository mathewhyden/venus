import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Info, 
  X, 
  ChevronRight, 
  Layers, 
  Shield, 
  Maximize2 
} from 'lucide-react';
import { Product } from '../types';
import { FEATURED_PRODUCTS, PRODUCT_CATEGORIES, STORE_CONTACT } from '../data/hardwareData';

interface ProductCatalogProps {
  onSelectForQuote?: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.finish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openWhatsAppForProduct = (product: Product) => {
    const message = `Hello Venus Hardware (Trichy), I would like to inquire about pricing and availability for:\n\n*Product:* ${product.name}\n*Category:* ${product.categoryLabel}\n*Finish:* ${product.finish}\n*Material:* ${product.material}\n\nPlease share price details and available sizes.`;
    const url = `https://wa.me/918903045873?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="products-catalog" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#C92A2A] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Showroom Inventory &amp; Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Fancy Interior Kitchen &amp; Hardware Range
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Engineered for luxury aesthetics and heavy everyday Indian kitchen usage. 
              Available in retail and bulk wholesale directly from our Madurai Road Trichy outlet.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search handles, baskets, hinges..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C92A2A] focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E2B58] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-500 text-sm">No hardware items found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#C92A2A] text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-[#A61E1E]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                      {product.categoryLabel}
                    </span>
                    {product.popular && (
                      <span className="px-2.5 py-1 rounded-md bg-[#C92A2A] text-white text-[11px] font-bold">
                        Best Seller
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white rounded-lg text-stone-800 shadow-xs backdrop-blur-xs cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Quick Specs View"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg group-hover:text-[#C92A2A] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium mt-1">
                      Finish: <span className="text-stone-800 font-semibold">{product.finish}</span>
                    </p>
                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                      Material: <span className="text-stone-800">{product.material}</span>
                    </p>

                    <p className="text-stone-600 text-xs line-clamp-2 mt-2.5 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-3 space-y-1">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                    <button
                      onClick={() => openWhatsAppForProduct(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20bd5a] transition-all cursor-pointer shadow-2xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Price</span>
                    </button>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl transition-all cursor-pointer"
                      title="View Full Specifications"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
              <div>
                <span className="text-xs font-bold text-[#C92A2A] uppercase tracking-wider">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="font-bold text-stone-900 text-lg leading-tight">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                  {selectedProduct.finish}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Product Overview
                </h4>
                <p className="text-sm text-stone-700 mt-1 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
                <div>
                  <span className="text-stone-500 font-medium">Standard Material:</span>
                  <p className="font-bold text-stone-800 mt-0.5">{selectedProduct.material}</p>
                </div>
                <div>
                  <span className="text-stone-500 font-medium">Surface Treatment:</span>
                  <p className="font-bold text-stone-800 mt-0.5">{selectedProduct.finish}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Technical Specifications &amp; Features
                </h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50/70 p-4 rounded-xl border border-red-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#C92A2A]">Direct Showroom Inquiry</p>
                  <p className="text-stone-600 mt-0.5">
                    Contact S. Rathinavel ({STORE_CONTACT.executiveMobile}) for bulk rates or custom dimensions.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-stone-500">
                <span>Showroom Code: {selectedProduct.id.toUpperCase()}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    openWhatsAppForProduct(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl text-xs font-bold hover:bg-[#20bd5a] cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
