"use client";

import { format } from "@/core/utils/handle-dates.util";
import { ColumnDef } from "@tanstack/react-table";

export type Order = {
  id: number;
  createdAt: string;
  customerName: string;
  type: "regular" | "reservation";
  status: string;
  paymentMethod: string;
  amount: number;
  slotInfo: string;
  shippingMethod: string | null;
};

export const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ getValue }) => format(getValue() as string),
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => `$${(getValue() as number).toFixed(2)}`,
  },
  {
    accessorKey: "slotInfo",
    header: "Slot / Delivery",
    cell: ({ getValue }) => {
      const slotInfo = getValue() as string;
      const isReservation = slotInfo.includes("T");
      return isReservation
        ? format(slotInfo, {
            dateStyle: "long",
            timeStyle: "short",
          })
        : slotInfo;
    },
  },
  {
    accessorKey: "shippingMethod",
    header: "Shipping",
  },
];
