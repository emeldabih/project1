import { ChevronRight } from "lucide-react";

export default function Inbox() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className='font-bold'>
          <h2 className="text-2xl font-bold text-gray-900">
            Inbox
          </h2>

          <p className="text-sm text-gray-400">
            Group: Support
          </p>
        </div>

        <button className="text-blue-600 font-semibold hover:text-blue-700">
          View details
        </button>

      </div>

      {/* Messages */}
      <div className="mt-8 space-y-4">

        {/* Message 1 */}
        <div className="flex items-center justify-between border-b pb-4">

          <div className="flex items-center gap-3">

            

            <p className="font-bold text-gray-700">
              Waiting for order #12345
            </p>

          </div>

          <span className="text-sm text-gray-400">
            4:39
          </span>

        </div>

        {/* Message 2 */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">



            <p className="font-bold text-gray-700">
              Customer support ID #22234
            </p>

          </div>

          <span className="text-sm text-gray-400">
            11:07
          </span>

        </div>

      </div>

    </div>
  );
}