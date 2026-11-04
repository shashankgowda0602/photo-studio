import React, { useState } from 'react';
import { SERVICE_PACKAGES, ADD_ONS } from '../data/studioData';
import { Check, Plus, Calculator, ArrowRight } from 'lucide-react';

interface PricingCalculatorProps {
  onSelectPackage: (packageId: string, addOns?: string[]) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectPackage }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-lookbook');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['express']);

  const currentPackage = SERVICE_PACKAGES.find((p) => p.id === selectedPackageId) || SERVICE_PACKAGES[0];

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = ADD_ONS.find((a) => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = currentPackage.price + addOnsTotal;

  return (
    <section id="services" className="py-20 md:py-28 bg-stone-100/50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
            Services &amp; Commission Rates
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-950 font-normal mb-4">
            Transparent Production Packages.
          </h2>
          <p className="text-base text-stone-600 font-light leading-relaxed">
            Every commissioned tier includes full post-production color grading, master retouching, and non-exclusive commercial usage. No surprise line items.
          </p>
        </div>

        {/* 3 Main Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white border p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'border-stone-900 shadow-md relative'
                  : 'border-stone-200 hover:border-stone-400'
              }`}
            >
              <div>
                {/* Quiet popular label if applicable */}
                {pkg.isPopular && (
                  <div className="text-[11px] font-mono uppercase tracking-widest text-stone-900 font-semibold mb-3">
                    Most Requested Production
                  </div>
                )}

                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-xl font-serif text-stone-900">{pkg.name}</h3>
                </div>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-serif font-medium text-stone-950 tabular-nums">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-stone-500 ml-2 font-mono">/ {pkg.duration}</span>
                </div>

                <p className="text-xs text-stone-600 font-light mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-stone-100 mb-8">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-900">
                    What’s Included:
                  </p>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-600">
                      <Check className="w-3.5 h-3.5 text-stone-900 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-stone-500 italic mb-4">
                  Best for: {pkg.bestFor}
                </p>
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3 text-xs font-semibold tracking-wider uppercase transition-colors text-center cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-stone-900 hover:bg-stone-800 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-900'
                  }`}
                >
                  Book {pkg.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Custom Quote Calculator Panel */}
        <div className="bg-white border border-stone-200 p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
            <Calculator className="w-5 h-5 text-stone-800" />
            <div>
              <h3 className="text-xl font-serif text-stone-950">Interactive Rate Estimator</h3>
              <p className="text-xs text-stone-500">
                Tailor a bespoke package with studio hours and specialized crew add-ons.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Package Selection & Add-Ons */}
            <div className="lg:col-span-8 space-y-6">
              {/* Step 1: Base Tier */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800 mb-3">
                  1. Select Base Production or Space
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SERVICE_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-3.5 text-left border rounded text-xs transition-all cursor-pointer ${
                        selectedPackageId === pkg.id
                          ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-semibold text-stone-900">{pkg.name}</div>
                      <div className="text-stone-500 font-mono mt-1">${pkg.price} · {pkg.duration}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Add-Ons */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800 mb-3">
                  2. Choose Optional Studio Add-Ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADD_ONS.map((addon) => {
                    const isSelected = selectedAddOns.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 text-left border rounded text-xs flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'border-stone-900 bg-stone-50/80 text-stone-950 font-medium'
                            : 'border-stone-200 text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        <div className="pr-2">
                          <div>{addon.name}</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-mono text-stone-500">+${addon.price}</span>
                          <span
                            className={`w-4 h-4 rounded-sm flex items-center justify-center border text-[10px] ${
                              isSelected
                                ? 'bg-stone-900 text-white border-stone-900'
                                : 'border-stone-300'
                            }`}
                          >
                            {isSelected ? '✓' : ''}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Real-time Live Price Summary Box */}
            <div className="lg:col-span-4 bg-stone-50 border border-stone-200 p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 mb-4 pb-2 border-b border-stone-200">
                  Estimated Summary
                </h4>

                <div className="space-y-2 text-xs text-stone-600 mb-6">
                  <div className="flex justify-between">
                    <span className="truncate pr-2">{currentPackage.name}</span>
                    <span className="font-mono text-stone-900 tabular-nums">${currentPackage.price}</span>
                  </div>

                  {selectedAddOns.map((id) => {
                    const item = ADD_ONS.find((a) => a.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="flex justify-between text-stone-500">
                        <span className="truncate pr-2">+ {item.name.split('(')[0]}</span>
                        <span className="font-mono tabular-nums">${item.price}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-baseline justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-900">Total Estimate</span>
                  <span className="text-3xl font-serif font-bold text-stone-950 tabular-nums">
                    ${grandTotal}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectPackage(selectedPackageId, selectedAddOns)}
                className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book With This Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
