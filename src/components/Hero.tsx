import React from 'react';
import { ArrowDown, Calendar, Sparkles } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePortfolio }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Unboxed kicker with typographic separator */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium mb-6">
                <span>Manhattan Studio 4B</span>
                <span aria-hidden="true">·</span>
                <span>Daylight &amp; Analog Atelier</span>
                <span aria-hidden="true">·</span>
                <span>Est. 2014</span>
              </div>

              {/* Main Headline with balanced wrap */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-normal text-stone-950 leading-[1.08] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
                Where <span className="italic font-normal">Pure Light</span> Meets the Texture of <span className="italic font-normal">Silver Grain</span>.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed mb-10 max-w-xl">
                A sun-drenched loft designed for editorial portraiture, fashion lookbooks, and high-fidelity commercial still life. Built with a 22-foot wrap-around cyclorama, continuous north daylight, and medium format fidelity.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={onOpenBooking}
                  className="group px-7 py-4 text-xs font-semibold tracking-widest uppercase text-white bg-stone-950 hover:bg-stone-800 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap active:translate-y-px flex items-center gap-3 border border-stone-800"
                >
                  <Calendar className="w-4 h-4 text-stone-300 group-hover:text-white transition-colors" />
                  <span>Reserve Studio Time</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 group-hover:bg-white transition-colors ml-0.5" />
                </button>
                <button
                  onClick={onExplorePortfolio}
                  className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-800 bg-stone-200/70 hover:bg-stone-300/80 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  <span>Explore Portfolio</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quiet metadata footer note */}
            <div className="pt-6 border-t border-stone-200 text-xs text-stone-500 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Full grip package included</span>
              <span aria-hidden="true">·</span>
              <span>Available for shoots &amp; private hires</span>
              <span aria-hidden="true">·</span>
              <span>Freight elevator dock access</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-6 relative flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[420px] rounded-sm overflow-hidden bg-stone-200 shadow-md group">
              <img
                src={STUDIO_DETAILS.heroImage}
                alt="Aperture & Grain daylight loft studio with cyclorama wall and softbox lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft gradient scrim at base for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent pointer-events-none" />

              {/* Quiet photographic caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between pointer-events-none">
                <div>
                  <p className="text-xs uppercase tracking-wider font-mono text-stone-300">Studio A — Main Daylight Stage</p>
                  <p className="text-sm font-serif font-light text-stone-100">1,400 sq. ft · Wrap-around North cyclorama</p>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-mono text-stone-300">Natural Light 8:30am–5:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Studio Metric Strip (Tabular Numerals below hero split) */}
        <div className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-medium text-stone-950 tabular-nums">
              1,400
              <span className="text-lg font-sans font-light text-stone-500 ml-1">sq ft</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Usable Floor Area</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-serif font-medium text-stone-950 tabular-nums">
              14.5
              <span className="text-lg font-sans font-light text-stone-500 ml-1">ft</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Exposed Timber Ceilings</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-serif font-medium text-stone-950 tabular-nums">
              22
              <span className="text-lg font-sans font-light text-stone-500 ml-1">ft</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Infinity Cyclorama</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-serif font-medium text-stone-950 tabular-nums">
              48
              <span className="text-lg font-sans font-light text-stone-500 ml-1">hrs</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Proof Sheet Turnaround</p>
          </div>
        </div>
      </div>
    </section>
  );
};
