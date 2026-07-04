import { Customer, Vehicle } from '@/types';

export const customerService = {
  async getProfile(): Promise<Customer> {
    throw new Error('Customer service not yet implemented');
  },

  async updateProfile(data: Partial<Customer>): Promise<Customer> {
    throw new Error('Customer service not yet implemented');
  },

  async getVehicles(): Promise<Vehicle[]> {
    throw new Error('Customer service not yet implemented');
  },

  async getVehicleById(id: string): Promise<Vehicle> {
    throw new Error('Customer service not yet implemented');
  },

  async addVehicle(data: Partial<Vehicle>): Promise<Vehicle> {
    throw new Error('Customer service not yet implemented');
  },

  async updateVehicle(id: string, data: Partial<Vehicle>): Promise<Vehicle> {
    throw new Error('Customer service not yet implemented');
  },

  async deleteVehicle(id: string): Promise<void> {
    throw new Error('Customer service not yet implemented');
  },

  async getNotifications(page?: number): Promise<any> {
    throw new Error('Customer service not yet implemented');
  },

  async markNotificationAsRead(id: string): Promise<void> {
    throw new Error('Customer service not yet implemented');
  },
};
