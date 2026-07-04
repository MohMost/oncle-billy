// User & Authentication Types
export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
  MECHANIC = 'mechanic',
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: Date;
}

// Customer Types
export interface Customer extends User {
  role: UserRole.CUSTOMER;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  numberOfVehicles: number;
}

// Vehicle Types
export enum FuelType {
  PETROL = 'petrol',
  DIESEL = 'diesel',
  HYBRID = 'hybrid',
  ELECTRIC = 'electric',
}

export interface Vehicle {
  id: string;
  customerId: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  registrationNumber: string;
  vin: string;
  fuelType: FuelType;
  color: string;
  licensePlate: string;
  createdAt: Date;
  updatedAt: Date;
}

// Appointment Types
export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface TimeSlot {
  id: string;
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  available: boolean;
  date: Date;
}

export interface Appointment {
  id: string;
  customerId: string;
  vehicleId: string;
  inspectionType: 'basic' | 'comprehensive' | 'pre-purchase';
  appointmentDate: Date;
  timeSlot: TimeSlot;
  location: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  inspectionReportId?: string;
}

// Inspection Report Types
export enum InspectionStatus {
  DRAFT = 'draft',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export interface InspectionChecklist {
  category: string;
  items: {
    name: string;
    status: 'pass' | 'fail' | 'warning' | 'not_checked';
    notes?: string;
  }[];
}

export interface InspectionReport {
  id: string;
  appointmentId: string;
  customerId: string;
  vehicleId: string;
  inspectorId: string;
  status: InspectionStatus;
  checklist: InspectionChecklist[];
  overallVerdict: 'approved' | 'conditional' | 'rejected';
  estimatedRepairCost?: number;
  suggestedPrice?: number;
  notes: string;
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

// Blog Types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  featuredImage: string;
  publishedAt: Date;
  updatedAt: Date;
  views: number;
  featured: boolean;
}

// Review Types
export interface Review {
  id: string;
  customerId: string;
  appointmentId: string;
  rating: number; // 1-5
  title: string;
  content: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Payment Types
export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export interface Payment {
  id: string;
  appointmentId: string;
  customerId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod: string;
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'appointment' | 'report' | 'payment' | 'message';
  title: string;
  message: string;
  read: boolean;
  relatedId?: string;
  createdAt: Date;
}

// Availability Types
export interface Availability {
  id: string;
  date: Date;
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  maxAppointments: number;
  currentAppointments: number;
  isActive: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface BookingFormData {
  appointmentDate: Date;
  timeSlot: TimeSlot;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: number;
  mileage: number;
  registrationNumber: string;
  vin: string;
  fuelType: FuelType;
  address: string;
  inspectionType: 'basic' | 'comprehensive' | 'pre-purchase';
  notes?: string;
}
