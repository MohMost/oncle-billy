import { ApiResponse, PaginatedResponse } from '@/types';

class ApiClient {
  private baseUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    throw new Error('API not yet implemented. Backend integration required.');
  }

  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    throw new Error('API not yet implemented. Backend integration required.');
  }

  async put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    throw new Error('API not yet implemented. Backend integration required.');
  }

  async patch<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    throw new Error('API not yet implemented. Backend integration required.');
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    throw new Error('API not yet implemented. Backend integration required.');
  }

  async getPaginated<T>(
    endpoint: string,
    page: number = 1,
    pageSize: number = 10
  ): Promise<PaginatedResponse<T>> {
    throw new Error('API not yet implemented. Backend integration required.');
  }
}

export const apiClient = new ApiClient();
