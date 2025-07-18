import Image from "next/image";
import { Store } from "../common/interfaces/store.interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink } from "lucide-react";

interface StoreCardProps {
  store: Store;
}

export function StoreCard({ store }: StoreCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="relative h-16 w-16 flex-shrink-0">
          {store.thumbnail ? (
            <Image
              src={store.thumbnail}
              alt={store.name}
              fill
              className="object-cover rounded-md"
            />
          ) : (
            <div className="h-full w-full bg-muted flex items-center justify-center rounded-md">
              <Image
                src="/file.svg"
                alt="Store placeholder"
                width={24}
                height={24}
                className="opacity-50"
              />
            </div>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold truncate">{store.name}</h3>
            <Badge
              variant={
                store.status === "active"
                  ? "default"
                  : store.status === "draft"
                  ? "secondary"
                  : "outline"
              }
              className={
                store.status === "active"
                  ? "bg-primaryColor-500 hover:bg-primaryColor-600"
                  : store.status === "draft"
                  ? "bg-primaryColor-200 text-primaryColor-700 hover:bg-primaryColor-300"
                  : "border-primaryColor-200 text-primaryColor-600"
              }
            >
              {store.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date(store.lastUpdate).toLocaleDateString()}
          </p>
          {store.analytics && (
            <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
              <span>{store.analytics.visitors.toLocaleString()} visitors</span>
              <span>{store.analytics.conversion}% conversion</span>
              <span>${store.analytics.revenue.toLocaleString()} revenue</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="text-primaryColor-600 hover:text-primaryColor-700 hover:bg-primaryColor-50"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-primaryColor-600 hover:text-primaryColor-700 hover:bg-primaryColor-50"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
