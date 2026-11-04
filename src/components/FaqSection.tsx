import React, { useState } from 'react';
import { FAQS, STUDIO_DETAILS } from '../data/studioData';
import { ChevronDown, MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Studio Location & Directions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
                Studio Location &amp; Access
              </div>
              <h2 className="text-3xl font-serif text-stone-950 font-normal mb-4">
                Visit the Studio.
              </h2>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Located on the 4th floor of a landmark 1920s brick factory building, minutes from express subway lines with direct street-level loading.
              </p>
            </div>

            <div className="space-y-4 text-xs text-stone-700 bg-white border border-stone-200 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Address</div>
                  <div className="text-stone-600">{STUDIO_DETAILS.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Operating Hours</div>
                  <div className="text-stone-600">{STUDIO_DETAILS.hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Transit &amp; Parking</div>
                  <div className="text-stone-600">
                    A/B/C/D subway to 125th St (3 min walk) · Commercial loading dock on 126th St with 24/7 attendant.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-serif text-stone-950 font-normal mb-8">
              Production Details &amp; Policies.
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-stone-200 bg-white overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-medium text-stone-900 font-sans">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
