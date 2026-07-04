import { Article } from '@/types';

export const blogService = {
  async getArticles(): Promise<Article[]> {
    throw new Error('Blog service not yet implemented');
  },

  async getArticleBySlug(slug: string): Promise<Article> {
    throw new Error('Blog service not yet implemented');
  },

  async searchArticles(query: string): Promise<Article[]> {
    throw new Error('Blog service not yet implemented');
  },

  async getArticlesByCategory(category: string): Promise<Article[]> {
    throw new Error('Blog service not yet implemented');
  },

  async getFeaturedArticles(): Promise<Article[]> {
    throw new Error('Blog service not yet implemented');
  },

  async createArticle(data: Partial<Article>): Promise<Article> {
    throw new Error('Blog service not yet implemented');
  },

  async updateArticle(id: string, data: Partial<Article>): Promise<Article> {
    throw new Error('Blog service not yet implemented');
  },

  async deleteArticle(id: string): Promise<void> {
    throw new Error('Blog service not yet implemented');
  },
};
