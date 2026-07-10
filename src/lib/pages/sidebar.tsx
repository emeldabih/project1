import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";



export default function DashboardSidebar() {
  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader>
        <h2 className="text-2xl font-bold">My Dashboard</h2>
      </SidebarHeader>

      {/* Sidebar Navigation */}
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <ShoppingCart className="h-4 w-4" />
              <span>Orders</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Package className="h-4 w-4" />
              <span>Products</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Truck className="h-4 w-4" />
              <span>Shipping</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <CreditCard className="h-4 w-4" />
              <span>Payments</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}