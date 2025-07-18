import { Suspense } from "react";
import { EmptyView } from "@/components/shared/empty-view";
import { Package } from "lucide-react";
import { pageMainContainer } from "@/core/styles/page-containers.style";
import { cn } from "@/lib/utils";
import { OrderActions } from "@/features/admin/orders/components/order-actions";
import { OrderFilters } from "@/features/admin/orders/components/order-filters";
import { DataTable } from "@/components/shared/data-table";
import { Order, orderColumns } from "@/components/shared/columns";
import { SearchInput } from "@/components/shared/search-input";
import { OrderTabsFilters } from "@/features/admin/orders/components/order-tabs-filters";

const mockOrders: Order[] = [
  {
    id: 1,
    createdAt: "2025-01-01T10:00:00Z",
    customerName: "John Doe",
    type: "regular",
    status: "pending",
    paymentMethod: "Credit Card",
    amount: 100,
    slotInfo: "10:00 AM",
    shippingMethod: "Standard",
  },
  {
    id: 2,
    createdAt: "2025-01-02T14:30:00Z",
    customerName: "Jane Smith",
    type: "reservation",
    status: "completed",
    paymentMethod: "Credit Card",
    amount: 0, // reservations often don’t have an amount yet
    slotInfo: "2025-01-05T19:00:00Z",
    shippingMethod: null, // reservations don’t have shipping
  },
];

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
      <div className="flex flex-col sm:flex-row items-start md:items-center justify-between gap-4">
        <OrderFilters />
        <OrderActions />
      </div>

      {/* Tabs Status */}
      {/* search input */}
      <SearchInput className="w-full max-w-sm" />

      <Suspense fallback={<div>Loading...</div>}>
        {mockOrders.length > 0 ? (
          <div>
            <OrderTabsFilters />
            <DataTable columns={orderColumns} data={mockOrders} />
          </div>
        ) : (
          <EmptyView
            title="No orders yet"
            description="When customers place orders, they'll appear here. Start by creating a new order or wait for customers to make purchases."
            icon={Package}
          />
        )}
      </Suspense>
    </div>
  );
}
