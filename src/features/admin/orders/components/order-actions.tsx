import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus, RefreshCw } from "lucide-react";

export function OrderActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon">
        <RefreshCw className="h-4 w-4" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Order
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Regular Order</DropdownMenuItem>
          <DropdownMenuItem>Reservation</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
