import { HttpService } from "./http.service";

const http = new HttpService();

class AnalyticsService {
  private collectedData: {
    language?: string;
    cookieEnabled?: boolean;
    processMemoryUsage?: object;
  };

  async init(): Promise<Response> {
    this.collectData();
    return await this.sendData();
  }

  private collectData(): void {
    this.collectedData =
      typeof window !== "undefined"
        ? {
            language: navigator?.language,
            cookieEnabled: navigator?.cookieEnabled,
          }
        : { processMemoryUsage: process.memoryUsage() };
  }

  private async sendData(): Promise<Response> {
    return await http.post(
      "https://jsonplaceholder.typicode.com/posts",
      this.collectedData
    );
  }
}

/**
 * @description Activates analytics.
 */
export async function initializeAnalytics(): Promise<Response> {
  const analyticsService = new AnalyticsService();
  return await analyticsService.init();
}
