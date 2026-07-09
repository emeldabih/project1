import num1 from './assets/num1).svg'
import num2 from './assets/num2.svg'
import num3  from './assets/num3).svg'
import num4 from './assets/num4.svg'

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

          <div className="flex items-center gap-4">
  <img src={num1} alt="Members" className="w-12 h-12" />

  <div>
    <h3 className="text-3xl font-bold text-gray-800">2,245,341</h3>
    <p className="text-gray-500 text-lg">Members</p>
  </div>
</div>

<div className="flex items-center gap-4">
  <img src={num2} alt="Clubs" className="w-12 h-12" />

  <div>
    <h3 className="text-3xl font-bold text-gray-800">46,328</h3>
    <p className="text-gray-500 text-lg">Clubs</p>
  </div>
</div>

<div className="flex items-center gap-4">
  <img src={num3} alt="Bookings" className="w-12 h-12" />

  <div>
    <h3 className="text-3xl font-bold text-gray-800">828,867</h3>
    <p className="text-gray-500 text-lg">Event Bookings</p>
  </div>
</div>

<div className="flex items-center gap-4">
  <img src={num4} alt="Payments" className="w-12 h-12" />

  <div>
    <h3 className="text-3xl font-bold text-gray-800">1,926,436</h3>
    <p className="text-gray-500 text-lg">Payments</p>
  </div>
</div>
        </div>

      </div>
    </section>
  )
}