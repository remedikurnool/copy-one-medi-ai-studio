
import { Doctor, Medicine, ScanCenter, LabTest, TestVariant, MedicalScan, HomeCareService, PhysioService, Hospital, DiabetesPackage } from './types';

// Shared Diagnostic Center Data
const CENTERS_DB = {
  vijaya: {
    name: 'Vijaya Diagnostic Centre',
    image: 'https://content.jdmagicbox.com/comp/kurnool/j8/9999px8518.x8518.180412120045.c2j8/catalogue/vijaya-diagnostic-centre-kurnool-diagnostic-centres-3x3x.jpg',
    rating: 4.8,
    location: 'Raj Vihar Circle',
    verified: true,
    nabl: true
  },
  lucid: {
    name: 'Lucid Diagnostics',
    image: 'https://lh3.googleusercontent.com/p/AF1QipN3-yJ1-k1-1-1-1-1-1-1-1-1-1-1-1-1-1',
    rating: 4.6,
    location: 'Gayatri Estate',
    verified: true,
    nabl: true
  },
  thyrocare: {
    name: 'Thyrocare',
    image: 'https://assets.pharmeasy.in/web-assets/_next/icons/thyrocare.svg',
    rating: 4.5,
    location: 'N.R. Peta',
    verified: true,
    nabl: true
  },
  apollo: {
    name: 'Apollo Medical Centre',
    image: 'https://images.apollo247.in/images/ui_revamp/apollo_diagnostics_logo.png',
    rating: 4.9,
    location: 'Park Road',
    verified: true,
    nabl: true
  },
  redcliffe: {
    name: 'Redcliffe Labs',
    image: 'https://redcliffelabs.com/assets/images/logo.png',
    rating: 4.4,
    location: 'Old Bus Stand',
    verified: true,
    nabl: true
  }
};

export const DOCTORS: Doctor[] = [
  // General Physician
  {
    id: 'd1',
    name: 'Dr. Ramesh Gupta',
    specialty: 'General Physician',
    qualification: 'MBBS, MD',
    experience: '15 Yrs',
    languages: ['Telugu', 'English'],
    rating: 4.9,
    reviews: 120,
    fee: 500,
    available: true,
    image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg',
    hospital: 'Sunshine Clinic',
    location: 'Park Road, Kurnool',
    about: 'Dr. Ramesh is a senior physician specializing in fever, diabetes management, and general health checkups.',
    variants: [
      { type: 'Clinic Visit', price: 500, duration: '15 min', available: true, nextSlot: 'Today, 11:30 AM', icon: 'apartment' },
      { type: 'Video Consult', price: 350, duration: '15 min', available: true, nextSlot: 'Today, 02:00 PM', icon: 'videocam' },
      { type: 'Home Visit', price: 800, duration: '30 min', available: true, nextSlot: 'Tomorrow, 09:00 AM', icon: 'home_health' }
    ]
  },
  {
    id: 'd2',
    name: 'Dr. Priya Sharma',
    specialty: 'General Physician',
    qualification: 'MBBS, DNB',
    experience: '8 Yrs',
    languages: ['Hindi', 'English', 'Telugu'],
    rating: 4.7,
    reviews: 89,
    fee: 400,
    available: true,
    image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
    hospital: 'City Care Hospital',
    location: 'Gayatri Estate, Kurnool',
    variants: [
      { type: 'Clinic Visit', price: 400, duration: '15 min', available: true, nextSlot: 'Today, 05:00 PM', icon: 'apartment' },
      { type: 'Video Consult', price: 300, duration: '15 min', available: true, nextSlot: 'Today, 06:30 PM', icon: 'videocam' }
    ]
  },
  // Cardiologist
  {
    id: 'd3',
    name: 'Dr. Anita Rao',
    specialty: 'Cardiologist',
    qualification: 'MD, DM (Cardio)',
    experience: '12 Yrs',
    languages: ['Telugu', 'English'],
    rating: 4.9,
    reviews: 210,
    fee: 800,
    available: true,
    image: 'https://t3.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnXVg5.jpg',
    hospital: 'Heart Care Center',
    location: 'N.R. Peta, Kurnool',
    variants: [
      { type: 'Clinic Visit', price: 800, duration: '20 min', available: true, nextSlot: 'Tomorrow, 10:00 AM', icon: 'apartment' },
      { type: 'Video Consult', price: 600, duration: '15 min', available: true, nextSlot: 'Today, 08:00 PM', icon: 'videocam' }
    ]
  },
  // Orthopedic
  {
    id: 'd4',
    name: 'Dr. Venkatesh Prasad',
    specialty: 'Orthopedic',
    qualification: 'MS (Ortho)',
    experience: '20 Yrs',
    languages: ['Telugu', 'English'],
    rating: 4.8,
    reviews: 150,
    fee: 700,
    available: false,
    image: 'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg',
    hospital: 'Ortho Plus Hospital',
    location: 'Raj Vihar, Kurnool',
    variants: [
      { type: 'Clinic Visit', price: 700, duration: '15 min', available: true, nextSlot: 'Next Monday', icon: 'apartment' }
    ]
  },
  // Dentist
  {
    id: 'd5',
    name: 'Dr. Suresh Reddy',
    specialty: 'Dentist',
    qualification: 'BDS, MDS',
    experience: '6 Yrs',
    languages: ['Telugu', 'English'],
    rating: 4.5,
    reviews: 45,
    fee: 300,
    available: true,
    image: 'https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg',
    hospital: 'Smile Dental Clinic',
    location: 'Old Bus Stand, Kurnool',
    variants: [
      { type: 'Clinic Visit', price: 300, duration: '30 min', available: true, nextSlot: 'Today, 04:00 PM', icon: 'apartment' }
    ]
  }
];

export const MEDICINES: Medicine[] = [
  // Pain Relief / Fever
  {
    id: 'm1',
    name: 'Dolo 650 Tablet',
    category: 'Pain Relief',
    manufacturer: 'Micro Labs Ltd',
    packSize: 'Strip of 15 Tablets',
    price: 30.00,
    mrp: 35.00,
    discount: '14% OFF',
    deliveryTime: 'Today',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/322802315/PI/YB/ZT/13564962/dolo-650-mg-tablet-500x500.jpg',
    description: 'Dolo 650 Tablet is a common medicine used to treat aches and pains. It is also used to reduce a high temperature (fever).',
    uses: ['Fever', 'Headache', 'Muscle Pain'],
    sideEffects: ['Nausea', 'Vomiting']
  },
  {
    id: 'm2',
    name: 'Combiflam Tablet',
    category: 'Pain Relief',
    manufacturer: 'Sanofi India',
    packSize: 'Strip of 20 Tablets',
    price: 45.00,
    mrp: 52.00,
    discount: '13% OFF',
    deliveryTime: 'Today',
    image: 'https://newassets.apollo247.com/pub/media/catalog/product/c/o/com0019_1_1.jpg',
    description: 'Combiflam Tablet contains two painkiller medicines. They work together to reduce pain, fever, and inflammation.',
    uses: ['Pain relief', 'Fever'],
    sideEffects: ['Heartburn', 'Indigestion']
  },
  // Diabetes
  {
    id: 'm3',
    name: 'Glycomet 500mg',
    category: 'Diabetes',
    manufacturer: 'USV Ltd',
    packSize: 'Strip of 10 Tablets',
    price: 22.00,
    mrp: 25.00,
    discount: '12% OFF',
    deliveryTime: 'Tomorrow',
    image: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/b2g9w1b1p1h1r1.jpg',
    isPrescriptionRequired: true
  },
  {
    id: 'm4',
    name: 'Janumet 50/500mg',
    category: 'Diabetes',
    manufacturer: 'MSD Pharmaceuticals',
    packSize: 'Strip of 15 Tablets',
    price: 350.00,
    mrp: 400.00,
    discount: '12% OFF',
    deliveryTime: '2 Days',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/MV/QO/LI/3699158/janumet-50-mg-500-mg-tablet-500x500.jpg',
    isPrescriptionRequired: true
  },
  // Cardiac
  {
    id: 'm5',
    name: 'Telma 40 Tablet',
    category: 'Cardiac',
    manufacturer: 'Glenmark',
    packSize: 'Strip of 15 Tablets',
    price: 110.00,
    mrp: 140.00,
    discount: '21% OFF',
    deliveryTime: 'Today',
    image: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/ka1d2x1z1y1.jpg',
    isPrescriptionRequired: true
  },
  {
    id: 'm6',
    name: 'Atorva 10 Tablet',
    category: 'Cardiac',
    manufacturer: 'Zydus Cadila',
    packSize: 'Strip of 15 Tablets',
    price: 95.00,
    mrp: 110.00,
    discount: '14% OFF',
    deliveryTime: 'Tomorrow',
    image: 'https://newassets.apollo247.com/pub/media/catalog/product/a/t/ato0048_1.jpg',
    isPrescriptionRequired: true
  },
  // Supplements
  {
    id: 'm7',
    name: 'Shelcal 500',
    category: 'Supplements',
    manufacturer: 'Torrent Pharma',
    packSize: 'Strip of 15 Tablets',
    price: 115.00,
    mrp: 130.00,
    discount: '10% OFF',
    deliveryTime: 'Today',
    image: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/b1g9w1b1p1h1r1.jpg'
  },
  {
    id: 'm8',
    name: 'Zincovit Syrup',
    category: 'Supplements',
    manufacturer: 'Apex Labs',
    packSize: '200ml Bottle',
    price: 135.00,
    mrp: 150.00,
    discount: '10% OFF',
    deliveryTime: 'Today',
    image: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/h1g9w1b1p1h1r1.jpg'
  }
];

export const SCAN_CENTERS: ScanCenter[] = [
  {
    id: 's1',
    name: CENTERS_DB.vijaya.name,
    location: CENTERS_DB.vijaya.location,
    distance: '3.0 km',
    rating: CENTERS_DB.vijaya.rating,
    reviews: 340,
    verified: true,
    nabl: true,
    image: CENTERS_DB.vijaya.image,
    tests: []
  }
];

export const MEDICAL_SCANS: MedicalScan[] = [
  {
    id: 'ms1',
    name: 'MRI Brain (Plain)',
    category: 'MRI',
    bodyPart: 'Head/Brain',
    description: 'Magnetic Resonance Imaging of the brain to detect abnormalities.',
    price: 3200,
    mrp: 4500,
    discount: '30% OFF',
    image: 'https://cdn-icons-png.flaticon.com/512/3021/3021870.png',
    variants: [
      { centerId: 'vijaya', centerName: CENTERS_DB.vijaya.name, centerImage: CENTERS_DB.vijaya.image, price: 3500, mrp: 4500, reportTime: '24 Hours', rating: 4.8, nabl: true, distance: '3.0 km', nextSlot: 'Today, 04:00 PM' },
      { centerId: 'lucid', centerName: CENTERS_DB.lucid.name, centerImage: CENTERS_DB.lucid.image, price: 3200, mrp: 4000, reportTime: '20 Hours', rating: 4.6, nabl: true, distance: '1.2 km', nextSlot: 'Today, 02:00 PM' },
      { centerId: 'apollo', centerName: CENTERS_DB.apollo.name, centerImage: CENTERS_DB.apollo.image, price: 4000, mrp: 5000, reportTime: '12 Hours', rating: 4.9, nabl: true, distance: '2.5 km', nextSlot: 'Tomorrow, 10:00 AM' },
    ]
  },
  {
    id: 'ms2',
    name: 'CT Scan - Chest (HRCT)',
    category: 'CT Scan',
    bodyPart: 'Chest',
    description: 'High-Resolution CT Scan of the chest, commonly used for lung infections.',
    price: 2500,
    mrp: 3500,
    discount: '28% OFF',
    image: 'https://cdn-icons-png.flaticon.com/512/994/994928.png',
    variants: [
      { centerId: 'thyrocare', centerName: CENTERS_DB.thyrocare.name, centerImage: CENTERS_DB.thyrocare.image, price: 2500, mrp: 3500, reportTime: '6 Hours', rating: 4.5, nabl: true, distance: '3.2 km', nextSlot: 'Today, 03:30 PM' },
      { centerId: 'vijaya', centerName: CENTERS_DB.vijaya.name, centerImage: CENTERS_DB.vijaya.image, price: 2800, mrp: 3800, reportTime: '8 Hours', rating: 4.8, nabl: true, distance: '3.0 km', nextSlot: 'Today, 05:00 PM' }
    ]
  },
  {
    id: 'ms3',
    name: 'Ultrasound Whole Abdomen',
    category: 'Ultrasound',
    bodyPart: 'Abdomen',
    description: 'Ultrasound scan to examine organs in the abdomen like liver, kidney, etc.',
    price: 750,
    mrp: 1200,
    discount: '37% OFF',
    image: 'https://cdn-icons-png.flaticon.com/512/2857/2857753.png',
    variants: [
      { centerId: 'redcliffe', centerName: CENTERS_DB.redcliffe.name, centerImage: CENTERS_DB.redcliffe.image, price: 750, mrp: 1200, reportTime: 'Immediate', rating: 4.4, nabl: true, distance: '4.0 km', nextSlot: 'Tomorrow, 09:00 AM' },
      { centerId: 'vijaya', centerName: CENTERS_DB.vijaya.name, centerImage: CENTERS_DB.vijaya.image, price: 900, mrp: 1500, reportTime: '4 Hours', rating: 4.8, nabl: true, distance: '3.0 km', nextSlot: 'Today, 06:00 PM' }
    ]
  },
  {
    id: 'ms4',
    name: 'X-Ray Chest PA View',
    category: 'X-Ray',
    bodyPart: 'Chest',
    description: 'Digital X-Ray for chest examination.',
    price: 350,
    mrp: 600,
    discount: '40% OFF',
    image: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png',
    variants: [
      { centerId: 'lucid', centerName: CENTERS_DB.lucid.name, centerImage: CENTERS_DB.lucid.image, price: 350, mrp: 550, reportTime: '30 Mins', rating: 4.6, nabl: true, distance: '1.2 km', nextSlot: 'Walk-in' },
      { centerId: 'apollo', centerName: CENTERS_DB.apollo.name, centerImage: CENTERS_DB.apollo.image, price: 500, mrp: 800, reportTime: '30 Mins', rating: 4.9, nabl: true, distance: '2.5 km', nextSlot: 'Walk-in' }
    ]
  }
];

export const LAB_TESTS: LabTest[] = [
  {
    id: 'l1',
    name: 'Full Body Checkup',
    parameterCount: 60,
    description: 'Includes Liver, Kidney, Thyroid, Sugar, CBC & more.',
    price: 899,
    mrp: 2000,
    discount: '55% OFF',
    tags: ['Popular', 'Fasting'],
    category: 'Health Packages',
    reportTime: '24 Hours',
    fasting: '10-12 Hours',
    variants: [
      { centerId: 'redcliffe', centerName: 'Redcliffe Labs', centerImage: CENTERS_DB.redcliffe.image, price: 899, mrp: 2000, reportTime: '24 Hours', rating: 4.4, nabl: true, distance: '4.0 km' },
      { centerId: 'thyrocare', centerName: 'Thyrocare', centerImage: CENTERS_DB.thyrocare.image, price: 999, mrp: 2200, reportTime: '18 Hours', rating: 4.5, nabl: true, distance: '3.2 km' },
      { centerId: 'apollo', centerName: 'Apollo Medical Centre', centerImage: CENTERS_DB.apollo.image, price: 1499, mrp: 3000, reportTime: '24 Hours', rating: 4.9, nabl: true, distance: '2.5 km' },
      { centerId: 'vijaya', centerName: 'Vijaya Diagnostic', centerImage: CENTERS_DB.vijaya.image, price: 1299, mrp: 2500, reportTime: '20 Hours', rating: 4.8, nabl: true, distance: '3.0 km' }
    ]
  },
  {
    id: 'l2',
    name: 'Diabetes Screening',
    parameterCount: 3,
    description: 'HbA1c, Fasting Blood Sugar, Average Blood Glucose',
    price: 499,
    mrp: 999,
    discount: '50% OFF',
    tags: ['Chronic'],
    category: 'Diabetes',
    reportTime: '12 Hours',
    fasting: '8-10 Hours',
    variants: [
       { centerId: 'thyrocare', centerName: 'Thyrocare', centerImage: CENTERS_DB.thyrocare.image, price: 499, mrp: 999, reportTime: '12 Hours', rating: 4.5, nabl: true },
       { centerId: 'lucid', centerName: 'Lucid Diagnostics', centerImage: CENTERS_DB.lucid.image, price: 550, mrp: 1100, reportTime: '10 Hours', rating: 4.6, nabl: true }
    ]
  },
  {
    id: 'l3',
    name: 'Thyroid Profile Total',
    parameterCount: 3,
    description: 'T3, T4, TSH',
    price: 399,
    mrp: 800,
    discount: '50% OFF',
    tags: ['Women'],
    category: 'Thyroid',
    reportTime: '24 Hours',
    fasting: 'Not Required',
    variants: [
      { centerId: 'redcliffe', centerName: 'Redcliffe Labs', centerImage: CENTERS_DB.redcliffe.image, price: 399, mrp: 800, reportTime: '24 Hours', rating: 4.4, nabl: true },
      { centerId: 'vijaya', centerName: 'Vijaya Diagnostic', centerImage: CENTERS_DB.vijaya.image, price: 450, mrp: 900, reportTime: '12 Hours', rating: 4.8, nabl: true }
    ]
  },
  {
    id: 'l4',
    name: 'Lipid Profile',
    parameterCount: 8,
    description: 'Cholesterol, HDL, LDL, Triglycerides',
    price: 599,
    mrp: 1200,
    discount: '50% OFF',
    tags: ['Heart'],
    category: 'Heart',
    reportTime: '24 Hours',
    fasting: '12 Hours',
    variants: [
       { centerId: 'apollo', centerName: 'Apollo Medical Centre', centerImage: CENTERS_DB.apollo.image, price: 650, mrp: 1300, reportTime: '24 Hours', rating: 4.9, nabl: true },
       { centerId: 'thyrocare', centerName: 'Thyrocare', centerImage: CENTERS_DB.thyrocare.image, price: 599, mrp: 1200, reportTime: '24 Hours', rating: 4.5, nabl: true }
    ]
  },
  {
    id: 'l5',
    name: 'Vitamin Deficiency Profile',
    parameterCount: 2,
    description: 'Vitamin D, Vitamin B12',
    price: 1299,
    mrp: 2500,
    discount: '48% OFF',
    tags: ['Lifestyle'],
    category: 'Vitamins',
    reportTime: '48 Hours',
    fasting: 'Not Required',
     variants: [
       { centerId: 'lucid', centerName: 'Lucid Diagnostics', centerImage: CENTERS_DB.lucid.image, price: 1299, mrp: 2500, reportTime: '36 Hours', rating: 4.6, nabl: true },
       { centerId: 'vijaya', centerName: 'Vijaya Diagnostic', centerImage: CENTERS_DB.vijaya.image, price: 1400, mrp: 2800, reportTime: '24 Hours', rating: 4.8, nabl: true }
    ]
  }
];

export const BOOKINGS = [
  {
    id: 'b1',
    type: 'doctor',
    title: 'Dr. Ramesh Gupta',
    subtitle: 'General Physician',
    date: 'Today, 4:30 PM',
    status: 'Confirmed',
    amount: 500,
    image: DOCTORS[0].image
  },
  {
    id: 'b2',
    type: 'medicine',
    title: 'Medicine Delivery',
    subtitle: '3 Items • Dolo 650, Telma 40...',
    date: 'Arriving Tomorrow',
    status: 'Shipped',
    amount: 450,
    image: 'https://cdn-icons-png.flaticon.com/512/2965/2965300.png'
  },
  {
    id: 'b3',
    type: 'lab',
    title: 'Full Body Checkup',
    subtitle: 'Home Sample Collection',
    date: '15 Oct, 7:00 AM',
    status: 'Completed',
    amount: 899,
    image: 'https://cdn-icons-png.flaticon.com/512/3004/3004458.png'
  }
];

export const HOME_CARE_SERVICES: HomeCareService[] = [
  {
    id: 'hc1',
    title: 'Home Nursing Care',
    localTitle: 'ఇంటి నర్సింగ్ సేవలు',
    category: 'Nursing',
    description: 'Professional nursing support for post-op recovery, wound dressing, and injection services at home.',
    price: 800,
    priceUnit: 'day',
    rating: 4.8,
    reviews: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRVVRBYKTOxI4f8_UtXdCzFhQUjbuKmCjXl_GnuB9lg_SYOReGufCh1pkYObSnfhFkLBdMGgWshly2RVl_Gr0xDnxHaQ8f7-oGPARkIABDJcOAdzrlhExZZlSx5Sq3VVWllAoi38e13fWKK7IWYdzpx-VAw-QjF6gu-__-pl9oWn1TFktnKyZmPN-AWfoHZMOYXOLU11MpaeuimnyUSbikGpFx6loN5RL1ILM_scLxW3880Fl7aQHtg6Zw5eGAMZGCm7B-qYkfXzg',
    features: ['Vitals Monitoring', 'Injection Administration', 'Wound Dressing', 'Medication Management'],
    isVerified: true,
    plans: [
      { id: 'p1', title: 'Daily Visit', duration: '1 Day', price: 800, originalPrice: 1000 },
      { id: 'p2', title: 'Weekly Care', duration: '7 Days', price: 5000, originalPrice: 5600, label: 'Most Popular', savings: 600 },
      { id: 'p3', title: 'Monthly Care', duration: '30 Days', price: 20000, originalPrice: 24000, savings: 4000 }
    ]
  },
  {
    id: 'hc2',
    title: 'Physiotherapy',
    localTitle: 'ఫిజియోథెరపీ సేవలు',
    category: 'Physiotherapy',
    description: 'Expert physio for back pain, paralysis recovery, and joint mobility issues.',
    price: 500,
    priceUnit: 'session',
    rating: 4.9,
    reviews: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5xmPHWcMe-mmwBoonOhSdlmu_DSAc8--2jg2IGoo8XMETXIqt_epeehb94TIOFFkJfSxMHoqp86sbqe8CqVTwIfsfBEE9WKZWT7Fr9O18_bkFbqSHGNnoyUSViPyUunMj47DpnqT33r_QA0-9cZVjTpE0nJtwrR9hU2hROYa6mVedc9yFy-p5gCXJdu9iSa69WAHwG3zzcZ6qsQGbX_Pw0HHhRjGQVzgdrWT1gWFrlWy5BFmNsbRn043yQWnOeLNTbjSQl4Rw0SI',
    features: ['Post-surgery Rehab', 'Back & Neck Pain', 'Paralysis Care', 'Sports Injury'],
    available: true,
    plans: [
      { id: 'p1', title: 'Single Session', duration: '1 Session', price: 500, originalPrice: 600 },
      { id: 'p2', title: 'Rehab Package', duration: '10 Sessions', price: 4500, originalPrice: 5000, label: 'Recommended', savings: 500 }
    ]
  },
  {
    id: 'hc3',
    title: 'Doctor Home Visit',
    localTitle: 'డాక్టర్ ఇంటి సందర్శన',
    category: 'Doctor Visit',
    description: 'General physician consultation at your home for routine checkups and acute illness.',
    price: 1000,
    priceUnit: 'visit',
    rating: 4.7,
    reviews: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Krcd5_LpG9boaZrwFXFxtkxCvQikfgQOMbOeot-5Yyd7ujDkkfrh98Nxwhr6RQHOZE385n4QA4eK_kc-VdhoeEINgtM7wP6DamdJQ5QvdPgLo60xOk6ntgjBgJXYoaMDcMmm4VllUj7KwnBmfvlU6fsSSomQqIQYxiMHGwWJpQiTNxVdTKY4QSjFEmxEalHnl1xTSYP8hOe1LeA2g4Ey_DL0yCQnNlkgQxqKNenl-B9DQ_fiDQdW5O0Ken5Ikpv-bSQ6y9AcAjQ',
    features: ['Routine Checkup', 'BP & Sugar Check', 'Viral Fever Treatment', 'Elderly Assessment'],
    available: true
  },
  {
    id: 'hc4',
    title: 'Lab Tests at Home',
    localTitle: 'ఇంటి వద్ద ల్యాబ్ పరీక్షలు',
    category: 'Lab',
    description: 'Blood sample collection from home. Reports delivered online in 24 hours.',
    price: 399,
    priceUnit: 'start',
    rating: 4.5,
    reviews: 500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_-Q9oO5rh4ligiI6_oPPuQSmOFXcb340-42qfwoygsZxC5ajmdz36oGCIA2ZmUeY1qw_wVkkYRVU7Z7mkuP-fp8y9qrLXQH_7h4e0fgPFHrWUTUzIOfhdV9NXXuasPQQVnyaKeEqIdxi9TDaoWmtySTeyaA-qYMCLs7T4weFZukshXur1qOxYe-1WqRs2W_AclshE5z2Gtw8EBz1P6k01cQ3dZ5EeVl4Ynf_fnJ4I4OcbAOnNPt1dbAg4QjFxlzG6bAhj3hauI3Y',
    features: ['Safe Collection', 'NABL Labs', 'Online Reports', 'Affordable Packages'],
    isVerified: true
  }
];

export const PHYSIO_SERVICES: PhysioService[] = [
  {
    id: 'ps1',
    title: 'Orthopedic Physiotherapy',
    description: 'Specialized treatment for bone, joint, and muscle pain relief and recovery.',
    price: 500,
    duration: '60 Mins',
    rating: 4.8,
    reviews: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkjnbMMPGgvq0Tv3dW-m2Ga6uZ17rgW10sjEPMqL2XxFF7WoItSChkWdmV_VbOi0HkLdLEPpnMCdkHEKp94H4y8nlv8cwr_f0eXtSxM5zqBcHU76srqC2cZImaxPKwCiPVu2k9HIADrGkNX4x2eIucvT32d2I0NVOnK5KoZbPtPg45aGK_IgQ6qQwGD1H3Q_lGxDYk2hFUpW8tYWZyNm_jb8s1PpJaIWWveMnRJ2r_C2Z9W4y5bCDxlqqPMpjE0Edfm0gVy02Ku_A',
    conditions: ['Back Pain', 'Arthritis', 'Joint Pain', 'Fracture Recovery'],
    homeVisitAvailable: true,
    homeVisitFee: 100,
    plans: [
      { id: 'pp1', title: 'Single Session', duration: '1 Session', price: 500, originalPrice: 600 },
      { id: 'pp2', title: 'Recovery Pack', duration: '7 Sessions', price: 3200, originalPrice: 3500, savings: 300, label: 'Best Value' }
    ]
  },
  {
    id: 'ps2',
    title: 'Post-Stroke Rehabilitation',
    description: 'Comprehensive care to regain mobility, balance and strength after stroke recovery.',
    price: 750,
    duration: '45 Mins',
    rating: 4.9,
    reviews: 32,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi1MzngT22RCZPU_BUVIveBO7f9hrpLqROrch1FK-WPFxbs3yESoJHnoj4D89Y31fd7l4BWFeOW0hTXtbt1otLi4EDHGSJHilaBr-ET6cvQtuYs2CCHIFSMusWhLpWOMaZ04EnT3JmmUxcuphRQfXN5-sQsFjp3L4DsQzWwIyIkzsE4zDccjFdzhhEenKav3ov1vumJNyZczhDiy0UZGYkiFyy1u_Bep_6NGUBq_AjEYVgb-Gg9CHxtvge7DqdMJoErvD9TSP7O5I',
    conditions: ['Paralysis', 'Muscle Weakness', 'Balance Issues', 'Coordination'],
    homeVisitAvailable: true,
    homeVisitFee: 150,
    plans: [
      { id: 'pp1', title: 'Single Session', duration: '1 Session', price: 750, originalPrice: 900 },
      { id: 'pp2', title: 'Neuro Rehab', duration: '15 Sessions', price: 10000, originalPrice: 11250, savings: 1250, label: 'Recommended' }
    ]
  },
  {
    id: 'ps3',
    title: 'Sports Injury Care',
    description: 'Advanced therapy for sprains, tears, and sports-related physical trauma.',
    price: 600,
    duration: '45 Mins',
    rating: 4.7,
    reviews: 28,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzzLUrcoXDrRRqnyBOSNKfi4nVHBg6LLGmlGmTR8P4PQxPOz_mMinGD-AKZqu_275kp8XVUjR-AAHiHViXDvtsYiBWHcK6Zoyy3h85MY6-7CMpzek4WNejZiwAD1aOYGUimyE2GZeOAlAqY37bKNNey3yZe6GQf1tGm2OXONHWFBU4sHc7RUNHXakoJLjTtDjNoT8nCRhNIxloJzau0s9kLQx015sr_55I0M4SyIuFsYzQmi5hvL2747TgghKq5TDf3xYO5C_uwCc',
    conditions: ['Sprains', 'Ligament Tear', 'Muscle Strain', 'Tennis Elbow'],
    homeVisitAvailable: false,
    plans: [
      { id: 'pp1', title: 'Single Session', duration: '1 Session', price: 600, originalPrice: 800 },
      { id: 'pp2', title: 'Athlete Pack', duration: '5 Sessions', price: 2800, originalPrice: 3000, savings: 200 }
    ]
  },
  {
    id: 'ps4',
    title: 'Geriatric Mobility',
    description: 'Gentle exercises designed for seniors to improve balance and reduce fall risk.',
    price: 400,
    duration: '30 Mins',
    rating: 4.9,
    reviews: 60,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEbaWT9TcmC-iXmiPHANNFm4tQg2CyUS0u3sNyiKNPdR6giyLvz3V5c8iBiOPZf9xMU70vpxzkzKg-BKs_HJIPv7QNiBL-a6SGk8fdVmpn-g7MdqVnrTxA3mPc5Jahso4vZr7IGBMjNSAADEhbWeOGkwg54NrsNvszZiLM64n1Nl_QO54g9YmFfDT3OwWSwyrD45hyYp0immsrQDyCRPcvfMBDnN8wN-wTSvrue_KGTB04joVh2BYvLBcAVE85b0VbD0mFDO4g33k',
    conditions: ['Balance Issues', 'Fall Prevention', 'General Weakness', 'Walking Difficulty'],
    homeVisitAvailable: true,
    homeVisitFee: 50,
    plans: [
      { id: 'pp1', title: 'Single Session', duration: '1 Session', price: 400, originalPrice: 500 },
      { id: 'pp2', title: 'Monthly Care', duration: '12 Sessions', price: 4000, originalPrice: 4800, savings: 800, label: 'Best Value' }
    ]
  }
];

export const HOSPITALS: Hospital[] = [
  {
    id: 'h1',
    name: 'Government General Hospital',
    type: 'Multi-Specialty',
    location: 'Budhawara Peta, Kurnool',
    distance: '1.2 km',
    rating: 4.2,
    reviews: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9O-hkd7Ee2G5J5KNFQ2kksrxNwY4tsXmi6BwFi66CRC9pps7eixfrXhpTEieeaHxhAWCRnLfAkxKXOwoBLmHzdJqXflmWDJu8Y1tPm9Vs2xaelwEJvrRNriH2KdQ1IMKnhaWippucIA8LUqluP78wO-Q8OvqOGMbacTrDp4cjwlpOyvYJ76d0EMhIgUK5ut_DpvemzvSI3FStm_Cf7Vw8DoU_xPvf-0sTxS_WrCLJaXu36aiC8cYTU4htJgfRpGUQK3duAU9i9WI',
    open24x7: true,
    insuranceAccepted: true,
    specialties: ['Cardiology', 'General Medicine', 'Trauma', 'Pediatrics']
  },
  {
    id: 'h2',
    name: 'Kurnool Heart Care Centre',
    type: 'Cardiology',
    location: 'Gayatri Estate, Kurnool',
    distance: '2.4 km',
    rating: 4.8,
    reviews: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMvMGdyFYzkvBqrLX7CghjdWIf39Sobjs_aYZBJSDx2Hm81ClHoPWyeIi2W1Qf0NlZgOIlguxkiMLLdKX6mPgg8KyarRq9zOhd_IwzKCSldeiqhcu2byLUbTs_JvjOLBUlG6cXbeD315chevZ_uXLb_1RTRJYKzdJzKRXQpfhm4qM-agBGBcRZm9EySTrgcMR_SAZ4-3Khy-10qBkD81s7D0tcTiA2wG2rQe6ri4xX3u92KuANSIUEouk5lflHJKT0ENPzMJOg8n0',
    open24x7: true,
    insuranceAccepted: true,
    specialties: ['Cardiology', 'Critical Care']
  },
  {
    id: 'h3',
    name: 'Viswabharathi Medical',
    type: 'General',
    location: 'N.H. 18, Penchikalapadu',
    distance: '5.0 km',
    rating: 4.0,
    reviews: 200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRD_nkCr4PHCdc98E4aYHdgb2NrCLHxHdxyNGFxQ6W7YFXfUMk8zO_5kjM9nmMegkprSBWZvQNxkpaMqf1PBEi1vA7pNcBDBp_Sj8qPJSipfJj_eUfPr_7HOHyWvWDeBHCvnBAR69NMXmMSppBmGyDtrp3EktkTOA17Sf-dX4Vyl6Y7RiMWmgsEMy-Dzv_cnvkHjSYNeVW_Inlvt0qyIzCMdMxiZ4no7NhEuQQEVX0bmWIZeCrRghYTAJxGLTs8RodS0cFGDj-2SE',
    open24x7: true,
    insuranceAccepted: false,
    specialties: ['General', 'Emergency']
  },
  {
    id: 'h4',
    name: 'Vasan Eye Care',
    type: 'Ophthalmology',
    location: 'Park Road, Kurnool',
    distance: '1.5 km',
    rating: 4.5,
    reviews: 90,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJYDIg4ygZ-O722EJkg74VE8tRLoqSHlCg7Ir8VaguxTFU0eTr62TVi6TX3W_K0FS7xkFck9NHqWredqKXcBMFp_DFcfNE4UNa2G7EjobufJbkus6V7-Va_nt8kor9J8F3dQYs-4EQVLQGe17RooCoeYEH68g5LA-oghzZUWy2XHaAB47MW_ucJu5Mvo-L9iPZfh-_mVk21i7xSLsL_nwT3SSDlMcp7PmvFrWVdnf8zyGyjjsAjD6m2LtptMyI3ua9dmNGeaUTDoY',
    open24x7: false,
    insuranceAccepted: true,
    specialties: ['Ophthalmology']
  }
];

export const DIABETES_PACKAGES: DiabetesPackage[] = [
  {
    id: 'dp1',
    title: 'Basic Care',
    description: 'Essential monitoring',
    price: 799,
    mrp: 1499,
    features: ['Fasting Blood Sugar', 'Lipid Profile (Cholesterol)', 'Doctor Consultation'],
    isPopular: true
  },
  {
    id: 'dp2',
    title: 'Complete Care',
    description: '360° health assessment',
    price: 1499,
    mrp: 2999,
    features: ['Everything in Basic', 'HbA1c + Urine Test', 'Kidney Function Test'],
    isPopular: false
  }
];
