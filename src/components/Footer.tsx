import React, { useState } from 'react';
import { STUDIO_DETAILS } from '../data/studioData';
import { ArrowUpRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-serif font-bold text-white tracking-tight">
              Aperture &amp; Grain
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Daylight photography and darkroom atelier serving commercial, fashion, and editorial creators worldwide. Built for pure natural light and silver gelatin craftsmanship.
            </p>
            <div className="text-xs text-stone-500 font-mono space-y-1">
              <div>{STUDIO_DETAILS.address}</div>
              <div>{STUDIO_DETAILS.phone} · {STUDIO_DETAILS.email}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white">
              Studio Navigation
            </h4>
            <ul className="text-xs space-y-2 text-stone-400">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Portfolio</a></li>
              <li><a href="#spaces" className="hover:text-white transition-colors">Studio A &amp; B Specifications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Production Packages &amp; Rates</a></li>
              <li><a href="#equipment" className="hover:text-white transition-colors">Lighting &amp; Grip Locker</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Resident Photographers</a></li>
            </ul>
          </div>

          {/* Newsletter / Studio Journal */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white">
              Studio Dispatch &amp; Open Calls
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Subscribe to receive quarterly print monographs, open daylight slots, and guest artist workshops.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono pt-2">
                <Check className="w-4 h-4" />
                <span>Thank you. You’re on the studio dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3 py-2.5 focus:outline-none focus:border-stone-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-stone-200 hover:bg-white text-stone-950 font-semibold px-4 py-2.5 text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quiet copyright & metadata bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Aperture &amp; Grain Studio Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Terms of Production</span>
            <span aria-hidden="true">·</span>
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Studio Rules</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
