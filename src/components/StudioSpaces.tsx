import React, { useState } from 'react';
import { STUDIO_SPACES, EQUIPMENT_ROSTER } from '../data/studioData';
import { Check, Sun, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

interface StudioSpacesProps {
  onBookSpace: (spaceId: string) => void;
}

export const StudioSpaces: React.FC<StudioSpacesProps> = ({ onBookSpace }) => {
  const [selectedEqCategory, setSelectedEqCategory] = useState<'all' | 'lighting' | 'grip' | 'camera' | 'backdrops'>('all');

  const eqCategories: { key: 'all' | 'lighting' | 'grip' | 'camera' | 'backdrops'; label: string }[] = [
    { key: 'all', label: 'All Equipment' },
    { key: 'lighting', label: 'Strobes & Continuous' },
    { key: 'grip', label: 'Grip & Modifiers' },
    { key: 'camera', label: 'Cameras & Lenses' },
    { key: 'backdrops', label: 'Backdrops & Surfaces' },
  ];

  const filteredEquipment = selectedEqCategory === 'all'
    ? EQUIPMENT_ROSTER
    : EQUIPMENT_ROSTER.filter((item) => item.category === selectedEqCategory);

  return (
    <section id="spaces" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
            The Production Environment
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-950 font-normal mb-4">
            Two Studios Engineered for Visual Precision.
          </h2>
          <p className="text-base text-stone-600 font-light leading-relaxed">
            Whether your brief demands boundless daylight and corner cyclorama dimensions, or darkroom-grade lighting control and textured stone tabletop surfaces.
          </p>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {STUDIO_SPACES.map((space) => (
            <div
              key={space.id}
              className="bg-white border border-stone-200/90 flex flex-col justify-between overflow-hidden shadow-sm"
            >
              <div>
                {/* Space Photo */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-200">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur-sm text-white px-3 py-1 font-mono text-xs">
                    ${space.dayRate} / full day
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-2">
                    <span>{space.sqft} sq ft</span>
                    <span aria-hidden="true">·</span>
                    <span>{space.ceilingHeight} ceiling</span>
                    <span aria-hidden="true">·</span>
                    <span>${space.hourlyRate}/hr</span>
                  </div>

                  <h3 className="text-2xl font-serif text-stone-900 mb-3">{space.name}</h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
                    {space.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-stone-100">
                    <p className="text-xs uppercase tracking-wider font-semibold text-stone-900 mb-3">
                      Space Specifications:
                    </p>
                    {space.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-600">
                        <Check className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-8 pt-0">
                <button
                  onClick={() => onBookSpace(space.id)}
                  className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 transition-colors text-center cursor-pointer"
                >
                  Reserve {space.name.split(':')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Locker Component */}
        <div id="equipment" className="pt-16 border-t border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-2">
                In-House Gear Roster
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900">
                The Equipment Locker
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Standard grip package included with every space hire. Specialty heads and medium format cameras available on demand.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg overflow-x-auto">
              {eqCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedEqCategory(cat.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedEqCategory === cat.key
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Table / List with Tabular figures */}
          <div className="bg-white border border-stone-200 divide-y divide-stone-100">
            {filteredEquipment.map((eq) => (
              <div
                key={eq.id}
                className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50/70 transition-colors"
              >
                <div>
                  <h4 className="text-sm font-medium text-stone-900">{eq.name}</h4>
                  <p className="text-xs font-mono text-stone-500">{eq.model}</p>
                </div>
                <div className="text-right sm:text-right">
                  {eq.includedInRental ? (
                    <span className="text-xs font-medium text-emerald-800">
                      Included with Dry Rental
                    </span>
                  ) : (
                    <span className="text-xs text-stone-500 font-mono">
                      Add-on Specialty Rental
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
