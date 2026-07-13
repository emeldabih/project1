import { CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Activity() {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Recent Activity
        </h2>

        <button className="font-semibold text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      {/* Activities */}
      <div className="space-y-6">

        {/* Activity 1 */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <CheckCircle
              size={22}
              className="fill-blue-600 text-white"
            />

            <span className="font-medium text-gray-700">
              Confirm order update
            </span>
          </div>

          <Button className='rounded-2xl text-white text-sm bg-yellow-400'variant={"secondary"}>URGENT</Button>

        </div>

        {/* Activity 2 */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="h-5 w-5 rounded-full bg-red-500"></div>

            <span className="font-medium text-gray-700">
              Finish shipping update
            </span>
          </div>

         <Button className='rounded-2xl text-white text-sm bg-yellow-400'variant={"secondary"}>URGENT</Button>

        </div>

        {/* Activity 3 */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Circle
              size={22}
              className="text-gray-400"
            />

            <span className="font-medium text-gray-700">
              Create new order
            </span>
          </div>

          <Button className='rounded-1xl text-white text-sm w-15 h-8 bg-green-400'variant={"secondary"}>NEW</Button>

        </div>

        {/* Activity 4 */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <CheckCircle
              size={22}
              className="fill-blue-600 text-white"
            />

            <span className="font-medium text-gray-700">
              Update payment
            </span>
          </div>

          <Button className='rounded-2xl text-gray-300 font-bold text-sm bg-gray-400'variant={"secondary"}>DEFAULT</Button>

        </div>

      </div>
    </div>
  );
}