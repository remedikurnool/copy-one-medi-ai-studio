
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const MenuLink = ({ icon, label, sub, onClick, color = "text-slate-600" }: any) => (
  <button onClick={onClick} className="flex items-center gap-4 w-full p-4 bg-white dark:bg-gray-800 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
    <div className={`size-10 rounded-full bg-slate-50 dark:bg-gray-700 flex items-center justify-center ${color}`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="flex-1 text-left">
      <h3 className="font-bold text-slate-900 dark:text-white">{label}</h3>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
    <span className="material-symbols-outlined text-gray-300">chevron_right</span>
  </button>
);

export default function Profile() {
  const navigate = useNavigate();
  const { profile } = useUserStore();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial state
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark pb-32">
       {/* Header Profile Card */}
       <div className="bg-white dark:bg-gray-800 p-6 pb-8 rounded-b-3xl shadow-sm mb-4">
          <div className="flex justify-between items-start mb-4">
             <h1 className="text-2xl font-bold dark:text-white">My Profile</h1>
             <button 
               onClick={() => navigate('/profile/edit')}
               className="text-primary font-bold text-sm bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors"
             >
               Edit
             </button>
          </div>
          <div className="flex items-center gap-4">
             <div className="size-20 rounded-full bg-gray-200 border-2 border-white shadow-md bg-cover bg-center" style={{backgroundImage: `url("${profile.image}")`}}></div>
             <div>
                <h2 className="text-xl font-bold leading-tight dark:text-white">{profile.name}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{profile.phone}</p>
                <div className="flex items-center gap-1 mt-1 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded w-fit">
                   <span className="material-symbols-outlined text-[14px] filled">verified</span> Verified
                </div>
             </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6">
             <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-xl text-center">
                <span className="block text-xl font-bold text-primary">{profile.bloodGroup}</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Blood Type</span>
             </div>
             <div className="bg-purple-50 dark:bg-gray-700 p-3 rounded-xl text-center">
                <span className="block text-xl font-bold text-purple-600">{profile.height}</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Height (cm)</span>
             </div>
             <div className="bg-orange-50 dark:bg-gray-700 p-3 rounded-xl text-center">
                <span className="block text-xl font-bold text-orange-600">{profile.weight}</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Weight (kg)</span>
             </div>
          </div>
       </div>

       <div className="px-4 flex flex-col gap-6">
          <section>
             <h3 className="font-bold text-gray-500 uppercase text-xs mb-2 pl-2">Health & Records</h3>
             <div className="rounded-2xl overflow-hidden shadow-sm">
                <MenuLink icon="receipt_long" label="My Orders" sub="Medicines, Lab Tests" onClick={() => navigate('/bookings')} color="text-blue-500" />
                <MenuLink icon="prescriptions" label="Prescriptions" sub="Uploaded Rx" onClick={() => navigate('/prescriptions')} color="text-teal-500" />
                <MenuLink icon="monitor_heart" label="Health Records" sub="Vitals, Reports" onClick={() => navigate('/profile/health-records')} color="text-red-500" />
                <MenuLink icon="calculate" label="Health Calculators" sub="BMI, Water Intake" onClick={() => navigate('/profile/calculators')} color="text-orange-500" />
             </div>
          </section>

          <section>
             <h3 className="font-bold text-gray-500 uppercase text-xs mb-2 pl-2">Settings & Info</h3>
             <div className="rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-gray-800">
                <MenuLink icon="location_on" label="My Addresses" sub="Home, Office" onClick={() => navigate('/profile/addresses')} color="text-indigo-500" />
                <MenuLink icon="family_restroom" label="Family Members" sub="Manage Dependents" onClick={() => navigate('/profile/family')} color="text-pink-500" />
                <MenuLink icon="account_balance_wallet" label="Payment Methods" sub="Saved Cards, UPI" onClick={() => navigate('/profile/payments')} color="text-green-600" />
                
                {/* Dark Mode Toggle */}
                <div className="flex items-center gap-4 w-full p-4 border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                   <div className="size-10 rounded-full bg-slate-50 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined">{isDark ? 'dark_mode' : 'light_mode'}</span>
                   </div>
                   <div className="flex-1 text-left">
                      <h3 className="font-bold text-slate-900 dark:text-white">Dark Mode</h3>
                      <p className="text-xs text-gray-400">{isDark ? 'On' : 'Off'}</p>
                   </div>
                   <button 
                     onClick={toggleDarkMode}
                     className={`w-12 h-6 rounded-full p-1 transition-colors ${isDark ? 'bg-primary' : 'bg-gray-300'}`}
                   >
                     <div className={`size-4 bg-white rounded-full shadow-sm transition-transform ${isDark ? 'translate-x-6' : 'translate-x-0'}`}></div>
                   </button>
                </div>

                <MenuLink icon="language" label="App Language" sub="English" color="text-gray-600" />
             </div>
          </section>

          <section>
             <h3 className="font-bold text-gray-500 uppercase text-xs mb-2 pl-2">Support</h3>
             <div className="rounded-2xl overflow-hidden shadow-sm">
                <MenuLink icon="help" label="Help Center" sub="FAQs, Support" onClick={() => navigate('/chat')} color="text-emerald-500" />
                <button className="flex items-center gap-4 w-full p-4 bg-white dark:bg-gray-800 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                  <div className="size-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <span className="material-symbols-outlined">logout</span>
                  </div>
                  Log Out
                </button>
             </div>
          </section>
          
          <p className="text-center text-xs text-gray-400 font-medium">One Medi v2.4.0 • Made in Kurnool</p>
       </div>
    </div>
  );
}
