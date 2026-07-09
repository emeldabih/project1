import logo1 from './assets/Logo1.svg'
import logo2 from './assets/Logo (2).svg'
import logo3 from './assets/Logo 3.svg'
import logo4 from './assets/Logo (4).svg'
import logo5 from './assets/Logo 5.svg'
import logo6 from './assets/Logo 6.svg'
import logo7 from './assets/Logo (7).svg'
import icon1 from './assets/Icon1.svg'
import icon2 from './assets/Icon (2).svg'
import icon3 from './assets/Icon3.svg'

export default function Hero2() {
  return (
    <section className="bg-white py-12 px-6 md:px-10 lg:px-16">

     
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Clients
        </h2>

        <p className="text-gray-600 mt-2 text-sm md:text-base">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

     
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-10">
        <img src={logo1} alt="Logo 1" className="w-10 md:w-12" />
        <img src={logo2} alt="Logo 2" className="w-10 md:w-12" />
        <img src={logo3} alt="Logo 3" className="w-10 md:w-12" />
        <img src={logo4} alt="Logo 4" className="w-10 md:w-12" />
        <img src={logo5} alt="Logo 5" className="w-10 md:w-12" />
        <img src={logo6} alt="Logo 6" className="w-10 md:w-12" />
        <img src={logo7} alt="Logo 7" className="w-10 md:w-12" />
      </div>

      
      <div className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Manage your community
        </h2>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          in a single system
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Who is Nexcent suitable for?
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

        <div className="flex flex-col items-center text-center p-6 shadow-sm rounded-lg hover:shadow-md transition">
          <img src={icon1} alt="Membership Organisations" className="w-14 mb-4" />
          <h3 className="text-xl font-semibold">Membership</h3>
          <h3 className="text-xl font-semibold">Organisations</h3>
        </div>

        <div className="flex flex-col items-center text-center p-6 shadow-sm rounded-lg hover:shadow-md transition">
          <img src={icon2} alt="National Associations" className="w-14 mb-4" />
          <h3 className="text-xl font-semibold">National</h3>
          <h3 className="text-xl font-semibold">Associations</h3>
        </div>

        <div className="flex flex-col items-center text-center p-6 shadow-sm rounded-lg hover:shadow-md transition">
          <img src={icon3} alt="Clubs and Groups" className="w-14 mb-4" />
          <h3 className="text-xl font-semibold">Clubs and</h3>
          <h3 className="text-xl font-semibold">Groups</h3>
        </div>

      </div>

    </section>
  )
}