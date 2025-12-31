
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import DesktopHeader from './ui/DesktopHeader';
import Footer from './ui/Footer';

interface NavItemProps {
  item: any;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 w-16 transition-colors ${isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
  >
    <div className="relative">
      <span className={`material-symbols-outlined text-2xl ${isActive ? 'filled' : ''}`}>{item.icon}</span>
      {item.badge && (
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white border-2 border-white dark:border-gray-900">
          {item.badge}
        </span>
      )}
    </div>
    <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
  </button>
);

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItemsCount = useCartStore((state) => state.items.length);

  const navItems = [
    { icon: 'home', label: 'Home', path: '/' },
    { icon: 'calendar_month', label: 'Bookings', path: '/bookings' },
    { icon: 'chat_bubble', label: 'Chat', path: '/chat', badge: 2 },
    { icon: 'person', label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.05)] z-50 rounded-t-3xl">
      <div className="flex justify-between items-center h-16">
        {navItems.map((item, idx) => {
           // Insert center FAB button in middle
           if (idx === 2) {
             return (
               <React.Fragment key="fab">
                  <div className="relative -top-6">
                    <button 
                      id="cart-icon-target"
                      onClick={() => navigate('/cart')}
                      className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-[0_10px_30px_-5px_rgba(13,148,136,0.3)] hover:bg-primary-dark transition-all active:scale-95 relative"
                    >
                      <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                      {cartItemsCount > 0 && <span className="absolute top-1 right-1 flex items-center justify-center size-4 bg-red-500 rounded-full text-[10px] text-white font-bold border border-white dark:border-gray-900">{cartItemsCount}</span>}
                    </button>
                  </div>
                  <NavItem item={item} isActive={location.pathname === item.path} onClick={() => navigate(item.path)} />
               </React.Fragment>
             )
           }
           return <NavItem key={item.path} item={item} isActive={location.pathname === item.path} onClick={() => navigate(item.path)} />
        })}
      </div>
      {/* iPhone Home Indicator */}
      <div className="flex justify-center pb-2 pt-1">
        <div className="w-[120px] h-[4px] bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    </nav>
  );
};

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark pb-0 lg:pb-0 font-sans flex flex-col">
      <DesktopHeader />
      <div className="flex-1 w-full max-w-[1920px] mx-auto">
        {children}
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
      <BottomNav />
    </div>
  );
};
