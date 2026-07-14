import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";

import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Truck,
  CreditCard,
  Settings,
  Power,
} from "lucide-react";

export default function DashboardSidebar() {
  return (
    <Sidebar className="w-[20%] min-w-[72px] md:w-56 lg:w-72 border-r bg-white">
      {/* Logo */}
      <SidebarHeader className="flex items-center justify-center py-4 md:py-6 lg:py-8">
        <Power className="h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11 text-black" />
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-1 md:px-2 lg:px-4">
        <SidebarMenu className="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive
              className="flex h-12 items-center justify-center md:justify-start rounded-lg px-0 md:px-3 gap-0 md:gap-2"
            >
              <LayoutDashboard className="h-5 w-5 shrink-0" />

              <span className="hidden md:inline text-xs lg:text-base font-medium">
                Dashboard
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex h-12 items-center justify-center md:justify-start rounded-lg px-0 md:px-3 gap-0 md:gap-2">
              <ShoppingCart className="h-5 w-5 shrink-0" />

              <span className="hidden md:inline text-xs lg:text-base">
                Order
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex h-12 items-center justify-center md:justify-start rounded-lg px-0 md:px-3 gap-0 md:gap-2">
              <Package className="h-5 w-5 shrink-0" />

              <span className="hidden md:inline text-xs lg:text-base">
                Products
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex h-12 items-center justify-center md:justify-start rounded-lg px-0 md:px-3 gap-0 md:gap-2">
              <Truck className="h-5 w-5 shrink-0" />

              <span className="hidden md:inline text-xs lg:text-base">
                Shipping
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex h-12 items-center justify-center md:justify-start rounded-lg px-0 md:px-3 gap-0 md:gap-2">
              <CreditCard className="h-5 w-5 shrink-0" />

              <span className="hidden md:inline text-xs lg:text-base">
                Payments
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex h-12 items-center justify-center md:justify-start rounded-lg px-0 md:px-3 gap-0 md:gap-2">
              <Settings className="h-5 w-5 shrink-0" />

              <span className="hidden md:inline text-xs lg:text-base">
                Settings
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Customer Support */}
        <div className="hidden lg:block mt-8 rounded-2xl bg-slate-50 p-5 shadow-sm">
          <h3 className="text-lg font-bold">Customer Support</h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Ask your query, place requests or important issues.
            Our support team will contact you 24/7.
          </p>

          <Button
            variant="secondary"
            className="mt-5 w-full bg-blue-500 text-white hover:bg-blue-600"
          >
            CONNECT NOW
          </Button>
        </div>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="hidden lg:block border-t px-6 py-6 text-sm text-gray-400">
        <p className="cursor-pointer hover:text-gray-600">
          Terms & Services
        </p>

        <p className="mt-2 cursor-pointer hover:text-gray-600">
          Privacy Policy
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}