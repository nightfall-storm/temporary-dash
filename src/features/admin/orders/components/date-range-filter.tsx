import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const dateRangeOptions = [
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 3 months", value: "3m" },
  { label: "Last year", value: "1y" },
] as const;

interface DateRangeFilterProps {
  value?: string;
  onChange?: (value: string) => void;
  showClear?: boolean;
}

export function DateRangeFilter({
  value,
  onChange,
  showClear = false,
}: DateRangeFilterProps) {
  const selectedOption = dateRangeOptions.find((opt) => opt.value === value);

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "gap-2 border-dashed",
              value && "border-primaryColor-500"
            )}
          >
            <CalendarDays className="h-4 w-4" />
            {selectedOption ? (
              <Badge
                variant="secondary"
                className="ml-1 font-normal bg-primaryColor-100 text-primaryColor-700"
              >
                {selectedOption.label}
              </Badge>
            ) : (
              "Date Range"
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {dateRangeOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onChange?.(option.value)}
              className="cursor-pointer"
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {showClear && value && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
          onClick={() => onChange?.("")}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
