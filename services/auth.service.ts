import { User, Session, LoginFormData, RegisterFormData } from '@/types';

export const authService = {
  async login(credentials: LoginFormData): Promise<Session> {
    throw new Error('Auth service not yet implemented');
  },

  async register(data: RegisterFormData): Promise<User> {
    throw new Error('Auth service not yet implemented');
  },

  async logout(): Promise<void> {
    throw new Error('Auth service not yet implemented');
  },

  async getCurrentUser(): Promise<User> {
    throw new Error('Auth service not yet implemented');
  },

  async refreshToken(): Promise<Session> {
    throw new Error('Auth service not yet implemented');
  },

  async requestPasswordReset(email: string): Promise<void> {
    throw new Error('Auth service not yet implemented');
  },

  async resetPassword(token: string, newPassword: string): Promise<void> {
    throw new Error('Auth service not yet implemented');
  },

  async verifyEmail(token: string): Promise<void> {
    throw new Error('Auth service not yet implemented');
  },
};
