
import { Bell, Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        {/* Mobile Sidebar Button */}
        <SidebarTrigger  />
        <div>
        <h2 className=" text-1xl font-bold text-gray-800">
          Total Revenue
        </h2>
        <p className="text-2xl font-bold">$ 45,365.00</p>
</div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:flex items-center rounded-lg border bg-gray-50 px-3 py-2">
          <Search className="mr-2 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none"
          />
        </div>

        {/* Notification */}
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />

          <div className="hidden md:block">
            
          </div>

        </div>

      </div>

    </header>
  );
}
