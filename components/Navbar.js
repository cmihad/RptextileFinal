import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
function Navbar() {
  return (
    <div>

    <div className="h-20 w-full bg-transparent flex bg-white ">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">

      <div  className="logo mb-auto mt-auto cursor-pointer">
      <Link href="/">

      <Image
        src="/Logo.png"
        width={50}
        height={55}
        className="cursor-pointer"
      >

      </Image>
      </Link>
      </div>
      <div>
    </div>
        <ul className="flex  h-full">
          <li className="mt-auto mb-auto px-3">
          <Link href="/">

           <a href="" className="text-base sm:text-xl text-black font-body capitalize font-bold">Home</a>
          </Link>
          </li>
          <li className="mt-auto mb-auto px-3">
            <Link href="/service">

            <a href="" className=" text-base  sm:text-xl text-black font-body capitalize font-bold">

            Services
            </a>
            </Link>
          </li>
          <li className="mt-auto mb-auto px-3">
          <Link  href="/about">

            <a href="" className="text-base  sm:text-xl text-black font-body capitalize font-bold">

            About Us
            </a>
          </Link>
          </li>
          <li className="mt-auto mb-auto pl-3">
          <Link href="/team">

            <a href="" className="text-base sm:text-xl text-black font-body capitalize font-bold ">

              
              Our Team
            </a>
          </Link>
          </li>
          <li className="mt-auto mb-auto pl-3">
          <Link href="/contact">

            <a href="" className="text-base sm:text-xl text-black font-body capitalize font-bold ">

              
              Contact 
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
