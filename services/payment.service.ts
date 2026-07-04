import { Payment } from '@/types';

export const paymentService = {
  async getPayments(): Promise<Payment[]> {
    throw new Error('Payment service not yet implemented');
  },

  async getPaymentById(id: string): Promise<Payment> {
    throw new Error('Payment service not yet implemented');
  },

  async createPayment(appointmentId: string, amount: number): Promise<Payment> {
    throw new Error('Payment service not yet implemented');
  },

  async processPayment(paymentId: string, paymentMethodToken: string): Promise<Payment> {
    throw new Error('Payment service not yet implemented');
  },

  async refundPayment(paymentId: string): Promise<Payment> {
    throw new Error('Payment service not yet implemented');
  },

  async getPaymentStats(): Promise<{ totalRevenue: number; totalTransactions: number }> {
    throw new Error('Payment service not yet implemented');
  },
};
