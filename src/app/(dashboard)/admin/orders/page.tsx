import { Suspense } from "react";
import { EmptyView } from "@/components/shared/empty-view";
import { PageHeader } from "@/components/shared/page-header";
import { Package } from "lucide-react";
import { pageMainContainer } from "@/core/styles/page-containers.style";
import { cn } from "@/lib/utils";
import { OrderActions } from "@/features/admin/orders/components/order-actions";
import { OrderFilters } from "@/features/admin/orders/components/order-filters";

export default function AdminOrders() {
  return (
    <div className={cn(pageMainContainer)}>
      {/* title and description */}
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Manage and track your customer orders
          </p>
        </div>
      </div>

      {/* action button & filters */}
      <div className="flex items-center justify-between">
        <OrderFilters />
        <OrderActions />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <EmptyView
          title="No orders yet"
          description="When customers place orders, they'll appear here. Start by creating a new order or wait for customers to make purchases."
          icon={Package}
          centered={true}
        />
      </Suspense>
    </div>
  );
}
