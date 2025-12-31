
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { useLocationStore } from '../../store/locationStore';
import MegaMenu from './MegaMenu';
import LocationModal from './LocationModal';

export default function DesktopHeader() {
  const navigate = useNavigate();
  const cartItemsCount = useCartStore((state) => state.items.length);
  const { city } = useLocationStore();
  
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <>
    <LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 hidden lg:block">
      {/* Top Utility Bar */}
      <div className="bg-primary/5 dark:bg-gray-800 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium text-gray-500 dark:text-gray-400">
            <div className="flex gap-4">
                <span>Call: 94296-90055</span>
                <span className="hidden xl:inline">Emergency Ambulance: 108</span>
            </div>
            <div className="flex gap-4">
                <Link to="/profile/help" className="hover:text-primary">Help Center</Link>
                <Link to="/admin" className="hover:text-primary">Partner with us</Link>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
               <span className="material-symbols-outlined text-2xl">local_hospital</span>
            </div>
            <div className="flex flex-col">
               <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">ONE MEDI</h1>
               <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Superapp</span>
            </div>
        </Link>

        {/* Navigation & Search Area */}
        <div className="flex-1 flex items-center gap-4 max-w-3xl">
            {/* Mega Menu Trigger */}
            <div className="relative group" onMouseEnter={() => setIsMegaMenuOpen(true)}>
                <button 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${isMegaMenuOpen ? 'bg-gray-100 dark:bg-gray-800 text-primary' : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-slate-700 dark:text-white'}`}
                >
                    <span className="material-symbols-outlined">grid_view</span>
                    All Services
                    <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isMegaMenuOpen ? '-rotate-180' : ''}`}>expand_more</span>
                </button>
                {isMegaMenuOpen && <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />}
            </div>

            {/* Global Search */}
            <div className="flex-1 relative">
                <div className="flex items-center w-full h-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                    <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
                    <input 
                        type="text" 
                        placeholder="Search medicines, doctors, labs..." 
                        className="w-full bg-transparent border-none focus:ring-0 text-sm ml-2 placeholder:text-gray-400 dark:text-white"
                    />
                    <div className="hidden xl:flex text-[10px] font-bold text-gray-400 border border-gray-200 dark:border-gray-600 px-1.5 py-0.5 rounded">⌘K</div>
                </div>
            </div>

            {/* Location Selector */}
            <button 
                onClick={() => setIsLocationModalOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-xl transition-colors whitespace-nowrap"
            >
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-gray-400">Location</span>
                    <span className="font-bold">{city}</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-sm">expand_more</span>
            </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
            <button onClick={() => navigate('/notifications')} className="size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-300 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
            </button>
            <button onClick={() => navigate('/profile')} className="size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-300 transition-colors">
                <span className="material-symbols-outlined">person</span>
            </button>
            <button 
                onClick={() => navigate('/cart')}
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                <span>Cart</span>
                {cartItemsCount > 0 && (
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">{cartItemsCount}</span>
                )}
            </button>
        </div>
      </div>
    </header>
    </>
  );
}
