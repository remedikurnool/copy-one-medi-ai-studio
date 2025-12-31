
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MEDICINES, DOCTORS, LAB_TESTS, MEDICAL_SCANS } from '../constants';
import AdvancedSearch from '../components/ui/AdvancedSearch';
import { useLocationStore } from '../store/locationStore';
import LocationModal from '../components/ui/LocationModal';
import { PrescriptionPromo } from '../components/ui/PrescriptionPromo';

// Cards
import { MedicineCard } from '../components/cards/MedicineCard';
import { LabTestCard } from '../components/cards/LabTestCard';
import { ScanCard } from '../components/cards/ScanCard';
import { DoctorCard } from '../components/cards/DoctorCard';

// --- Components ---

const BackgroundBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-400/10 rounded-full blur-[100px] animate-blob"></div>
    <div className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] bg-purple-400/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] bg-teal-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
  </div>
);

const CategoryPill = ({ icon, label, color, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 min-w-[72px] lg:min-w-[100px] group transition-transform active:scale-95">
    <div className={`size-[4.5rem] lg:size-24 rounded-2xl flex items-center justify-center shadow-glass border border-white/50 backdrop-blur-sm transition-all group-hover:-translate-y-1 ${color}`}>
      <span className="material-symbols-outlined text-3xl lg:text-4xl drop-shadow-sm">{icon}</span>
    </div>
    <span className="text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-300 text-center">{label}</span>
  </button>
);

const BentoCard = ({ title, subtitle, icon, bgClass, textClass, iconClass, onClick, span = "col-span-1" }: any) => (
  <div 
    onClick={onClick}
    className={`${span} ${bgClass} relative rounded-3xl p-5 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] group border border-white/20`}
  >
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500`}>
       <span className={`material-symbols-outlined text-[5rem] ${textClass}`}>{icon}</span>
    </div>
    
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div className={`size-12 rounded-xl ${iconClass} flex items-center justify-center mb-3 shadow-sm`}>
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className={`text-lg font-bold leading-tight mb-1 ${textClass}`} dangerouslySetInnerHTML={{__html: title}}></h3>
        <p className={`text-xs font-semibold opacity-70 ${textClass}`}>{subtitle}</p>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ title, onSeeAll }: { title: string, onSeeAll: () => void }) => (
  <div className="flex items-center justify-between mb-4 px-1">
    <h2 className="text-lg lg:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
      {title}
    </h2>
    <button onClick={onSeeAll} className="text-xs lg:text-sm font-bold text-primary hover:bg-primary/5 px-2 py-1 rounded-lg transition-colors flex items-center gap-0.5">
      See All <span className="material-symbols-outlined text-[14px]">chevron_right</span>
    </button>
  </div>
);

export default function Home() {
  const navigate = useNavigate();
  const { city, address } = useLocationStore();
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <div className="flex flex-col relative isolate min-h-screen pb-24 lg:pb-0 lg:max-w-7xl lg:mx-auto">
      <BackgroundBlobs />
      <LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />

      {/* Mobile Header (Hidden on Desktop) */}
      <header className="sticky top-0 z-40 bg-primary dark:bg-gray-900 shadow-xl rounded-b-[2rem] transition-all duration-300 pb-2 lg:hidden">
        <div className="bg-black/10 text-white/90 text-[10px] font-bold py-1.5 text-center tracking-wider uppercase rounded-t-none">
          ⚡ Flash Sale: 20% OFF Medicines
        </div>
        <div className="px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2.5 rounded-2xl text-primary shadow-sm">
              <span className="material-symbols-outlined text-2xl">local_hospital</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-extrabold tracking-tight text-white leading-none">ONE MEDI</h1>
              <div 
                onClick={() => setIsLocationModalOpen(true)}
                className="flex items-center gap-1 mt-1 text-white/90 cursor-pointer hover:text-white transition-colors group"
              >
                <span className="material-symbols-outlined text-[14px] fill-current">location_on</span>
                <span className="text-xs font-semibold max-w-[150px] truncate border-b border-dashed border-white/40 pb-0.5 group-hover:border-white">{address || city}</span>
                <span className="material-symbols-outlined text-[14px]">expand_more</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <button onClick={() => navigate('/notifications')} className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                <span className="material-symbols-outlined text-xl">notifications</span>
                <span className="absolute top-2.5 right-3 size-2 bg-red-500 rounded-full border border-primary"></span>
             </button>
             <button id="cart-icon-target" onClick={() => navigate('/cart')} className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                <span className="material-symbols-outlined text-xl">shopping_cart</span>
             </button>
          </div>
        </div>

        {/* Advanced Search Bar - Padded inside the header */}
        <div className="px-5 pb-5">
          <AdvancedSearch />
        </div>
      </header>

      {/* Main Categories (Responsive) */}
      <section className="mt-6 px-4 lg:px-0 animate-slide-up relative z-10 lg:mt-10">
        <div className="flex lg:grid lg:grid-cols-6 gap-4 overflow-x-auto no-scrollbar pb-4 pt-2 px-1 lg:pb-0">
           <CategoryPill onClick={() => navigate('/diabetes-care')} icon="bloodtype" label="Diabetes" color="bg-orange-50/80 text-orange-600 border-orange-100" />
           <CategoryPill onClick={() => navigate('/home-care')} icon="home_health" label="Home Care" color="bg-pink-50/80 text-pink-600 border-pink-100" />
           <CategoryPill onClick={() => navigate('/physiotherapy')} icon="accessibility_new" label="Physio" color="bg-sky-50/80 text-sky-600 border-sky-100" />
           <CategoryPill onClick={() => navigate('/hospitals')} icon="local_hospital" label="Hospitals" color="bg-green-50/80 text-green-600 border-green-100" />
           <CategoryPill icon="monitor_heart" label="Heart" color="bg-indigo-50/80 text-indigo-600 border-indigo-100" />
           <CategoryPill icon="healing" label="First Aid" color="bg-red-50/80 text-red-600 border-red-100" />
        </div>
      </section>

      {/* Emergency SOS Button (Desktop: Grid 2 cols with promo) */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:mt-8">
        <section className="px-4 lg:px-0 mb-6 lg:mb-0 lg:col-span-1">
            <button 
            onClick={() => alert('Connecting to nearest Ambulance Service in Kurnool...')}
            className="w-full bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 lg:p-6 shadow-lg shadow-red-500/30 flex items-center justify-between active:scale-[0.98] transition-all group h-full"
            >
            <div className="flex items-center gap-3">
                <div className="size-10 lg:size-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-2xl lg:text-3xl">ambulance</span>
                </div>
                <div className="text-left">
                <h3 className="font-bold text-lg lg:text-xl leading-tight">Emergency SOS</h3>
                <p className="text-xs lg:text-sm text-red-100 opacity-90">Call Ambulance in Kurnool</p>
                </div>
            </div>
            <div className="size-8 lg:size-10 bg-white text-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">call</span>
            </div>
            </button>
        </section>

        {/* Prescription Promo Banner (Desktop: Col 2-3) */}
        <section className="px-4 lg:px-0 mb-8 lg:mb-0 lg:col-span-2 animate-slide-up relative z-10" style={{animationDelay: '0.05s'}}>
            <PrescriptionPromo className="h-full flex items-center" />
        </section>
      </div>

      {/* Bento Grid Services (Desktop: 4 Columns) */}
      <section className="px-4 lg:px-0 mb-8 lg:mt-8 animate-slide-up relative z-10" style={{animationDelay: '0.1s'}}>
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 px-1">Top Services</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
           {/* Medicines - Large Card */}
           <BentoCard 
             onClick={() => navigate('/medicines')}
             title="Order<br/>Medicines"
             subtitle="Flat 20% OFF"
             icon="medication"
             bgClass="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
             textClass="text-blue-700 dark:text-blue-300"
             iconClass="bg-white dark:bg-blue-800 text-blue-600"
             span="col-span-1 row-span-2"
           />
           
           {/* Lab Tests */}
           <BentoCard 
             onClick={() => navigate('/lab-tests')}
             title="Lab Tests"
             subtitle="Home Collection"
             icon="science"
             bgClass="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 h-32 lg:h-full"
             textClass="text-teal-700 dark:text-teal-300"
             iconClass="bg-white dark:bg-teal-800 text-teal-600"
           />

           {/* Doctors */}
           <BentoCard 
             onClick={() => navigate('/doctors')}
             title="Doctors"
             subtitle="Instant Consult"
             icon="stethoscope"
             bgClass="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 h-32 lg:h-full"
             textClass="text-purple-700 dark:text-purple-300"
             iconClass="bg-white dark:bg-purple-800 text-purple-600"
           />

           {/* Scans - Full Width Mobile, Col 1 Desktop */}
           <BentoCard 
             onClick={() => navigate('/scans')}
             title="Book Scans"
             subtitle="Compare Prices"
             icon="radiology"
             bgClass="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 h-32 lg:h-full"
             textClass="text-slate-700 dark:text-slate-300"
             iconClass="bg-white dark:bg-slate-700 text-slate-600"
             span="col-span-2 lg:col-span-1"
           />
        </div>
      </section>

      {/* Snap Scroll Promo Banners */}
      <section className="px-4 lg:px-0 mb-8 animate-slide-up relative z-10" style={{animationDelay: '0.2s'}}>
        <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-4 no-scrollbar pb-4 lg:pb-0">
           {/* Banner 1 */}
           <div className="snap-center shrink-0 w-[90%] sm:w-[60%] lg:w-full h-48 lg:h-56 rounded-3xl overflow-hidden relative shadow-lg group cursor-pointer active:scale-[0.98] transition-transform" onClick={() => navigate('/lab-tests')}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/80 to-transparent z-10 flex flex-col justify-center p-6 pl-8">
                 <span className="bg-secondary text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-lg w-fit mb-3 tracking-wider shadow-sm">Limited Offer</span>
                 <h3 className="text-white text-2xl lg:text-3xl font-extrabold leading-tight mb-2 drop-shadow-md">Full Body Check<br/><span className="text-blue-200">@ Just ₹999</span></h3>
                 <p className="text-blue-100 text-xs font-medium max-w-[60%] mb-4">Includes 60+ vital tests with free home sample collection.</p>
                 <button className="bg-white text-primary px-5 py-2 rounded-xl text-xs font-bold w-fit shadow-lg hover:bg-gray-50 transition-colors">Book Now</button>
              </div>
              <div className="absolute right-0 top-0 h-full w-2/3 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChcVgUocqxKyeU56-z1f-Wwte61zbuAgJy_oZML3U2kDcbkG0b5ZqbAU5HUqZZprD_jHs_gsCWzBTt5HUbTFu0OBFqDEuB0hAWvRZDmkmhXEaVs1chYNNpi1rS6CkCy2Rd_0H1ss0AdJjRnL-YJ3O-1HOoAErxtG28Ck0Vsx3DEqnYPsFQsohbYcRbARh0EUQ7SP6Dzc_BWcEG9JdUJOC_VUy5n87yiR_HTao37qp931dMDL9BJe3apC6IaQsfIv_gKnb-Sv_v0bw")'}}></div>
           </div>
           
           {/* Banner 2 */}
           <div className="snap-center shrink-0 w-[90%] sm:w-[60%] lg:w-full h-48 lg:h-56 rounded-3xl overflow-hidden relative shadow-lg group cursor-pointer active:scale-[0.98] transition-transform" onClick={() => navigate('/medicines')}>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-800/80 to-transparent z-10 flex flex-col justify-center p-6 pl-8">
                 <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-lg w-fit mb-3 tracking-wider border border-white/20">Fast Delivery</span>
                 <h3 className="text-white text-2xl lg:text-3xl font-extrabold leading-tight mb-2 drop-shadow-md">Medicines in<br/><span className="text-teal-200">2 Hours</span></h3>
                 <button className="bg-white text-teal-800 px-5 py-2 rounded-xl text-xs font-bold w-fit shadow-lg mt-4 hover:bg-gray-50 transition-colors">Order Now</button>
              </div>
              <div className="absolute right-0 top-0 h-full w-2/3 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX0N7APw5Sja-YQkfMLdSfrk3dTZtx3i44lcrNwkG3onjfl0cfXDzwrVuz8QWbp6esJWZ6nKjQeDWvvJCxqNrKCxMwYmG_vdHIDBu4kW8sbXZsj69bmHN2ZnA6gRsvyBD1E_eyo-l4f6E8BI1ZeRFL_KfEhFHCocpyBlaGyXAIv7bEM8pkt8I_fmTmv9sQ3XS4OOwoZSscczXPfkG7FaeFNDYJX963sZSASinr_g9xQv8jfEDPtzQu-bQA7hZ1QboauciDfU7ZHh8")'}}></div>
           </div>
        </div>
      </section>

      {/* Best Sellers Carousel */}
      <section className="mb-8 pl-4 lg:px-0 animate-slide-up relative z-10" style={{animationDelay: '0.3s'}}>
         <SectionHeader title="Best Sellers" onSeeAll={() => navigate('/medicines')} />
         <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto no-scrollbar pb-6 pr-4 lg:pr-0 lg:pb-0 snap-x snap-mandatory">
            {MEDICINES.slice(0,5).map((med) => (
              <div key={med.id} className="snap-start">
                <MedicineCard medicine={med} onClick={() => navigate(`/medicines/${med.id}`)} />
              </div>
            ))}
         </div>
      </section>

      {/* Popular Lab Tests Carousel */}
      <section className="mb-8 pl-4 lg:px-0 animate-slide-up relative z-10" style={{animationDelay: '0.4s'}}>
         <SectionHeader title="Popular Tests" onSeeAll={() => navigate('/lab-tests')} />
         <div className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto no-scrollbar pb-6 pr-4 lg:pr-0 lg:pb-0 snap-x snap-mandatory">
            {LAB_TESTS.slice(0,4).map((test) => (
              <div key={test.id} className="snap-start min-w-[260px] lg:min-w-0">
                <LabTestCard test={test} onClick={() => navigate(`/lab-tests/${test.id}`)} />
              </div>
            ))}
         </div>
      </section>

      {/* Most Booked Scans Carousel */}
      <section className="mb-8 pl-4 lg:px-0 animate-slide-up relative z-10" style={{animationDelay: '0.5s'}}>
         <SectionHeader title="Most Booked Scans" onSeeAll={() => navigate('/scans')} />
         <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto no-scrollbar pb-6 pr-4 lg:pr-0 lg:pb-0 snap-x snap-mandatory">
            {MEDICAL_SCANS.slice(0,4).map((scan) => (
              <div key={scan.id} className="snap-start">
                <ScanCard scan={scan} onClick={() => navigate('/scans/detail', { state: { scanId: scan.id } })} />
              </div>
            ))}
         </div>
      </section>

      {/* Best Doctors in Kurnool Carousel */}
      <section className="mb-8 lg:mb-16 pl-4 lg:px-0 animate-slide-up relative z-10" style={{animationDelay: '0.6s'}}>
         <SectionHeader title="Top Doctors in Kurnool" onSeeAll={() => navigate('/doctors')} />
         <div className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto no-scrollbar pb-6 pr-4 lg:pr-0 lg:pb-0 snap-x snap-mandatory">
            {DOCTORS.slice(0,4).map((doc) => (
              <div key={doc.id} className="snap-start min-w-[280px] lg:min-w-0">
                <DoctorCard doctor={doc} onClick={() => navigate(`/doctors/${doc.id}`)} />
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
