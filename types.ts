
export interface ConsultationVariant {
  type: 'Clinic Visit' | 'Video Consult' | 'Home Visit';
  price: number;
  duration: string;
  available: boolean;
  nextSlot: string;
  icon: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  languages: string[];
  rating: number;
  reviews: number;
  fee: number;
  image: string;
  available: boolean;
  hospital?: string;
  location?: string;
  about?: string;
  variants?: ConsultationVariant[];
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  packSize: string;
  price: number;
  mrp: number;
  image: string;
  discount?: string;
  deliveryTime?: string;
  isPrescriptionRequired?: boolean;
  description?: string;
  uses?: string[];
  sideEffects?: string[];
}

export interface ScanCenter {
  id: string;
  name: string;
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  image: string;
  verified: boolean;
  nabl?: boolean;
  tests: {
    name: string;
    price: number;
    mrp: number;
    nextSlot: string;
  }[];
}

export interface TestVariant {
  centerId: string;
  centerName: string;
  centerImage: string;
  price: number;
  mrp: number;
  reportTime: string;
  rating: number;
  nabl: boolean;
  distance?: string;
  nextSlot?: string; // Added for Scans
}

export interface LabTest {
  id: string;
  name: string;
  parameterCount: number;
  description: string;
  price: number; // Base price (usually lowest)
  mrp: number;
  discount: string;
  tags?: string[];
  category?: string;
  reportTime?: string;
  fasting?: string;
  variants?: TestVariant[]; // Available centers
}

export interface MedicalScan {
  id: string;
  name: string;
  category: string; // MRI, CT, Ultrasound, X-Ray
  description: string;
  bodyPart: string;
  price: number; // Starting price
  mrp: number;
  discount: string;
  image: string;
  variants: TestVariant[];
}

export interface ServicePlan {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  duration: string;
  label?: string; // e.g., "Best Value"
  savings?: number;
}

export interface HomeCareService {
  id: string;
  title: string;
  localTitle?: string;
  category: 'Nursing' | 'Physiotherapy' | 'Doctor Visit' | 'Elderly Care' | 'Lab';
  description: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
  isVerified?: boolean;
  available?: boolean;
  plans?: ServicePlan[];
}

export interface PhysioService {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  conditions: string[];
  homeVisitAvailable: boolean;
  homeVisitFee?: number;
  plans?: ServicePlan[];
}

export interface Hospital {
  id: string;
  name: string;
  type: string; // Multi-Specialty, Eye Care, etc.
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  image: string;
  open24x7: boolean;
  insuranceAccepted: boolean;
  specialties: string[];
}

export interface DiabetesPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  mrp: number;
  features: string[];
  isPopular?: boolean;
}
