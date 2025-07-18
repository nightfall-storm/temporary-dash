"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Filter, SlidersHorizontal } from "lucide-react";
import { OrderFilterClient } from "./order-filter-client";
import { DateRangeFilter } from "./date-range-filter";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type FilterOption = {
  label: string;
  value: string;
};

type FilterOptions = {
  status: FilterOption[];
  orderType: FilterOption[];
};

const filterOptions: FilterOptions = {
  status: [
    { label: "Pending", value: "pending" },
    { label: "Processing", value: "processing" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
  ],
  orderType: [
    { label: "All Orders", value: "all" },
    { label: "Reservations", value: "reservations" },
    { label: "Regular Orders", value: "regular" },
  ],
};

export function OrderFilters() {
  const [dateRange, setDateRange] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    orderType: "",
  });

  // Only count actual filters, not date range
  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="flex items-center gap-2">
      <DateRangeFilter value={dateRange} onChange={setDateRange} showClear />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "gap-2 border-dashed",
              activeFiltersCount > 0 && "border-primaryColor-500"
            )}
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge
                variant="secondary"
                className="ml-1 font-normal bg-primaryColor-100 text-primaryColor-700"
              >
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" align="start">
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              <h4 className="font-medium">Filters</h4>
            </div>
            <Separator />
            <OrderFilterClient
              options={filterOptions}
              value={filters}
              onChange={setFilters}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
