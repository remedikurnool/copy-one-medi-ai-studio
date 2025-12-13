import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore, Address } from '../../store/userStore';

export default function Addresses() {
  const navigate = useNavigate();
  const { addresses, addAddress, removeAddress } = useUserStore();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState<Partial<Address>>({
    tag: 'Home',
    city: 'Kurnool',
    isDefault: false
  });

  const handleSave = () => {
    if (newAddress.line1 && newAddress.pincode) {
      addAddress({
        id: Date.now().toString(),
        tag: newAddress.tag as any,
        line1: newAddress.line1 || '',
        line2: newAddress.line2 || '',
        city: newAddress.city || 'Kurnool',
        pincode: newAddress.pincode || '',
        isDefault: addresses.length === 0 // Make default if first address
      });
      setShowAddForm(false);
      setNewAddress({ tag: 'Home', city: 'Kurnool', isDefault: false });
    }
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-white pb-10 font-sans">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold">My Addresses</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-4 flex flex-col gap-4">
        {/* Address List */}
        {addresses.map((addr) => (
          <div key={addr.id} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative group">
            <div className="flex justify-between items-start mb-2">
              <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide ${addr.tag === 'Home' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                {addr.tag}
              </span>
              <div className="flex gap-2">
                 <button className="text-gray-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit</span></button>
                 <button onClick={() => removeAddress(addr.id)} className="text-gray-400 hover:text-red-500"><span className="material-symbols-outlined text-lg">delete</span></button>
              </div>
            </div>
            <h3 className="font-bold text-base mb-1">{addr.line1}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{addr.line2}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{addr.city} - {addr.pincode}</p>
            
            {addr.isDefault && (
               <div className="mt-3 flex items-center gap-1 text-green-600 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm filled">check_circle</span>
                  Default Address
               </div>
            )}
          </div>
        ))}

        {/* Add New Button */}
        {!showAddForm ? (
          <button 
            onClick={() => setShowAddForm(true)}
            className="w-full py-4 rounded-2xl border-2 border-dashed border-primary/40 text-primary font-bold flex items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
          >
            <span className="material-symbols-outlined">add_location_alt</span>
            Add New Address
          </button>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="font-bold text-lg mb-4">New Address</h3>
            <div className="flex flex-col gap-3">
               <div className="flex gap-2">
                 {['Home', 'Office', 'Other'].map(tag => (
                   <button 
                    key={tag}
                    onClick={() => setNewAddress({...newAddress, tag: tag as any})}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-colors ${newAddress.tag === tag ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-700 text-gray-500 border-transparent'}`}
                   >
                     {tag}
                   </button>
                 ))}
               </div>
               <input 
                 placeholder="House No / Flat No" 
                 className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                 value={newAddress.line1 || ''}
                 onChange={e => setNewAddress({...newAddress, line1: e.target.value})}
               />
               <input 
                 placeholder="Street / Area / Landmark" 
                 className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                 value={newAddress.line2 || ''}
                 onChange={e => setNewAddress({...newAddress, line2: e.target.value})}
               />
               <div className="flex gap-3">
                 <input 
                   placeholder="City" 
                   className="flex-1 h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                   value={newAddress.city || ''}
                   onChange={e => setNewAddress({...newAddress, city: e.target.value})}
                 />
                 <input 
                   placeholder="Pincode" 
                   className="w-32 h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                   value={newAddress.pincode || ''}
                   onChange={e => setNewAddress({...newAddress, pincode: e.target.value})}
                 />
               </div>
               <div className="flex gap-3 mt-2">
                 <button onClick={() => setShowAddForm(false)} className="flex-1 h-12 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">Cancel</button>
                 <button onClick={handleSave} className="flex-1 h-12 rounded-xl bg-primary text-white font-bold shadow-md">Save Address</button>
               </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}