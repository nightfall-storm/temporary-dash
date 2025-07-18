"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  ListFilter,
  Archive,
  CreditCard,
  Hourglass,
  Clock,
  Check,
  Truck,
  PackageCheck,
} from "lucide-react";
import { TAB_STYLES } from "@/core/styles/table-filter-tabs.style";
import { useState } from "react";

/**
 * Order status tab configuration for filtering orders.
 * All labels are in English and use distinct Lucide icons.
 */
const STATUS_TABS = {
  ALL: {
    label: "All",
    icon: <ListFilter className="h-4 w-4 text-zinc-500" />,
  },
  DELETED: {
    label: "Deleted",
    icon: <Archive className="h-4 w-4 text-gray-500" />,
  },
  WAITING_FOR_PAY: {
    label: "Waiting for Pay",
    icon: <CreditCard className="h-4 w-4 text-yellow-600" />,
  },
  WAITING_FOR_REVIEW: {
    label: "Waiting for Review",
    icon: <Hourglass className="h-4 w-4 text-orange-500" />,
  },
  PENDING: {
    label: "Pending",
    icon: <Clock className="h-4 w-4 text-blue-500" />,
  },
  DONE: {
    label: "Done",
    icon: <Check className="h-4 w-4 text-green-600" />,
  },
  SHIPPING: {
    label: "Shipping",
    icon: <Truck className="h-4 w-4 text-purple-500" />,
  },
  DONE_SHIPPING: {
    label: "Done Shipping",
    icon: <PackageCheck className="h-4 w-4 text-cyan-600" />,
  },
} as const;

export function OrderTabsFilters() {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  return (
    <div className="rounded-t-xl border-x border-t border-zinc-200 bg-zinc-50/50 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/50">
      <ScrollArea className="w-full overflow-y-hidden">
        <div className="max-w-[100vw] px-6 py-2">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="inline-flex h-12 w-max gap-1.5 bg-transparent p-0">
              {Object.entries(STATUS_TABS).map(([status, config]) => (
                <TabsTrigger
                  key={status}
                  value={status}
                  className={cn(...TAB_STYLES)}
                >
                  <span className="flex items-center gap-2">
                    {config.icon}
                    <span>{config.label}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <ScrollBar
          orientation="horizontal"
          className="h-1.5 touch-none select-none"
        />
      </ScrollArea>
    </div>
  );
}
