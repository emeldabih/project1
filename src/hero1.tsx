import React from 'react'
import { Button } from './components/ui/button'
import image from './assets/image.svg'
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious, } from './components/ui/carousel'

export default function Hero1() {
 
 
  return (
    <section className="bg-gray-100 w-full px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
      <div className="flex items-center justify-between gap-8">

        
        {/* <div className="flex flex-col max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-gray-800 leading-tight">
            Lessons and Insights
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mt-2 ">
            From 8 Years
          </h1>

          <p className="mt-5 text-gray-600 text-sm md:text-base">
            Where to grow your business as a photographer.
          </p>

          <Button variant="secondary"
            className="bg-green-500 text-white font-bold mt-6 w-fit px-8 py-3 hover:bg-green-600"
          
          >
            Register
          </Button>
        </div> */}

        
        <div className="flex  justify-center" >
          <Carousel opts={{ align:"start",
            loop:true}}>

            <CarouselContent>
               {Array.from({length:3}).map((_, index) => (
               
                <CarouselItem className='flex flex-row justify-between'key={index}> 
                
        
        <div className="flex flex-col max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-gray-800 leading-tight">
            Lessons and Insights
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mt-2 ">
            From 8 Years
          </h1>

          <p className="mt-5 text-gray-600 text-sm md:text-base">
            Where to grow your business as a photographer.
          </p>

          <Button variant="secondary"
            className="bg-green-500 text-white font-bold mt-6 w-fit px-8 py-3 hover:bg-green-600"
          
          >
            Register
          </Button>
        </div>
                <img
            src={image}
            alt="there is an imgae hero here"
            className="w-48 md:w-72 lg:w-96 h-auto"
          /></CarouselItem>
       
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext/>
            
          </Carousel>

          
        </div>

      </div>
    </section>
  )
}