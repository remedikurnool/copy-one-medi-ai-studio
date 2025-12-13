
import React from 'react';
import { Medicine } from '../../types';
import { useCartStore } from '../../store/cartStore';
import { triggerCartAnimation } from '../ui/FlyingCartAnimation';
import { LazyImage } from '../ui/LazyImage';

interface MedicineCardProps {
  medicine: Medicine;
  onClick: () => void;
}

export const MedicineCard: React.FC<MedicineCardProps> = ({ medicine, onClick }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerCartAnimation(e, medicine.image);
    addToCart({
      id: medicine.id,
      type: 'medicine',
      name: medicine.name,
      price: medicine.price,
      mrp: medicine.mrp,
      image: medicine.image,
      packSize: medicine.packSize,
      qty: 1,
      discount: medicine.discount,
      isPrescriptionRequired: medicine.isPrescriptionRequired
    });
  };

  return (
    <div onClick={onClick} className="min-w-[160px] w-[160px] bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-soft border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-all group flex flex-col h-full snap-start active:scale-95">
      {/* Image Area */}
      <div className="relative h-32 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center mb-3 p-2 overflow-hidden group-hover:bg-blue-50 dark:group-hover:bg-gray-600 transition-colors">
        <LazyImage 
          src={medicine.image} 
          alt={medicine.name} 
          wrapperClassName="h-full w-full flex items-center justify-center"
          className="h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-500" 
        />
        {medicine.discount && (
          <div className="absolute top-0 left-0 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-tl-lg shadow-sm z-20">
            {medicine.discount}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight mb-1 h-9">{medicine.name}</h3>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2 truncate font-medium">{medicine.packSize}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
             <span className="text-xs text-gray-400 line-through leading-none decoration-gray-300">₹{medicine.mrp}</span>
             <span className="text-base font-bold text-slate-900 dark:text-white">₹{medicine.price}</span>
          </div>
          <button 
            onClick={handleAdd}
            className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm active:scale-90"
          >
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
