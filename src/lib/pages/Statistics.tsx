import {
  Truck,
  ShoppingCart,
  Package,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function Statistics() {
  return (
    <div className="space-y-6">

      {/* Revenue */}
      

      

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {/* Shipped Orders */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-700 p-8 text-white shadow-lg">

          <Truck className="absolute bottom-3 left-3 h-24 w-24 opacity-10" />

          <h3 className="text-2xl font-semibold">
            Shipped orders
          </h3>

          <h1 className="mt-4 text-right text-7xl font-bold">
            67
          </h1>

        </div>

        {/* Pending Orders */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 p-8 text-white shadow-lg">

          <ShoppingCart className="absolute bottom-3 left-3 h-24 w-24 opacity-10" />

          <h3 className="text-2xl font-semibold">
            Pending orders
          </h3>

          <h1 className="mt-4 text-right text-7xl font-bold">
            09
          </h1>

        </div>

        {/* New Orders */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-500 to-violet-700 p-8 text-white shadow-lg">

          <Package className="absolute bottom-3 left-3 h-24 w-24 opacity-10" />

          <h3 className="text-2xl font-semibold">
            New orders
          </h3>

          <h1 className="mt-4 text-right text-7xl font-bold">
            35
          </h1>

        </div>

      </div>

    </div>
  );
}