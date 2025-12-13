import React from 'react';
import { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
  onClick: () => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onClick }) => {
  return (
    <div onClick={onClick} className="min-w-[280px] bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-soft border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-all active:scale-[0.99] flex gap-4 items-center snap-start group">
       <div className="relative shrink-0">
          <div className="size-16 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-md group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('${doctor.image}')`}}></div>
          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5 shadow-sm">
             <div className="bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                {doctor.rating} <span className="material-symbols-outlined text-[10px] filled">star</span>
             </div>
          </div>
       </div>
       
       <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base text-slate-900 dark:text-white truncate">{doctor.name}</h3>
          <p className="text-xs text-primary font-bold truncate mb-0.5">{doctor.specialty}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate mb-2">{doctor.qualification} • {doctor.experience}</p>
          
          <div className="flex items-center justify-between">
             <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">₹{doctor.fee}</span>
             <button className="text-xs font-bold text-primary hover:underline">
                Book Visit
             </button>
          </div>
       </div>
    </div>
  );
};