import React from 'react';
import { MedicalScan } from '../../types';

interface ScanCardProps {
  scan: MedicalScan;
  onClick: () => void;
}

export const ScanCard: React.FC<ScanCardProps> = ({ scan, onClick }) => {
  return (
    <div onClick={onClick} className="min-w-[140px] w-[140px] bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-soft border border-gray-100 dark:border-gray-700 cursor-pointer hover:border-primary/30 transition-all active:scale-95 group snap-start">
       <div className="h-24 rounded-xl bg-slate-50 dark:bg-gray-700/50 flex items-center justify-center relative overflow-hidden mb-2">
          {/* Decorative Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 bg-white/60 dark:bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
          </div>
          <img src={scan.image} alt={scan.name} className="w-12 h-12 object-contain relative z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-sm" />
       </div>
       <div className="px-1 text-center pb-1">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 h-8 leading-tight mb-1">{scan.name}</h3>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase tracking-wide">Starts @</span>
            <span className="text-sm font-bold text-primary">₹{scan.price}</span>
          </div>
       </div>
    </div>
  );
};