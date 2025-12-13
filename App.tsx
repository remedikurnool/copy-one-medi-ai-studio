
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { FlyingCartAnimation } from './components/ui/FlyingCartAnimation';
import ScrollToTop from './components/ScrollToTop';
import { GlobalLoadingSkeleton } from './components/ui/Skeletons';

// -- Lazy Load Pages for Performance --

// Core Pages
const Home = lazy(() => import('./pages/Home'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Chat = lazy(() => import('./pages/Chat'));
const Profile = lazy(() => import('./pages/Profile'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const Notifications = lazy(() => import('./pages/Notifications'));

// Feature: Medicines
const MedicineList = lazy(() => import('./pages/medicines/MedicineList'));
const MedicineDetail = lazy(() => import('./pages/medicines/MedicineDetail'));

// Feature: Doctors
const DoctorList = lazy(() => import('./pages/doctors/DoctorList'));
const DoctorProfile = lazy(() => import('./pages/doctors/DoctorProfile'));
const DoctorBooking = lazy(() => import('./pages/doctors/DoctorBooking'));

// Feature: Scans
const ScanList = lazy(() => import('./pages/scans/ScanList'));
const ScanDetail = lazy(() => import('./pages/scans/ScanDetail'));
const ScanBooking = lazy(() => import('./pages/scans/ScanBooking'));

// Feature: Lab Tests
const LabTestList = lazy(() => import('./pages/lab-tests/LabTestList'));
const LabTestDetail = lazy(() => import('./pages/lab-tests/LabTestDetail'));
const LabBooking = lazy(() => import('./pages/lab-tests/LabBooking'));

// Feature: Specialized Care
const HomeCareList = lazy(() => import('./pages/home-care/HomeCareList'));
const HomeCareDetail = lazy(() => import('./pages/home-care/HomeCareDetail'));
const PhysioList = lazy(() => import('./pages/physiotherapy/PhysioList'));
const PhysioDetail = lazy(() => import('./pages/physiotherapy/PhysioDetail'));
const DiabetesCare = lazy(() => import('./pages/diabetes/DiabetesCare'));
const HospitalList = lazy(() => import('./pages/hospitals/HospitalList'));

// Feature: Profile & Utilities
const ProfileEdit = lazy(() => import('./pages/ProfileEdit'));
const Addresses = lazy(() => import('./pages/profile/Addresses'));
const FamilyMembers = lazy(() => import('./pages/profile/FamilyMembers'));
const PaymentMethods = lazy(() => import('./pages/profile/PaymentMethods'));
const HealthRecords = lazy(() => import('./pages/profile/HealthRecords'));
const Calculators = lazy(() => import('./pages/profile/Calculators'));
const Prescriptions = lazy(() => import('./pages/Prescriptions'));

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <FlyingCartAnimation />
      <Suspense fallback={<GlobalLoadingSkeleton />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Module Listing Pages with Bottom Nav */}
            <Route path="/medicines" element={<MedicineList />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/scans" element={<ScanList />} />
            <Route path="/lab-tests" element={<LabTestList />} />
          </Route>

          {/* Full Screen Pages (No Bottom Nav) */}
          <Route path="/medicines/:id" element={<MedicineDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/notifications" element={<Notifications />} />
          
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/doctors/booking" element={<DoctorBooking />} />
          
          <Route path="/scans/detail" element={<ScanDetail />} />
          <Route path="/scans/booking" element={<ScanBooking />} />
          
          <Route path="/lab-tests/:id" element={<LabTestDetail />} />
          <Route path="/lab-tests/booking" element={<LabBooking />} />
          
          <Route path="/home-care" element={<HomeCareList />} />
          <Route path="/home-care/:id" element={<HomeCareDetail />} />
          
          <Route path="/physiotherapy" element={<PhysioList />} />
          <Route path="/physiotherapy/:id" element={<PhysioDetail />} />
          
          <Route path="/diabetes-care" element={<DiabetesCare />} />
          <Route path="/hospitals" element={<HospitalList />} />
          
          {/* Profile Routes */}
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/addresses" element={<Addresses />} />
          <Route path="/profile/family" element={<FamilyMembers />} />
          <Route path="/profile/payments" element={<PaymentMethods />} />
          <Route path="/profile/health-records" element={<HealthRecords />} />
          <Route path="/profile/calculators" element={<Calculators />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
