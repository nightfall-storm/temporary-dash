import { Suspense } from "react";
import { EmptyView } from "@/components/shared/empty-view";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCw, Package } from "lucide-react";
import { pageMainContainer } from "@/core/styles/page-containers.style";
import { cn } from "@/lib/utils";

export default function AdminOrders() {
  return (
    <div className={cn(pageMainContainer)}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Manage and track your customer orders
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Order
          </Button>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <EmptyView
          title="No orders yet"
          description="When customers place orders, they'll appear here. Start by creating a new order or wait for customers to make purchases."
          icon={Package}
          className="mt-8"
        />
      </Suspense>
    </div>
  );
}
