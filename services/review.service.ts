import { Review } from '@/types';

export const reviewService = {
  async getReviews(): Promise<Review[]> {
    throw new Error('Review service not yet implemented');
  },

  async getReviewById(id: string): Promise<Review> {
    throw new Error('Review service not yet implemented');
  },

  async createReview(data: Partial<Review>): Promise<Review> {
    throw new Error('Review service not yet implemented');
  },

  async updateReview(id: string, data: Partial<Review>): Promise<Review> {
    throw new Error('Review service not yet implemented');
  },

  async deleteReview(id: string): Promise<void> {
    throw new Error('Review service not yet implemented');
  },

  async getReviewStats(): Promise<{ averageRating: number; totalReviews: number }> {
    throw new Error('Review service not yet implemented');
  },
};
