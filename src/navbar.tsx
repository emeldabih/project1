import  { useState } from 'react'
import { Button } from './components/ui/button'
import icona from './assets/Icon (a).svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  

  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-10 lg:px-16 py-5">

          
          <div className="flex items-center gap-3">
            <img src={icona} alt="Nexcent Logo" />
            <h3 className="text-xl md:text-2xl font-bold text-black">
              Nexcent
            </h3>
          </div>

          
          <Button
       
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden"
          >
            ☰
            
          </Button>

          
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-green-500">Home</a></li>
              <li><a href="#" className="hover:text-green-500">Features</a></li>
              <li><a href="#" className="hover:text-green-500">Community</a></li>
              <li>
                  <Link to="/blog" className="hover:text-green-500">
                    Blog
                  </Link>
                </li> 
              <li><a href="#" className="hover:text-green-500">Pricing</a></li>
            </ul>

            <Button
              variant="secondary"
              className="bg-green-500 text-white px-5 py-2 font-bold"
            >
              Register Now
            </Button>
          </div>
        </div>

       
        {isOpen && (
          <div className="md:hidden px-6 pb-5">
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="hover:text-green-500">Home</a></li>
              <li><a href="#" className="hover:text-green-500">Features</a></li>
              <li><a href="#" className="hover:text-green-500">Community</a></li>
              <li><a href="#" className="hover:text-green-500">Blog</a></li>
              <li><a href="#" className="hover:text-green-500">Pricing</a></li>
            </ul>

            <Button
              variant="secondary"
              className="bg-green-500 text-white w-full mt-4 py-2 font-bold"
            >
              Register Now
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

