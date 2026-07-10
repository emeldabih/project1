import { SidebarProvider } from '@/components/ui/sidebar';
import header from './header'
import sidebar from'./sidebar'


export default function blog() {
  
    
   
  return (
    <SidebarProvider>
    
    <div className="flex min-h-screen">

      {/* SIDEBAR DIV */}
      <div className="w-64 border-r bg-gray-100 p-6">
        <h2 className="text-2xl font-bold">Sidebar</h2>
      </div>

      {/*  MAIN CONTENT DIV */}
      <div className="flex-1 p-6">

        {/* HEADER DIV */}
        <div className="mb-6 rounded-lg border p-6">
          <h1 className="text-2xl font-bold">Header</h1>
        </div>

        {/*  STATISTICS DIV */}
        <div className="mb-6 rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Statistics</h2>
        </div>

        {/*  BOTTOM SECTION DIV  */}
        <div className="grid grid-cols-3 gap-6">

          {/*  LEFT COLUMN DIV */}
          <div className="col-span-2 space-y-6">

            {/* Inbox Div */}
            <div className="rounded-lg border p-6">
              <h2 className="text-lg font-semibold">Inbox</h2>
            </div>

            {/* Activity Div */}
            <div className="rounded-lg border p-6">
              <h2 className="text-lg font-semibold">Activity</h2>
            </div>

          </div>

          {/*  RIGHT COLUMN DIV  */}
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-semibold">Today's Trends</h2>
          </div>

        </div>

      </div>

    </div>
    </SidebarProvider>
  );
}


  

