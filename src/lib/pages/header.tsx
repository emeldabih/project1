import { Bell, Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="flex h-16 md:h-20 items-center justify-between border-b bg-white px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Left Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Sidebar Button */}
        <SidebarTrigger />

        {/* Revenue */}
        <div className="leading-tight">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
            Total Revenue
          </h2>

          <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
            $45,365.00
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
        {/* Search */}
        <div className="hidden md:flex items-center rounded-xl border bg-gray-50 px-3 py-2 w-56 lg:w-80">
          <Search className="mr-2 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Notification */}
        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
          />

          {/* Name (Large screens only) */}
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-gray-800">
              John Doe
            </p>
            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}