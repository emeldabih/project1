
import logo1 from './assets/Logo1.svg'
import logo2 from './assets/Logo (2).svg'
import logo3 from './assets/Logo 3.svg'
import logo4 from './assets/Logo (4).svg'
import logo5 from './assets/Logo 5.svg'
import logo6 from './assets/Logo 6.svg'
import logo7 from './assets/Logo (7).svg'
import pic1 from './assets/pic1.svg'

export default function Hero6() {
  return (
    <section className="bg-gray-100 px-6 md:px-10 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    
        <div className="flex justify-center">
          <img
            src={pic1}
            alt="Customer"
            className="w-64 md:w-80 lg:w-[450px] h-auto"
          />
        </div>

        
        <div>
          <p className="text-gray-600 text-sm md:text-base leading-7">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
            potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat
            eget. Quisque vulputate odio neque, eget efficitur libero
            condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
            amet magna.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-green-500 mt-6">
            Tim Smith
          </h2>

          <p className="text-gray-600 mt-2">
            British Dragon Boat Racing Association
          </p>

          
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <img src={logo1} alt="Logo 1" className="w-10 md:w-12" />
            <img src={logo2} alt="Logo 2" className="w-10 md:w-12" />
            <img src={logo3} alt="Logo 3" className="w-10 md:w-12" />
            <img src={logo4} alt="Logo 4" className="w-10 md:w-12" />
            <img src={logo5} alt="Logo 5" className="w-10 md:w-12" />
            <img src={logo6} alt="Logo 6" className="w-10 md:w-12" />
            <img src={logo7} alt="Logo 7" className="w-10 md:w-12" />

            <a
              href="#"
              className="text-green-500 font-semibold hover:underline"
            >
              Meet all customers →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}