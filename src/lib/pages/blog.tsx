import DashboardSidebar from "./Dashboardsidebar";
import Header from "./header";
import Statistics from "./Statistics";
import Inbox from "./inbox";
import Activity from "./Activity";
import Barchat from "./barchat";
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

export default function Blog() {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <SidebarInset className="min-h-screen bg-gray-100">

        {/* Header Component */}
        <Header />

        <div className="p-4 md:p-6">

          {/* Statistics */}
         <div className="mb-6">
          <Statistics/>
         </div>
          {/* Bottom Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* Left Section */}
            <div className="space-y-6 lg:col-span-2">

              {/* Inbox */}
              <div className="rounded-xl border bg-white p-6 shadow-sm">
               <Inbox/>
              </div>

              {/* Activity */}
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <Activity/>
              </div>

            </div>

            {/* Right Section */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <Barchat/>
            </div>

          </div>

        </div>

      </SidebarInset>
    </SidebarProvider>
  );
}