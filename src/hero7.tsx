import React from 'react'

export default function Hero7() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-16 py-12">

      
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Caring is the New Marketing
        </h2>

        <p className="mt-4 max-w-3xl text-gray-600 text-sm md:text-base leading-7">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read
          about how our communities are increasing their membership, wisdom,
          and much more.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

       
        <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">
            Creating Streamlined Safeguarding Processes
          </h3>

          <a
            href="#"
            className="text-green-500 font-semibold mt-4 inline-block hover:underline"
          >
            Read More →
          </a>
        </div>

        
        <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">
            What are your safeguarding responsibilities?
          </h3>

          <a
            href="#"
            className="text-green-500 font-semibold mt-4 inline-block hover:underline"
          >
            Read More →
          </a>
        </div>

       
        <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">
            Revamping the Membership Model with Triathlon Australia
          </h3>

          <a
            href="#"
            className="text-green-500 font-semibold mt-4 inline-block hover:underline"
          >
            Read More →
          </a>
        </div>

      </div>

    </section>
  )
}