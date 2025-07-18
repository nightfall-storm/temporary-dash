import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  action?: {
    icon: ReactNode;
    label: string;
  };
  showRefreshButton?: boolean;
}

export function PageHeader({
  title,
  description,
  action,
  showRefreshButton = true,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-4">
        {showRefreshButton && (
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        )}
        {action && (
          <Button>
            {action.icon}
            {action.label}
          </Button>
        )}
      </div>
    </div>
  );
}
