import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import { PortfolioItem, Category } from '../types';
import { Camera, SlidersHorizontal, ArrowRight, Expand } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectItem: (item: PortfolioItem) => void;
  onBookSession: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectItem,
  onBookSession
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Works' },
    { key: 'editorial', label: 'Editorial & Spatial' },
    { key: 'fashion', label: 'Fashion & Lookbooks' },
    { key: 'still-life', label: 'Still Life & Objects' },
    { key: 'monochrome', label: 'Monochrome Silver' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-stone-100/60 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
              Selected Works &amp; Archive
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-950 font-normal">
              Portfolio &amp; Client Plates
            </h2>
          </div>

          {/* Interactive Category Segmented Control (Real functional buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredItems.map((item, index) => {
            // Bento sizing math: let first item be wide 7-cols, second 5-cols, etc.
            const colSpan = index === 0 ? 'md:col-span-7' : index === 1 ? 'md:col-span-5' : index === 2 ? 'md:col-span-5' : index === 3 ? 'md:col-span-7' : 'md:col-span-12';
            const imageHeight = index === 0 || index === 3 ? 'h-[440px]' : 'h-[440px]';

            return (
              <div
                key={item.id}
                className={`${colSpan} group cursor-pointer flex flex-col bg-white border border-stone-200/80 overflow-hidden transition-all duration-300 hover:shadow-lg`}
                onClick={() => onSelectItem(item)}
              >
                {/* Image Container */}
                <div className={`relative w-full ${imageHeight} bg-stone-200 overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-stone-900/90 text-white text-xs uppercase tracking-wider font-medium flex items-center gap-2 shadow-lg backdrop-blur-sm">
                      <Expand className="w-3.5 h-3.5" />
                      <span>View Plate &amp; EXIF</span>
                    </span>
                  </div>

                  {/* Corner Category Tag (quiet text, not pill) */}
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-stone-100 text-[11px] font-mono uppercase px-2.5 py-1 tracking-wider">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Metadata Card Footer (Zero-Pill discipline) */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 font-light mb-1.5">
                      <span>{item.client}</span>
                      <span className="font-mono">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 font-light">
                      {item.summary}
                    </p>
                  </div>

                  {/* Camera & Tech Exif summary line */}
                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                    <div className="flex items-center gap-2 truncate">
                      <Camera className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                      <span className="truncate">{item.exif.camera}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.exif.aperture}</span>
                    </div>
                    <span className="text-stone-900 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Action Footnote */}
        <div className="mt-14 text-center">
          <p className="text-sm text-stone-600 mb-4 font-light">
            Need a custom campaign, lookbook, or still life shoot with this visual caliber?
          </p>
          <button
            onClick={onBookSession}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
          >
            <span>Commission a Production</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
