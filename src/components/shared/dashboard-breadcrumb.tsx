import { headers } from "next/headers";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { Home, Slash } from "lucide-react";

interface BreadcrumbItemType {
  title: string;
  url: string;
}

const getBreadcrumbItems = (pathname: string): BreadcrumbItemType[] => {
  const items: BreadcrumbItemType[] = [];
  const paths = pathname.split("/").filter(Boolean);

  // If we're in a dashboard route (admin/recruiter/candidate)
  if (paths[0] === "admin") {
    // Add the role as first item
    items.push({
      title: paths[0].charAt(0).toUpperCase() + paths[0].slice(1),
      url: `/${paths[0]}`,
    });

    // Add remaining path segments
    paths.slice(1).forEach((path, index) => {
      items.push({
        title: path.charAt(0).toUpperCase() + path.slice(1),
        url: `/${paths.slice(0, index + 2).join("/")}`,
      });
    });
  }

  return items;
};

export default async function DashboardBreadcrumb() {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path") || "";
  console.info("pathname:", pathname);
  const breadcrumbItems = getBreadcrumbItems(pathname);

  return (
    <Breadcrumb className="flex items-center gap-2">
      <BreadcrumbList>
        {breadcrumbItems.length > 1 &&
          breadcrumbItems.map((item, index) => (
            <Fragment key={index}>
              {item.title === "Admin" ? (
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.url}>
                    <Home className="h-4 w-4 text-foreground" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
                </BreadcrumbItem>
              )}
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
