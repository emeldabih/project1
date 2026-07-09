import person1 from './assets/person1.svg'
import person2 from './assets/person2.svg'
import person3 from './assets/person3.svg'

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

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

  {/* first container */}
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
    <img
      src={person1}
      alt="Person"
      className="w-full h-72 object-cover"
    />

    <div className="bg-white w-[90%] min-h-50 mx-auto -mt-14 relative rounded-xl shadow-md p-9 text-center">
      <h3 className="text-1xl font-semibold text-gray-700">
        Creating Streamlined Safeguarding Processes with OneRen
      </h3>

      <a
        href="#"
        className="mt-5 inline-block text-green-500 font-semibold hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>
{/* second container */}

  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
    <img
      src={person2}
      alt="Person"
      className="w-full h-72 object-cover"
    />

    <div className="bg-white w-[90%] min-h-50 mx-auto -mt-14 relative rounded-xl shadow-md p-6 text-center">
      <h3 className="text-1xl font-semibold text-gray-700">
        What are your safeguarding responsibilities and how can you manage them?
      </h3>

      <a
        href="#"
        className="mt-5 inline-block text-green-500 font-semibold hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>
{/* third container */}
  
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
    <img
      src={person3}
      alt="Person"
      className="w-full h-72 object-cover"
    />

    <div className="bg-white w-[90%] min-h-50 mx-auto -mt-14 relative rounded-xl shadow-md p-9 text-center">
      <h3 className="text-1xl font-semibold text-gray-700">
        Revamping the Membership Model with Triathlon Australia
      </h3>

      <a
        href="#"
        className="mt-5 inline-block text-green-500 font-semibold hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>

</div>
    </section>
  )
}