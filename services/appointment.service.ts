import { Appointment, TimeSlot, Availability, AppointmentStatus } from '@/types';
import { apiClient } from './api/client';

export const appointmentService = {
  async getAppointments(): Promise<Appointment[]> {
    throw new Error('Appointment service not yet implemented');
  },

  async getAppointmentById(id: string): Promise<Appointment> {
    throw new Error('Appointment service not yet implemented');
  },

  async createAppointment(data: Partial<Appointment>): Promise<Appointment> {
    throw new Error('Appointment service not yet implemented');
  },

  async updateAppointment(id: string, data: Partial<Appointment>): Promise<Appointment> {
    throw new Error('Appointment service not yet implemented');
  },

  async cancelAppointment(id: string): Promise<Appointment> {
    throw new Error('Appointment service not yet implemented');
  },

  async getAvailableTimeSlots(date: Date): Promise<TimeSlot[]> {
    throw new Error('Appointment service not yet implemented');
  },

  async getAvailability(): Promise<Availability[]> {
    throw new Error('Appointment service not yet implemented');
  },

  async bookAppointment(appointmentData: any): Promise<Appointment> {
    throw new Error('Appointment service not yet implemented');
  },
};
