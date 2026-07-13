import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

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
            <Checkbox className='bg-blue-600'/>

            <span className="font-medium text-gray-700">
              Confirm order update
            </span>
          </div>

          <Badge
            className="rounded-2xl bg-yellow-400 text-sm text-white"
            variant="secondary"
          >
            URGENT
          </Badge>
        </div>

        {/* Activity 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <Checkbox className='bg-red-700' />

            <span className="font-medium text-gray-700">
              Finish shipping update
            </span>
          </div>

          <Badge
            className="rounded-2xl bg-yellow-400 text-sm text-white"
            variant="secondary"
          >
            URGENT
          </Badge>
        </div>

        {/* Activity 3 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Checkbox />

            <span className="font-medium text-gray-700">
              Create new order
            </span>
          </div>

          <Badge
            className="h-8 w-12  h-7 bg-green-400 text-sm text-white"
            variant="secondary"
          >
            NEW
          </Badge>
        </div>

        {/* Activity 4 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Checkbox className='bg-blue-600'/>

            <span className="font-medium text-gray-700">
              Update payment
            </span>
          </div>

          <Badge
            className="rounded-2xl bg-gray-400 text-sm font-bold text-gray-300 p-3"
            variant="secondary"
          >
            DEFAULT
          </Badge>
        </div>
      </div>
    </div>
  );
}