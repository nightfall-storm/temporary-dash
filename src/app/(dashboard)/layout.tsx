import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { DashboardSidebar } from "@/components/shared/dashboard-sidebar";
import DashboardBreadcrumb from "@/components/shared/dashboard-breadcrumb";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get("sidebar_state")?.value;
  const defaultOpen =
    sidebarState === "true" ? true : sidebarState === "false" ? false : true;

  return (
    <>
      <div className={cn("flex h-screen overflow-hidden")}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
          <div className={cn("flex-1 flex flex-col overflow-hidden")}>
            <header
              className={cn(
                "flex justify-between h-14 items-center gap-2 border-b px-4"
              )}
            >
              <div className="flex gap-2">
                <div className="flex items-center">
                  <SidebarTrigger className="items-center" />
                </div>
                <Separator orientation="vertical" />
                <DashboardBreadcrumb />
                {/* <SearchInput /> */}
              </div>
            </header>
            <main className={cn("flex-1 overflow-y-auto p-6")}>{children}</main>
          </div>
        </SidebarProvider>
      </div>
      {/* Portal container for floating elements */}
      {/* <div id="floating-elements" /> */}
    </>
  );
}
