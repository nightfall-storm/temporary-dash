export interface Store {
  id: string;
  name: string;
  status: "active" | "draft" | "archived";
  lastUpdate: string;
  previewUrl?: string;
  thumbnail?: string;
  analytics?: {
    visitors: number;
    conversion: number;
    revenue: number;
  };
}

export interface StoreStats {
  totalStores: number;
  activeStores: number;
  totalRevenue: number;
  averageConversion: number;
}
