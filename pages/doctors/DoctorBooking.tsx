import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DOCTORS } from '../../constants';

export default function DoctorBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [patient, setPatient] = useState('self');

  const { doctorId, variant } = location.state || { doctorId: 'd1' };
  const doctor = DOCTORS.find(d => d.id === doctorId) || DOCTORS[0];
  
  // Fallback if variant isn't passed (e.g. direct nav)
  const currentVariant = variant || (doctor.variants && doctor.variants[0]) || { price: doctor.fee, type: 'Clinic Visit', icon: 'apartment' };

  const timeSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '06:00 PM', '06:30 PM'];

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark font-sans text-slate-900 dark:text-white pb-32">
      <div className="relative flex flex-col max-w-md mx-auto bg-white dark:bg-gray-900 shadow-xl min-h-screen">
        {/* TopAppBar */}
        <div className="sticky top-0 z-20 flex items-center bg-white dark:bg-gray-900 p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-12 shrink-0 items-center justify-start cursor-pointer text-slate-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Confirm Appointment</h2>
        </div>

        {/* Doctor Summary Card */}
        <div className="p-4">
          <div className="flex gap-4 items-center bg-white dark:bg-gray-800 p-3 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
             <div className="size-20 rounded-xl bg-gray-200 bg-cover bg-center shrink-0" style={{backgroundImage: `url("${doctor.image}")`}}></div>
             <div>
                <div className="flex items-center gap-1.5 mb-1">
                   <span className="bg-blue-50 dark:bg-blue-900/30 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-100 dark:border-blue-800 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">{currentVariant.icon || 'medical_services'}</span>
                      {currentVariant.type}
                   </span>
                </div>
                <h3 className="font-bold text-lg leading-tight">{doctor.name}</h3>
                <p className="text-secondary text-sm font-medium">{doctor.specialty}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{doctor.hospital}, Kurnool</p>
             </div>
          </div>
        </div>

        {/* Patient Selector */}
        <div className="flex flex-col px-4 pt-2">
            <h3 className="text-lg font-bold leading-tight pb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">person</span>
              Patient Details
            </h3>
            <div className="flex flex-col gap-3">
              <label className={`group flex items-center gap-4 rounded-xl border-2 p-3 cursor-pointer relative shadow-sm transition-all ${patient === 'self' ? 'border-primary bg-blue-50/30 dark:bg-blue-900/10' : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                <input 
                  type="radio" 
                  name="patient" 
                  className="peer h-5 w-5 border-2 border-gray-300 bg-white text-primary focus:ring-primary checked:border-primary checked:bg-primary"
                  checked={patient === 'self'}
                  onChange={() => setPatient('self')}
                />
                <div className="flex grow flex-col">
                  <p className="text-sm font-bold leading-normal">Self (Siva Kumar)</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Male, 28 Years</p>
                </div>
              </label>

              <label className={`group flex items-center gap-4 rounded-xl border-2 p-3 cursor-pointer relative shadow-sm transition-all ${patient === 'other' ? 'border-primary bg-blue-50/30 dark:bg-blue-900/10' : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                <input 
                  type="radio" 
                  name="patient" 
                  className="peer h-5 w-5 border-2 border-gray-300 bg-white text-primary focus:ring-primary checked:border-primary checked:bg-primary"
                  checked={patient === 'other'}
                  onChange={() => setPatient('other')}
                />
                <div className="flex grow flex-col">
                  <p className="text-sm font-bold leading-normal">Add New Member</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Family member or friend</p>
                </div>
              </label>
            </div>
        </div>

        <div className="h-2 bg-gray-50 dark:bg-gray-800 w-full my-6"></div>

        {/* Slot Selection */}
        <div className="flex flex-col px-4">
            <h3 className="text-lg font-bold leading-tight pb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_clock</span>
              Select Date & Time
            </h3>
            
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
              {['Today, 14 Oct', 'Tomorrow, 15 Oct', 'Wed, 16 Oct'].map((d, i) => (
                 <button 
                  key={i}
                  onClick={() => setSelectedDate(i === 0 ? 'today' : d)}
                  className={`px-4 py-3 rounded-xl border font-bold text-sm whitespace-nowrap transition-all ${
                    (i === 0 && selectedDate === 'today') || selectedDate === d 
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                 >
                   {d}
                 </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
               {timeSlots.map(time => (
                 <button 
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-2 rounded-lg text-sm font-bold border transition-all ${
                    selectedTime === time 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                 >
                   {time}
                 </button>
               ))}
            </div>
            
            {currentVariant.type === 'Video Consult' && (
              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium flex items-start gap-2 border border-purple-100 dark:border-purple-800">
                <span className="material-symbols-outlined text-[16px] mt-0.5">videocam</span>
                <p>Video link will be shared on WhatsApp 15 mins before the appointment time.</p>
              </div>
            )}
            
            {currentVariant.type === 'Home Visit' && (
              <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-xl text-xs font-medium flex items-start gap-2 border border-orange-100 dark:border-orange-800">
                <span className="material-symbols-outlined text-[16px] mt-0.5">home_pin</span>
                <p>Doctor will visit your registered home address. Please ensure someone is available.</p>
              </div>
            )}
        </div>

        <div className="h-2 bg-gray-50 dark:bg-gray-800 w-full my-6"></div>

        {/* Bill Details */}
        <div className="px-4 flex flex-col gap-3 mb-6">
            <h3 className="text-lg font-bold">Payment Details</h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                <span>Consultation Fee ({currentVariant.type})</span>
                <span>₹{currentVariant.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                <span>Service Fee</span>
                <span>₹20</span>
              </div>
              <div className="h-px bg-gray-200 dark:bg-gray-700 my-1"></div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Payable</span>
                <span>₹{currentVariant.price + 20}</span>
              </div>
            </div>
            
            {currentVariant.type === 'Clinic Visit' && (
              <div className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-yellow-800 dark:text-yellow-400 text-xs font-medium">
                <span className="material-symbols-outlined text-[16px]">info</span>
                Pay at clinic option available
              </div>
            )}
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 w-full max-w-md bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] z-50">
          <button 
            onClick={() => navigate('/bookings')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-12 rounded-xl text-lg shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            Confirm Booking
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
          </button>
        </div>
      </div>
    </div>
  );
}