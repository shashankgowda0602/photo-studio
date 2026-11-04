import React from 'react';
import { STUDIO_DETAILS, TESTIMONIALS } from '../data/studioData';
import { Camera, Award, Quote } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
            Craft &amp; Direction
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-950 font-normal mb-4">
            Resident Photographers &amp; Curators.
          </h2>
          <p className="text-base text-stone-600 font-light leading-relaxed">
            Founded by portraitist Julian Vance, Aperture &amp; Grain bridges timeless analog darkroom discipline with high-precision digital capture.
          </p>
        </div>

        {/* Director Profile Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-stone-200 p-8 sm:p-12 mb-20 shadow-sm">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-sm overflow-hidden bg-stone-200 border border-stone-300">
              <img
                src={STUDIO_DETAILS.directorImage}
                alt="Julian Vance, Studio Director & Lead Photographer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-1">
                Founder &amp; Principal Photographer
              </div>
              <h3 className="text-3xl font-serif text-stone-900">Julian Vance</h3>
            </div>

            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Julian spent fifteen years shooting editorial stories for publications across Milan, Paris, and New York. His obsession with natural northern daylight and medium format film grain led to the founding of Aperture &amp; Grain in 2014.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs text-stone-600 font-light">
              <div>
                <span className="font-semibold text-stone-900 block font-sans">Primary Cameras:</span>
                <span className="font-mono text-stone-500">Hasselblad 907X · Leica M-A Film</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900 block font-sans">Specialty Disciplines:</span>
                <span className="text-stone-500">Editorial Portraits, Monograph Books</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-500 font-mono">
              Recognized: International Center of Photography Fellow · Hasselblad Masters Shortlist
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Client Testimonials */}
        <div className="pt-12 border-t border-stone-200">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-8">
            Selected Client Endorsements
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white border border-stone-200/80 p-6 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-700 font-serif italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <div className="pt-4 border-t border-stone-100 text-xs">
                  <div className="font-semibold text-stone-900">{t.author}</div>
                  <div className="text-stone-500">{t.role}, {t.company}</div>
                  <div className="text-stone-400 font-mono text-[11px] mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
