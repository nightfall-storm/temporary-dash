"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterOptions {
  status: FilterOption[];
  orderType: FilterOption[];
}

interface Filters {
  status: string;
  orderType: string;
}

interface OrderFilterClientProps {
  options: FilterOptions;
  value: Filters;
  onChange: (filters: Filters) => void;
}

export function OrderFilterClient({
  options,
  value,
  onChange,
}: OrderFilterClientProps) {
  const activeFilters = Object.entries(value).filter(([_, value]) => value);

  const handleReset = (key: keyof Filters) => {
    onChange({
      ...value,
      [key]: "",
    });
  };

  return (
    <div className="grid gap-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Status</Label>
          <RadioGroup
            onValueChange={(newValue) =>
              onChange({ ...value, status: newValue })
            }
            value={value.status}
          >
            {options.status.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Order Type</Label>
          <RadioGroup
            onValueChange={(newValue) =>
              onChange({ ...value, orderType: newValue })
            }
            value={value.orderType}
          >
            {options.orderType.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map(([key, value]) => {
            const option = options[key as keyof FilterOptions].find(
              (opt) => opt.value === value
            );
            return (
              <Badge key={key} variant="secondary" className="gap-1">
                {option?.label}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => handleReset(key as keyof Filters)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}
