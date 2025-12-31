
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MEDICAL_SCANS } from '../../constants';
import { useCartStore } from '../../store/cartStore';

export default function ScanDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { scanId?: string } | null;
  const scanId = state?.scanId || 'ms1';
  const scan = MEDICAL_SCANS.find(s => s.id === scanId) || MEDICAL_SCANS[0];

  const [selectedVariant, setSelectedVariant] = useState(scan.variants[0]);
  const [selectedSlot, setSelectedSlot] = useState(scan.variants[0].nextSlot?.split(', ')[1] || '10:30 AM');
  const addToCart = useCartStore((state) => state.addToCart);

  // Update slots if variant changes
  useEffect(() => {
     if(selectedVariant.nextSlot) {
        setSelectedSlot(selectedVariant.nextSlot.split(', ')[1]);
     }
  }, [selectedVariant]);

  const slots = ['10:30 AM', '11:00 AM', '02:15 PM', '04:30 PM'];

  const handleBook = () => {
    // We can add to cart, but for scans usually it's direct booking.
    // For consistency with lab, let's add to cart or go to booking.
    // The "ScanBooking" page expects to just flow through. 
    // In a real app we would pass selected data to the booking page.
    navigate('/scans/booking');
  };

  return (
    <div className="bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-white min-h-screen flex flex-col relative overflow-x-hidden font-sans pb-32">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center px-4 py-3 justify-between h-16">
          <button 
            onClick={() => navigate(-1)}
            aria-label="Go Back" 
            className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight flex-1 text-center pr-10">Scan Details</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-5 px-4 pt-5">
        {/* Scan Info Card */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white">{scan.name}</h2>
            <span className="bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">{scan.category}</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed mt-2">
            {scan.description}
          </p>
        </section>

        {/* Preparation Guide */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">medical_information</span>
            Preparation
          </h3>
          <div className="flex flex-col gap-4">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/20 shrink-0 size-12 text-orange-600 dark:text-orange-400">
                <span className="material-symbols-outlined">no_food</span>
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-slate-900 dark:text-white">Fasting</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Ask doctor (Usually 4h)</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20 shrink-0 size-12 text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined">checkroom</span>
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-slate-900 dark:text-white">Clothing</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Wear loose, cotton clothes</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 shrink-0 size-12 text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined">watch_off</span>
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-slate-900 dark:text-white">No Metal</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Remove jewelry & accessories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Centers List */}
        <section>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pl-1">Select Center</h3>
          <div className="flex flex-col gap-4">
            {scan.variants.map((variant) => {
              const isSelected = selectedVariant.centerId === variant.centerId;
              return (
                <div 
                  key={variant.centerId}
                  onClick={() => setSelectedVariant(variant)}
                  className={`relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border transition-all cursor-pointer ${
                    isSelected 
                    ? 'border-2 border-primary ring-1 ring-primary/10' 
                    : 'border-slate-100 dark:border-slate-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">SELECTED</div>
                  )}
                  
                  <div className="flex gap-4 items-start">
                    <div className="size-20 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden relative p-2 flex items-center justify-center">
                      <img 
                        alt={variant.centerName} 
                        className={`w-full h-full object-contain transition-all ${!isSelected && 'grayscale group-hover:grayscale-0'}`} 
                        src={variant.centerImage} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white truncate">{variant.centerName}</h4>
                        {variant.nabl && <span className="material-symbols-outlined filled text-blue-500 text-[18px]">verified</span>}
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-2">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        <span className="truncate">{variant.distance} • {variant.reportTime} Report</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xl font-bold text-secondary">₹{variant.price}</span>
                        {isSelected ? (
                          <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-medium">
                             {variant.rating} ★
                          </span>
                        ) : (
                          <button className="text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">Select</button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Time Slots for Selected Center */}
                  {isSelected && (
                    <>
                      <div className="h-px bg-slate-100 dark:bg-slate-700 w-full my-4"></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Next Available Slot: {variant.nextSlot}</p>
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                          {slots.map((slot) => (
                            <button 
                              key={slot}
                              onClick={(e) => { e.stopPropagation(); setSelectedSlot(slot); }}
                              className={`shrink-0 flex flex-col items-center justify-center min-w-[80px] h-[64px] rounded-lg transition-transform active:scale-95 border ${
                                selectedSlot === slot 
                                ? 'bg-primary text-white shadow-md border-primary' 
                                : 'bg-white dark:bg-gray-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 hover:border-primary/50'
                              }`}
                            >
                              <span className="text-sm font-bold">{slot.split(' ')[0]}</span>
                              <span className={`text-[10px] uppercase ${selectedSlot === slot ? 'opacity-90' : 'text-slate-500'}`}>{slot.split(' ')[1]}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Trust Indicators */}
        <div className="flex justify-center gap-6 py-4 opacity-70 grayscale">
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-slate-400">security</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-slate-400">verified_user</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Verified</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-slate-400">support_agent</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">24/7 Help</span>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-4 z-50 pb-6">
        <div className="flex items-center gap-4 max-w-md mx-auto w-full">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Total Pay</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">₹{selectedVariant.price}</span>
              <span className="text-sm text-slate-400 line-through">₹{selectedVariant.mrp}</span>
            </div>
          </div>
          <button 
            onClick={handleBook}
            className="flex-1 bg-primary hover:bg-primary-dark text-white h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Book Appointment
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
