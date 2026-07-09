

export default function Hero4() {
  return (
    <section className="bg-gray-100 px-6 md:px-10 lg:px-16 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">

      
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Helping a local
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mt-2">
            Business reinvent itself
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            We reached here with our hard work and dedication.
          </p>
        </div>

       
        <div className="grid grid-cols-2 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-gray-800">2,245,341</h3>
            <p className="text-gray-600">Members</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800">46,328</h3>
            <p className="text-gray-600">Clubs</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800">828,867</h3>
            <p className="text-gray-600">Event Bookings</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800">1,926,436</h3>
            <p className="text-gray-600">Payments</p>
          </div>

        </div>

      </div>
    </section>
  )
}