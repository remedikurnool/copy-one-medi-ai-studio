
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LAB_TESTS } from '../../constants';
import { useLocationStore } from '../../store/locationStore';
import LocationModal from '../../components/ui/LocationModal';

const CategoryItem = ({ icon, label, colorClass, iconColor }: { icon: string, label: string, colorClass: string, iconColor: string }) => (
  <button className="flex flex-col items-center gap-2 group">
    <div className={`size-16 rounded-2xl ${colorClass} flex items-center justify-center border group-active:scale-95 transition-transform duration-200 shadow-sm`}>
      <span className={`material-symbols-outlined text-3xl ${iconColor}`}>{icon}</span>
    </div>
    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center leading-tight">{label}</span>
  </button>
);

export default function LabTestList() {
  const navigate = useNavigate();
  const { city } = useLocationStore();
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredTests = LAB_TESTS.filter(test => 
    test.name.toLowerCase().includes(search.toLowerCase()) || 
    test.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-white pb-28 font-sans relative overflow-x-hidden selection:bg-primary selection:text-white">
      <LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />

      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
        <div className="flex items-center justify-between p-4 h-16">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full text-primary cursor-pointer hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</span>
              <div 
                onClick={() => setIsLocationModalOpen(true)}
                className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
              >
                <h1 className="text-lg font-bold leading-none text-slate-900 dark:text-white">{city || 'Kurnool'}, AP</h1>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/cart')} 
            className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 text-2xl">shopping_cart</span>
          </button>
        </div>
      </header>

      {/* Search Section */}
      <div className="px-4 pt-6 pb-2">
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100 px-1">Book Lab Tests</h2>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-xl group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-12 pr-4 h-12 rounded-xl border-none bg-white dark:bg-gray-800 shadow-[0_4px_16px_rgb(0,0,0,0.04)] dark:shadow-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary focus:outline-none text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
            placeholder="Search for tests (e.g., CBC, Sugar)" 
            type="text"
          />
        </div>
      </div>

      {/* Trust Banner */}
      <div className="px-4 py-4">
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 rounded-lg p-3 flex items-center justify-center gap-4 shadow-sm">
          <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400">
            <span className="material-symbols-outlined text-lg filled">verified_user</span>
            <span className="text-xs font-bold uppercase tracking-wide">NABL Accredited</span>
          </div>
          <div className="w-px h-4 bg-teal-200 dark:bg-teal-700"></div>
          <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400">
            <span className="material-symbols-outlined text-lg filled">home_health</span>
            <span className="text-xs font-bold uppercase tracking-wide">Safe Home Collection</span>
          </div>
        </div>
      </div>

      {/* Categories Grid - Static for visual appeal, could be dynamic */}
      <section className="mt-2">
        <div className="flex items-center justify-between px-5 pb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Browse by Category</h3>
          <button className="text-primary font-medium text-sm hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-3 px-4">
          <CategoryItem icon="hematology" label="CBC" colorClass="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800" iconColor="text-primary" />
          <CategoryItem icon="water_drop" label="Diabetes" colorClass="bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800" iconColor="text-secondary" />
          <CategoryItem icon="medical_services" label="Thyroid" colorClass="bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800" iconColor="text-indigo-600 dark:text-indigo-400" />
          <CategoryItem icon="cardiology" label="Heart" colorClass="bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800" iconColor="text-rose-500 dark:text-rose-400" />
        </div>
      </section>

      {/* Popular Packages Slider */}
      <section className="mt-8 mb-6">
        <div className="flex items-center justify-between px-5 mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">All Lab Tests</h3>
        </div>
        <div className="flex flex-col gap-4 px-4">
          {filteredTests.map((test) => (
            <div 
              key={test.id} 
              onClick={() => navigate(`/lab-tests/${test.id}`)}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wide">{test.discount}</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{test.name}</h4>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-medium px-2 py-0.5 rounded">{test.parameterCount} Tests</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[200px]">{test.description}</span>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-through">₹{test.mrp}</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">₹{test.price}</p>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all">
                   Book Now
                </button>
              </div>
            </div>
          ))}
          {filteredTests.length === 0 && (
             <div className="text-center py-10 text-gray-400">
                <p>No tests found.</p>
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
