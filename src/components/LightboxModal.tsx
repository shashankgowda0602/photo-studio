import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sliders, Maximize2, Minimize2 } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
  onBookSimilar: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
  onBookSimilar
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;
      const currentIndex = items.findIndex((i) => i.id === item.id);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onNavigate(items[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(items[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar inside Lightbox */}
      <div className="w-full max-w-7xl flex items-center justify-between text-stone-300 pb-3 border-b border-stone-800">
        <div>
          <h3 className="text-base sm:text-lg font-serif text-white tracking-tight">{item.title}</h3>
          <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5 font-light">
            <span>{item.client}</span>
            <span aria-hidden="true">·</span>
            <span>{item.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{item.year}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-stone-400 hover:text-white transition-colors hover:bg-stone-800/60 rounded"
            title={isZoomed ? "Reset View" : "Toggle Full Scale"}
            aria-label="Toggle zoom"
          >
            {isZoomed ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white transition-colors hover:bg-stone-800/60 rounded"
            title="Close Lightbox (ESC)"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative flex-1 w-full max-w-7xl flex items-center justify-center my-4 overflow-hidden">
        {/* Navigation Arrows */}
        {hasPrev && (
          <button
            onClick={() => onNavigate(items[currentIndex - 1])}
            className="absolute left-2 sm:left-4 z-20 p-3 text-stone-300 hover:text-white bg-stone-900/70 hover:bg-stone-900 rounded-full transition-all focus:outline-none"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={() => onNavigate(items[currentIndex + 1])}
            className="absolute right-2 sm:right-4 z-20 p-3 text-stone-300 hover:text-white bg-stone-900/70 hover:bg-stone-900 rounded-full transition-all focus:outline-none"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className={`relative max-h-full transition-all duration-300 ${isZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain mx-auto shadow-2xl select-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Bottom EXIF & Action Strip */}
      <div className="w-full max-w-7xl pt-3 border-t border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone-400">
        {/* EXIF Data Strip */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono">
          <div className="flex items-center gap-1.5 text-stone-300">
            <Camera className="w-3.5 h-3.5 text-stone-400" />
            <span>{item.exif.camera}</span>
          </div>
          <span>Lens: {item.exif.lens}</span>
          <span>Aperture: {item.exif.aperture}</span>
          <span>Shutter: {item.exif.shutter}</span>
          <span>ISO: {item.exif.iso}</span>
          <span className="hidden lg:inline text-stone-400">Light: {item.exif.lighting}</span>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-stone-400 font-mono text-[11px] hidden sm:inline">
            {currentIndex + 1} of {items.length}
          </span>
          <button
            onClick={() => {
              onClose();
              onBookSimilar(item);
            }}
            className="px-4 py-2 bg-stone-100 hover:bg-white text-stone-950 font-semibold tracking-wider uppercase text-[11px] transition-colors"
          >
            Commission Similar Shoot
          </button>
        </div>
      </div>
    </div>
  );
};
