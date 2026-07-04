import { z } from 'zod';

// Auth Schemas
export const loginSchema = z.object({
  email: z.string().email('Adresse e-mail invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

export const registerSchema = z
  .object({
    firstName: z.string().min(2, 'Le prénom est requis'),
    lastName: z.string().min(2, 'Le nom est requis'),
    email: z.string().email('Adresse e-mail invalide'),
    phone: z.string().regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Numéro de téléphone invalide'),
    password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email('Adresse e-mail invalide'),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Le mot de passe doit contenir au least 8 caractères'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

// Contact Form Schema
export const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom est requis'),
  lastName: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Adresse e-mail invalide'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Le sujet est requis'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
});

// Booking Form Schemas
export const bookingStep1Schema = z.object({
  appointmentDate: z.date({ message: 'La date est requise' }),
});

export const bookingStep2Schema = z.object({
  timeSlotId: z.string().min(1, 'L\'heure est requise'),
});

export const bookingStep3Schema = z.object({
  vehicleBrand: z.string().min(1, 'La marque du véhicule est requise'),
  vehicleModel: z.string().min(1, 'Le modèle du véhicule est requis'),
  vehicleYear: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  mileage: z.number().nonnegative('Le kilométrage doit être positif'),
  registrationNumber: z.string().min(1, 'Le numéro d\'immatriculation est requis'),
  vin: z.string().length(17, 'Le VIN doit contenir 17 caractères'),
  fuelType: z.enum(['petrol', 'diesel', 'hybrid', 'electric']),
});

export const bookingStep4Schema = z.object({
  address: z.string().min(5, 'L\'adresse est requise'),
  city: z.string().min(2, 'La ville est requise'),
  zipCode: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
});

export const bookingStep5Schema = z.object({
  inspectionType: z.enum(['basic', 'comprehensive', 'pre-purchase']),
  notes: z.string().optional(),
});

// Profile Update Schema
export const profileSchema = z.object({
  firstName: z.string().min(2, 'Le prénom est requis'),
  lastName: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Adresse e-mail invalide'),
  phone: z.string().regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Numéro de téléphone invalide'),
  address: z.string().optional(),
  city: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

// Review Schema
export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().min(5, 'Le titre est requis'),
  content: z.string().min(20, 'L\'avis doit contenir au moins 20 caractères'),
});

// Article Schema (Admin)
export const articleSchema = z.object({
  title: z.string().min(5, 'Le titre est requis'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Le slug doit être valide'),
  excerpt: z.string().min(20, 'L\'extrait doit contenir au moins 20 caractères'),
  content: z.string().min(100, 'Le contenu doit contenir au moins 100 caractères'),
  category: z.string().min(1, 'La catégorie est requise'),
  tags: z.array(z.string()).min(1, 'Au moins une balise est requise'),
  featured: z.boolean().default(false),
});

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type BookingStep1Data = z.infer<typeof bookingStep1Schema>;
export type BookingStep2Data = z.infer<typeof bookingStep2Schema>;
export type BookingStep3Data = z.infer<typeof bookingStep3Schema>;
export type BookingStep4Data = z.infer<typeof bookingStep4Schema>;
export type BookingStep5Data = z.infer<typeof bookingStep5Schema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type ReviewFormData = z.infer<typeof reviewSchema>;
export type ArticleFormData = z.infer<typeof articleSchema>;
