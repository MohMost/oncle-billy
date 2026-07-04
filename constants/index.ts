// User Roles
export const USER_ROLES = {
  CUSTOMER: 'customer',
  ADMIN: 'admin',
  MECHANIC: 'mechanic',
} as const;

// Inspection Types
export const INSPECTION_TYPES = {
  BASIC: 'basic',
  COMPREHENSIVE: 'comprehensive',
  PRE_PURCHASE: 'pre-purchase',
} as const;

// Inspection Status
export const INSPECTION_STATUS = {
  DRAFT: 'draft',
  COMPLETED: 'completed',
  ARCHIVED: 'archived',
} as const;

// Appointment Status
export const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

// Fuel Types
export const FUEL_TYPES = {
  PETROL: 'petrol',
  DIESEL: 'diesel',
  HYBRID: 'hybrid',
  ELECTRIC: 'electric',
} as const;

// Verdicts
export const VERDICTS = {
  APPROVED: 'approved',
  CONDITIONAL: 'conditional',
  REJECTED: 'rejected',
} as const;

// Item Status
export const ITEM_STATUS = {
  PASS: 'pass',
  FAIL: 'fail',
  WARNING: 'warning',
  NOT_CHECKED: 'not_checked',
} as const;

// Blog Categories
export const BLOG_CATEGORIES = [
  'Maintenance',
  'Safety',
  'Tips',
  'News',
  'Guide',
] as const;

// Inspection Checklist Categories
export const INSPECTION_CATEGORIES = [
  'Exterior',
  'Interior',
  'Engine',
  'Electrical',
  'Safety',
  'Suspension',
  'Brakes',
  'Tires',
] as const;

// Pricing Plans
export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Inspection Basique',
    type: 'basic',
    price: 99,
    description: 'Inspection générale du véhicule',
    features: [
      'Vérification mécanique',
      'État des pneus',
      'Fluides moteur',
      'Rapport PDF',
    ],
  },
  {
    id: 'comprehensive',
    name: 'Inspection Complète',
    type: 'comprehensive',
    price: 199,
    description: 'Inspection détaillée du véhicule',
    features: [
      'Tout de l\'inspection basique',
      'Test d\'électricité complet',
      'Diagnostic OBD',
      'Photos détaillées',
      'Recommandations de réparation',
    ],
  },
  {
    id: 'pre-purchase',
    name: 'Inspection Pré-achat',
    type: 'pre-purchase',
    price: 249,
    description: 'Inspection approfondie avant achat',
    features: [
      'Tout de l\'inspection complète',
      'Estimation de prix',
      'Historique du véhicule',
      'Négociation guidée',
      'Support téléphonique',
    ],
  },
] as const;

// Time Slots
export const TIME_SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
] as const;

// Notification Types
export const NOTIFICATION_TYPES = {
  APPOINTMENT: 'appointment',
  REPORT: 'report',
  PAYMENT: 'payment',
  MESSAGE: 'message',
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PRICING: '/pricing',
  CONTACT: '/contact',
  BLOG: '/blog',
  LOGIN: '/login',
  REGISTER: '/register',
  BOOK: '/book-inspection',
  DASHBOARD: '/dashboard',
  APPOINTMENTS: '/appointments',
  REPORTS: '/reports',
  PROFILE: '/profile',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_APPOINTMENTS: '/admin/appointments',
  ADMIN_REPORTS: '/admin/reports',
} as const;

// Company Info
export const COMPANY_INFO = {
  NAME: 'Oncle Billy',
  EMAIL: 'contact@onclebilly.fr',
  PHONE: '+33 1 23 45 67 89',
  ADDRESS: '123 Avenue de la République, 75011 Paris',
  FOUNDED: 2015,
  HOURS: 'Lun - Ven: 8h00 - 18h00\nSam: 9h00 - 17h00\nDim: Fermé',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/onclebilly',
  INSTAGRAM: 'https://instagram.com/onclebilly',
  LINKEDIN: 'https://linkedin.com/company/oncle-billy',
  TWITTER: 'https://twitter.com/onclebilly',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/auth',
  APPOINTMENTS: '/appointments',
  REPORTS: '/reports',
  CUSTOMERS: '/customers',
  REVIEWS: '/reviews',
  ARTICLES: '/articles',
  PAYMENTS: '/payments',
  AVAILABILITY: '/availability',
} as const;
