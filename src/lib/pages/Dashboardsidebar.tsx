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
   
    <Sidebar className="w-72 border-r bg-white">

      {/* Logo */}
      <SidebarHeader className="flex items-center justify-center py-8">
        <Power className="h-12 w-12 text-black" />
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-4">

        <SidebarMenu className="space-y-3">

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive
              className="rounded-xl bg-blue-50 text-blue-700 font-semibold py-6"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-xl py-6 text-gray-500 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <span>Order</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-xl py-6 text-gray-500 hover:bg-gray-100">
              <Package className="h-5 w-5" />
              <span>Products</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-xl py-6 text-gray-500 hover:bg-gray-100">
              <Truck className="h-5 w-5" />
              <span>Shipping</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-xl py-6 text-gray-500 hover:bg-gray-100">
              <CreditCard className="h-5 w-5" />
              <span>Payments</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-xl py-6 text-gray-500 hover:bg-gray-100">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>

        {/* Customer Support Card */}
        <div className="mt-10 rounded-2xl bg-slate-50 p-5 shadow-sm">
          <h3 className="text-lg font-bold">
            Customer Support
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Ask your query, place requests or important issues.
            Our support team will contact you 24/7.
          </p>

          <Button variant={"secondary" } className='bg-blue-400 font-bold text-sm mt-5' >CONNECT NOW</Button>
        </div>

      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto border-t px-6 py-6 text-sm text-gray-400">
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