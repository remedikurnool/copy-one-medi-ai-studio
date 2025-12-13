import React from 'react';
import { LabTest } from '../../types';

interface LabTestCardProps {
  test: LabTest;
  onClick: () => void;
}

export const LabTestCard: React.FC<LabTestCardProps> = ({ test, onClick }) => {
  return (
    <div onClick={onClick} className="min-w-[260px] bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-soft border border-teal-100 dark:border-teal-900/30 cursor-pointer hover:shadow-lg transition-all active:scale-[0.98] relative overflow-hidden group snap-start">
       {/* Decorative Element */}
       <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 dark:bg-teal-900/20 rounded-bl-full -mr-6 -mt-6 z-0 transition-transform group-hover:scale-110"></div>
       
       <div className="relative z-10 flex flex-col h-full">
         <div className="flex justify-between items-start mb-3">
            <div className="size-10 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm">
               <span className="material-symbols-outlined">biotech</span>
            </div>
            {test.discount && <span className="text-[10px] font-bold text-white bg-secondary px-2 py-0.5 rounded-full shadow-sm">{test.discount}</span>}
         </div>
         
         <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight mb-1 line-clamp-1">{test.name}</h3>
         <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mb-4 font-medium">{test.parameterCount} Parameters • {test.reportTime}</p>
         
         <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
            <div className="flex items-baseline gap-1.5">
               <span className="text-lg font-bold text-slate-900 dark:text-white">₹{test.price}</span>
               <span className="text-xs text-gray-400 line-through font-medium">₹{test.mrp}</span>
            </div>
            <button className="text-xs font-bold text-white bg-primary px-3 py-1.5 rounded-lg shadow-sm shadow-primary/20 group-hover:bg-primary-dark transition-colors">
               Book
            </button>
         </div>
       </div>
    </div>
  );
};