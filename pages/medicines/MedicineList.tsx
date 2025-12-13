
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MEDICINES } from '../../constants';
import { useCartStore } from '../../store/cartStore';
import { triggerCartAnimation } from '../../components/ui/FlyingCartAnimation';
import { PrescriptionPromo } from '../../components/ui/PrescriptionPromo';

// Visual Categories Data
const CATEGORY_GRID = [
  { name: 'Personal Care', icon: 'https://cdn-icons-png.flaticon.com/128/3050/3050154.png', filter: 'Personal Care', color: 'bg-pink-50 text-pink-600' },
  { name: 'Skin & Hair', icon: 'https://cdn-icons-png.flaticon.com/128/6995/6995874.png', filter: 'Skin', color: 'bg-purple-50 text-purple-600' },
  { name: 'Pain Killers', icon: 'https://cdn-icons-png.flaticon.com/128/3004/3004458.png', filter: 'Pain Relief', color: 'bg-red-50 text-red-600' },
  { name: 'Diabetes', icon: 'https://cdn-icons-png.flaticon.com/128/2857/2857753.png', filter: 'Diabetes', color: 'bg-blue-50 text-blue-600' },
  { name: 'Nutrition', icon: 'https://cdn-icons-png.flaticon.com/128/994/994928.png', filter: 'Supplements', color: 'bg-green-50 text-green-600' },
  { name: 'OTC', icon: 'https://cdn-icons-png.flaticon.com/128/3021/3021870.png', filter: 'OTC', color: 'bg-orange-50 text-orange-600' },
  { name: 'Hospital Needs', icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966334.png', filter: 'Hospital', color: 'bg-cyan-50 text-cyan-600' },
  { name: 'Baby Care', icon: 'https://cdn-icons-png.flaticon.com/128/2917/2917629.png', filter: 'Baby', color: 'bg-yellow-50 text-yellow-600' },
];

export default function MedicineList() {
  const navigate = useNavigate();
  const cartItemsCount = useCartStore((state) => state.items.length);
  const addToCart = useCartStore((state) => state.addToCart);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMedicines = MEDICINES.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase());
    // Fuzzy matching for category to handle "Nutrition" -> "Supplements" mapping implicitly if needed, or exact match from constants
    const matchesCategory = selectedCategory === 'All' || med.category.includes(selectedCategory) || (selectedCategory === 'Nutrition' && med.category === 'Supplements');
    return matchesSearch && matchesCategory;
  });

  const handleAdd = (e: React.MouseEvent, med: any) => {
    e.stopPropagation();
    triggerCartAnimation(e, med.image);
    addToCart({
      id: med.id,
      type: 'medicine',
      name: med.name,
      price: med.price,
      mrp: med.mrp,
      image: med.image,
      packSize: med.packSize,
      qty: 1,
      discount: med.discount,
      isPrescriptionRequired: med.isPrescriptionRequired
    });
  };

  const toggleCategory = (cat: string) => {
    if (selectedCategory === cat) {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(cat);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-light dark:bg-bg-dark font-sans text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
           <div className="flex items-center gap-3">
             <button onClick={() => navigate('/')} className="text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 -ml-2 rounded-full transition-colors">
               <span className="material-symbols-outlined text-2xl">arrow_back</span>
             </button>
             <h1 className="text-lg font-bold text-slate-900 dark:text-white">Medicines</h1>
           </div>
           <button id="cart-icon-target" onClick={() => navigate('/cart')} className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
             <span className="material-symbols-outlined text-2xl text-slate-900 dark:text-white">shopping_cart</span>
             {cartItemsCount > 0 && <span className="absolute top-1 right-1 flex items-center justify-center size-4 bg-red-500 rounded-full text-[10px] text-white font-bold">{cartItemsCount}</span>}
           </button>
        </div>
        
        {/* Search */}
        <div className="px-4 pb-3">
           <div className="flex w-full items-center rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 h-12 px-4 transition-all">
              <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
              <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 ml-2 text-base text-slate-900 dark:text-white placeholder:text-gray-400" 
                placeholder="Search medicines..." 
              />
           </div>
        </div>
      </header>

      {/* Visual Categories Grid */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-4 gap-y-4 gap-x-2">
          {CATEGORY_GRID.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => toggleCategory(cat.filter)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`size-16 rounded-2xl flex items-center justify-center transition-all duration-200 border-2 ${selectedCategory === cat.filter ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-md' : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm'} ${cat.color} bg-opacity-30 dark:bg-opacity-20`}>
                <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain mix-blend-multiply dark:mix-blend-normal" />
              </div>
              <span className={`text-[10px] font-bold text-center leading-tight max-w-[64px] ${selectedCategory === cat.filter ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Prescription Upload Promo */}
      <section className="px-4 mb-2">
        <PrescriptionPromo compact />
      </section>

      {/* Results Header */}
      <div className="px-4 pb-2 mt-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          {selectedCategory === 'All' ? 'All Medicines' : `${selectedCategory}`}
        </h2>
        {selectedCategory !== 'All' && (
          <button onClick={() => setSelectedCategory('All')} className="text-xs text-primary font-bold hover:underline">
            Clear Filter
          </button>
        )}
      </div>

      <main className="flex-1 p-4 pt-0 flex flex-col gap-4">
        {filteredMedicines.map((med) => (
          <div 
            key={med.id} 
            onClick={() => navigate(`/medicines/${med.id}`)}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4 relative cursor-pointer active:scale-[0.99] transition-transform"
          >
             {med.discount && (
               <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">{med.discount}</div>
             )}
             <div className="w-28 h-28 shrink-0 bg-white rounded-xl flex items-center justify-center p-2 border border-gray-100 dark:border-gray-700">
                <img src={med.image} alt={med.name} className="w-full h-full object-contain" />
             </div>
             <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-1 text-slate-900 dark:text-white line-clamp-2">{med.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{med.category} • {med.manufacturer}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs text-gray-400 dark:text-gray-500">{med.packSize}</p>
                    {med.isPrescriptionRequired && (
                      <span className="text-[10px] bg-red-50 dark:bg-red-900/20 text-red-500 px-1.5 py-0.5 rounded flex items-center gap-0.5 font-bold border border-red-100 dark:border-red-900/30">
                        <span className="material-symbols-outlined text-[10px]">prescription</span> Rx
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-end justify-between mt-2">
                   <div>
                     <p className="text-xl font-bold text-slate-900 dark:text-white">₹{med.price}</p>
                     <p className="text-xs text-gray-400 line-through">₹{med.mrp}</p>
                   </div>
                   <button 
                    onClick={(e) => handleAdd(e, med)}
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
                     ADD
                   </button>
                </div>
             </div>
          </div>
        ))}
        {filteredMedicines.length === 0 && (
          <div className="text-center py-10 text-gray-400 flex flex-col items-center">
             <div className="size-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
               <span className="material-symbols-outlined text-4xl text-gray-300">medication_liquid</span>
             </div>
             <p className="text-sm font-medium">No medicines found in this category.</p>
             <button onClick={() => setSelectedCategory('All')} className="mt-4 text-primary font-bold text-sm border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors">
               View All Medicines
             </button>
          </div>
        )}
      </main>
    </div>
  );
}
