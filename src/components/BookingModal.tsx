import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ChevronRight, FileText, Phone, Mail, User } from 'lucide-react';
import { SERVICE_PACKAGES, STUDIO_SPACES, ADD_ONS, STUDIO_DETAILS } from '../data/studioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedSpaceId?: string;
  preselectedAddOns?: string[];
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedSpaceId,
  preselectedAddOns = []
}) => {
  const [serviceId, setServiceId] = useState<string>(preselectedServiceId || 'pkg-lookbook');
  const [spaceId, setSpaceId] = useState<string>(preselectedSpaceId || 'studio-a');
  const [date, setDate] = useState<string>('2026-11-14');
  const [timeSlot, setTimeSlot] = useState<string>('full-day');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(preselectedAddOns);
  
  // Contact details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [brand, setBrand] = useState('');
  const [notes, setNotes] = useState('');

  // Confirmation state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const currentService = SERVICE_PACKAGES.find((s) => s.id === serviceId) || SERVICE_PACKAGES[0];
  const currentSpace = STUDIO_SPACES.find((sp) => sp.id === spaceId) || STUDIO_SPACES[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addOnsCost = selectedAddOns.reduce((total, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return total + (item ? item.price : 0);
  }, 0);

  const totalCost = currentService.price + addOnsCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `AG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(randomCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setBrand('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-stone-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-stone-50 border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-wider text-stone-500">
              Aperture &amp; Grain · Production Booking
            </div>
            <h3 className="text-xl font-serif text-stone-900 font-medium">
              {isSubmitted ? 'Reservation Confirmed' : 'Reserve Studio Session'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 rounded hover:bg-stone-200/60 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-stone-900 text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-stone-500 mb-1">
                Booking Reference
              </div>
              <div className="text-2xl font-mono font-bold text-stone-900">{confirmationCode}</div>
            </div>

            <div className="text-left bg-stone-50 border border-stone-200 p-6 space-y-3 text-xs text-stone-700">
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Production Tier:</span>
                <span className="font-semibold">{currentService.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Selected Space:</span>
                <span className="font-semibold">{currentSpace.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Scheduled Date:</span>
                <span className="font-mono font-medium">{date} · {timeSlot.toUpperCase()}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Client / Brand:</span>
                <span className="font-semibold">{name} {brand ? `(${brand})` : ''}</span>
              </div>
              <div className="flex justify-between pt-1 font-semibold text-stone-900">
                <span>Estimated Total:</span>
                <span className="font-mono text-base tabular-nums">${totalCost}</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed font-light">
              A calendar invite and equipment check-in sheet have been dispatched to <strong>{email || 'your email'}</strong>. Our studio coordinator will reach out within 2 hours to confirm loading dock details.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-stone-900 hover:bg-stone-800 text-white transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
            {/* Step 1: Package & Space Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800 mb-3">
                1. Select Production Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SERVICE_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setServiceId(pkg.id)}
                    className={`p-3 text-left border text-xs transition-all cursor-pointer ${
                      serviceId === pkg.id
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

            {/* Step 2: Date & Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800 mb-2">
                  2. Requested Shoot Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    min="2026-11-04"
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs border border-stone-300 bg-white focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800 mb-2">
                  Time Slot Preference
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs border border-stone-300 bg-white focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                >
                  <option value="full-day">Full Day (8:30 AM – 5:30 PM)</option>
                  <option value="morning">Morning Half-Day (8:30 AM – 12:30 PM)</option>
                  <option value="afternoon">Afternoon Golden Hour (1:30 PM – 6:30 PM)</option>
                  <option value="evening">Evening Controlled Strobe (6:30 PM – 10:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Add-ons checklist */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800 mb-3">
                3. Optional Production Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-2.5 text-left border rounded text-xs flex items-center justify-between transition-colors ${
                        isChecked
                          ? 'border-stone-900 bg-stone-50 font-medium'
                          : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <span>{addon.name}</span>
                      <span className="font-mono text-stone-500 ml-2 shrink-0">+${addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact & Brief */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800 mb-3">
                4. Production Contact &amp; Brief
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:outline-none focus:border-stone-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:outline-none focus:border-stone-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:outline-none focus:border-stone-900"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Brand / Magazine / Agency (Optional)"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:outline-none focus:border-stone-900"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us about the project, mood, number of looks, or special rigging needs..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 focus:outline-none focus:border-stone-900"
                />
              </div>
            </div>

            {/* Live Total & Submit */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-stone-900 text-left w-full sm:w-auto">
                <span className="text-xs uppercase tracking-wider text-stone-500 block">Estimated Cost:</span>
                <span className="text-2xl font-serif font-bold tabular-nums">${totalCost}</span>
                <span className="text-[11px] text-stone-500 ml-2">No deposit required for initial hold</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-3 text-xs uppercase tracking-wider font-semibold text-stone-600 hover:text-stone-950 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-7 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
                >
                  Request Reservation
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
