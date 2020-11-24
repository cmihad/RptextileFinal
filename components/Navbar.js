import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
function Navbar() {
  return (
    <div>

    <div className="h-20 w-full bg-transparent flex bg-white ">
      <div className="flex container justify-between mx-auto">

      <div  className="logo mb-auto mt-auto">
      <Image
        src="/Logo.png"
        width={50}
        height={55}
      >

      </Image>
      </div>
      <div>
    </div>
        <ul className="flex  h-full">
          <li className="mt-auto mb-auto px-3">
          <Link href="/">

           <a href="" className="text-xl text-black font-body capitalize font-bold">Home</a>
          </Link>
          </li>
          <li className="mt-auto mb-auto px-3">
            <Link href="/service">

            <a href="" className="text-xl text-black font-body capitalize font-bold">

            Services
            </a>
            </Link>
          </li>
          <li className="mt-auto mb-auto px-3">
          <Link  href="/about">

            <a href="" className="text-xl text-black font-body capitalize font-bold">

            About Us
            </a>
          </Link>
          </li>
          <li className="mt-auto mb-auto pl-3">
          <Link href="/contact">

            <a href="" className="text-xl text-black font-body capitalize font-bold ">

              
              Contact Us
            </a>
          </Link>
          </li>
        </ul>

      </div>
    </div>
    
    </div>
  )
}
 
export default Navbar
