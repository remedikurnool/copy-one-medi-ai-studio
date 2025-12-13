
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DIABETES_PACKAGES } from '../../constants';

// Mock data for diabetes product categories
const DIABETES_CATEGORIES = [
  { id: 'c1', title: 'Devices', icon: 'devices', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', link: '/medicines' },
  { id: 'c2', title: 'Medication', icon: 'medication', color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-900/20', link: '/medicines' },
  { id: 'c3', title: 'Mgmt Plans', icon: 'assignment', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', link: '/lab-tests' },
  { id: 'c4', title: 'Footwear', icon: 'do_not_step', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20', link: '/medicines' },
];

export default function DiabetesCare() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-bg-light dark:bg-bg-dark font-sans text-slate-900 dark:text-white pb-24">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 pb-2 border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-[28px]">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold leading-tight flex-1 text-center pr-12">Diabetes Care</h1>
      </div>

      <div className="flex-1">
        {/* Hero Card */}
        <div className="p-4">
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col">
              <div className="w-full h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJbdhRACaW7DnU7DDzTua8jo93nOtGxPZ0HqlB4NHw6V5xyPFTLwvqk6bWJoAirRyLaA7LpTmzMHmbgWCAi8TIM-xstpVT7e2YJ163mfnWEo-_3zP9xImuxPwaP_ftY4JBlRzi4fHTAWmUDD9rmjDPVxI-GJplhWEhutiQh25Cs68q165eK5JKJxnGZ13zEYgVxW0r2oOmYEm3dg3XLFkeaoKCstmMmX9Qa0Yg2S9AQNcoTsBf9bCC8xfv-4fSwK8oubf3dCIZ1OE")'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent h-48"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-white bg-secondary rounded-full">One Medi Care</span>
                  <h2 className="text-white text-2xl font-bold leading-tight shadow-black drop-shadow-md">Monitor. Control. Prevent.</h2>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <p className="text-gray-600 dark:text-gray-300 text-base font-medium">Manage your diabetes effectively with our comprehensive care plans.</p>
                <button onClick={() => navigate('/lab-tests')} className="w-full py-3.5 bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all rounded-xl text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                  <span>View Packages</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid (New Request) */}
        <div className="px-4 pb-4">
          <h3 className="text-xl font-bold mb-4 ml-1">Explore Categories</h3>
          <div className="grid grid-cols-4 gap-3">
            {DIABETES_CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => navigate(cat.link)}
                className="flex flex-col items-center gap-2"
              >
                <div className={`size-16 rounded-2xl flex items-center justify-center shadow-sm border border-transparent hover:border-gray-200 transition-all ${cat.bg}`}>
                  <span className={`material-symbols-outlined text-2xl ${cat.color}`}>{cat.icon}</span>
                </div>
                <span className="text-xs font-bold text-center text-slate-700 dark:text-gray-300 leading-tight">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="px-4 pb-2">
          <h3 className="text-xl font-bold mb-4 ml-1">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => navigate('/lab-tests')} className="relative flex flex-col items-center justify-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 active:scale-95 transition-transform h-32 group overflow-hidden">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">hematology</span>
              </div>
              <span className="text-base font-bold z-10">Book Tests</span>
            </button>
            <button onClick={() => navigate('/doctors')} className="relative flex flex-col items-center justify-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 active:scale-95 transition-transform h-32 group overflow-hidden">
              <div className="size-12 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <span className="text-base font-bold z-10">Consult Doctor</span>
            </button>
          </div>
        </div>

        {/* Packages */}
        <div className="pt-6 px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary">verified_user</span>
            <h3 className="text-xl font-bold">Diabetes Packages</h3>
          </div>
          <div className="flex flex-col gap-5">
            {DIABETES_PACKAGES.map((pkg, i) => (
              <div key={pkg.id} className={`p-5 rounded-2xl border shadow-sm relative overflow-hidden ${i === 0 ? 'bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-blue-100 dark:border-blue-900' : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700'}`}>
                {i === 0 && <div className="absolute -right-6 -top-6 size-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl"></div>}
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <div>
                    <h4 className="text-xl font-bold">{pkg.title}</h4>
                    <p className="text-gray-500 text-sm">{pkg.description}</p>
                  </div>
                  {pkg.isPopular && <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POPULAR</div>}
                </div>
                <div className="flex flex-col gap-2 my-4 relative z-10">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">₹{pkg.price}</span>
                    <span className="text-xs text-gray-500 line-through">₹{pkg.mrp}</span>
                  </div>
                  <button className={`${i === 0 ? 'bg-secondary hover:bg-teal-700 shadow-teal-500/20' : 'bg-gray-900 dark:bg-gray-700'} text-white px-6 py-2.5 rounded-xl font-bold shadow-lg active:scale-95 transition-all`}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips & Devices CTA */}
        <div className="pt-8 px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Recommended Devices</h3>
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-2">
            <div className="min-w-[200px] bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-3">
              <div className="size-16 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl text-gray-500">glucose</span>
              </div>
              <div className="text-center">
                <h5 className="font-bold text-sm">Glucometer Kit</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">₹850 onwards</p>
                <button className="mt-2 text-xs font-bold text-primary border border-primary/20 rounded-full px-3 py-1 hover:bg-primary hover:text-white transition-colors">View</button>
              </div>
            </div>
            <div className="min-w-[200px] bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-3">
              <div className="size-16 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl text-gray-500">do_not_step</span>
              </div>
              <div className="text-center">
                <h5 className="font-bold text-sm">Diabetic Footwear</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">₹1200 onwards</p>
                <button className="mt-2 text-xs font-bold text-primary border border-primary/20 rounded-full px-3 py-1 hover:bg-primary hover:text-white transition-colors">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
