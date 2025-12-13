
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PHYSIO_SERVICES } from '../../constants';

export default function PhysioList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark font-sans text-slate-900 dark:text-white pb-24">
      {/* Sticky Header Group */}
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold leading-tight flex-1 ml-3">Physiotherapy</h1>
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-primary text-white shadow-sm transition-transform active:scale-95 text-xs font-bold">All</button>
          <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs font-bold">Home Visit</button>
          <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs font-bold">Clinic Visit</button>
          <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs font-bold">Rehab</button>
        </div>
      </div>

      {/* Main Content List */}
      <div className="flex flex-col gap-4 p-4">
        {PHYSIO_SERVICES.map(service => (
          <div key={service.id} className="flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-md cursor-pointer active:scale-[0.99]" onClick={() => navigate(`/physiotherapy/${service.id}`)}>
            <div className="w-full h-48 bg-cover bg-center relative" style={{backgroundImage: `url('${service.image}')`}}>
              {service.plans && service.plans.length > 0 && (
                <div className="absolute top-3 left-3 bg-secondary text-white px-2 py-1 rounded-md text-[10px] font-bold shadow-sm">
                  PACKAGES AVAILABLE
                </div>
              )}
              {service.homeVisitAvailable && (
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-sm">home_health</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Home Visit</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-col p-4 gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-normal line-clamp-2">{service.description}</p>
              </div>
              
              <div className="flex items-center gap-4 py-2 border-t border-b border-gray-100 dark:border-gray-700 my-1">
                <div className="flex items-center gap-1.5 text-secondary dark:text-teal-400">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  <span className="text-sm font-semibold">{service.duration}</span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-1.5 text-primary dark:text-blue-400">
                  <span className="material-symbols-outlined text-lg">sell</span>
                  <span className="text-sm font-semibold">Starts ₹{service.price}</span>
                </div>
              </div>
              
              <button 
                className="w-full h-12 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:bg-blue-600 active:scale-95 transition-all"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
