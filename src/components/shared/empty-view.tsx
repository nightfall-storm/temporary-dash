import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { iconContainerStyle, largeIconStyle } from "@/core/styles/icons.style";
import { Card } from "../ui/card";

interface EmptyViewProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function EmptyView({
  title,
  description,
  icon: Icon,
  className,
}: EmptyViewProps) {
  return (
    <Card
      className={cn(
        "relative",
        "flex flex-col items-center justify-center p-8 text-center",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className={iconContainerStyle}>
          <Icon className={largeIconStyle} />
        </div>
        <div className="max-w-sm space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}
