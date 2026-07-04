import { InspectionReport } from '@/types';

export const reportService = {
  async getReports(): Promise<InspectionReport[]> {
    throw new Error('Report service not yet implemented');
  },

  async getReportById(id: string): Promise<InspectionReport> {
    throw new Error('Report service not yet implemented');
  },

  async createReport(data: Partial<InspectionReport>): Promise<InspectionReport> {
    throw new Error('Report service not yet implemented');
  },

  async updateReport(id: string, data: Partial<InspectionReport>): Promise<InspectionReport> {
    throw new Error('Report service not yet implemented');
  },

  async deleteReport(id: string): Promise<void> {
    throw new Error('Report service not yet implemented');
  },

  async generatePDF(id: string): Promise<Blob> {
    throw new Error('Report service not yet implemented');
  },

  async uploadPhotos(reportId: string, files: File[]): Promise<string[]> {
    throw new Error('Report service not yet implemented');
  },
};
