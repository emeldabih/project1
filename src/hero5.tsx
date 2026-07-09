
import { Button } from './components/ui/button'
import design from './assets/design.svg'

export default function Hero5() {
  return (
    <section className="w-full bg-white px-6 md:px-10 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

       
        <div className="flex justify-center">
          <img
            src={design}
            alt="Footer Design Illustration"
            className="w-64 md:w-80 lg:w-[450px] h-auto"
          />
        </div>

        
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            How to design your site footer like we did
          </h1>

          <p className="mt-6 text-gray-600 text-sm md:text-base leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam neque
            aliquam culpa commodi, libero ab veritatis maxime doloribus facilis
            a architecto soluta labore repudiandae sunt delectus dignissimos
            ipsa, eius quo.
          </p>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam neque
            aliquam culpa commodi, libero ab veritatis maxime doloribus facilis
            a architecto soluta labore repudiandae sunt delectus dignissimos
            ipsa, eius quo.
          </p>

          <Button
            variant="secondary"
            className="bg-green-500 text-white font-bold px-6 py-3 mt-8 hover:bg-green-600"
          >
            Learn More
          </Button>
        </div>

      </div>
    </section>
  )
}