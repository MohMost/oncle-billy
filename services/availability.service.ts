import { Availability } from '@/types';

export const availabilityService = {
  async getAvailability(startDate?: Date, endDate?: Date): Promise<Availability[]> {
    throw new Error('Availability service not yet implemented');
  },

  async getAvailabilityByDate(date: Date): Promise<Availability[]> {
    throw new Error('Availability service not yet implemented');
  },

  async createAvailability(data: Partial<Availability>): Promise<Availability> {
    throw new Error('Availability service not yet implemented');
  },

  async updateAvailability(id: string, data: Partial<Availability>): Promise<Availability> {
    throw new Error('Availability service not yet implemented');
  },

  async deleteAvailability(id: string): Promise<void> {
    throw new Error('Availability service not yet implemented');
  },

  async getUpcomingAvailability(): Promise<Availability[]> {
    throw new Error('Availability service not yet implemented');
  },
};
