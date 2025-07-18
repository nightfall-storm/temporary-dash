import { Suspense } from "react";
import { StoreCard } from "@/features/admin/home/components/store-card";
import { StatsOverview } from "@/features/admin/home/components/stats-overview";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { pageMainContainer } from "@/core/styles/page-containers.style";
import { cn } from "@/lib/utils";

// This would typically come from your API
const mockStats = {
  totalStores: 12,
  activeStores: 8,
  totalRevenue: 125000,
  averageConversion: 2.8,
};

const mockStores = [
  {
    id: "1",
    name: "Summer Collection 2025",
    status: "active",
    lastUpdate: "2024-03-20",
    previewUrl: "/preview/store-1",
    thumbnail: "/64x64.svg",
    analytics: {
      visitors: 1200,
      conversion: 3.2,
      revenue: 15000,
    },
  },
  {
    id: "2",
    name: "Spring Sale Funnel",
    status: "draft",
    lastUpdate: "2024-03-19",
    previewUrl: "/preview/store-2",
    thumbnail: "/64x64.svg",
  },
  {
    id: "3",
    name: "Winter Clearance",
    status: "archived",
    lastUpdate: "2024-03-15",
    previewUrl: "/preview/store-3",
    thumbnail: "/64x64.svg",
    analytics: {
      visitors: 800,
      conversion: 2.5,
      revenue: 8000,
    },
  },
] as const;

export default function AdminHome() {
  return (
    <div className={cn(pageMainContainer)}>
      <PageHeader
        title="Overview"
        description="Manage and monitor your stores performance"
        action={{
          icon: <Plus className="h-4 w-4 mr-2" />,
          label: "New Store",
        }}
      />

      <Suspense fallback={<div>Loading stats...</div>}>
        <StatsOverview stats={mockStats} />
      </Suspense>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Stores</h2>
          <Button variant="outline">View All</Button>
        </div>

        <div className="flex flex-col gap-3">
          {mockStores.map((store) => (
            <Suspense key={store.id} fallback={<div>Loading store...</div>}>
              <StoreCard store={store} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}
