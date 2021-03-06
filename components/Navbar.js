import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
    <nav className="bg-quader">
   <div className="container mx-auto md:flex block flex-wrap items-center justify-start h-full py-4 px-12">
        <div className="flex-1 flex items-center justify-between  ">
          <Link href="/">
          <a href="#">
            <img src="/Logo.png" alt="GSL Logo" width="50" height="45" />
          </a>
          </Link>
          <button data-menu-toggle className="md:hidden block pr-1">
            <svg className="fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <ul data-menu className="md:flex hidden flex-wrap items-center justify-start text-white font-montserrat font-medium uppercase">
          <Link href="/">

          <li className="md:px-6 py-2">
            <a href="/" className="text-brand">Home</a>
          </li>
          </Link>
          {/* <li class="md:px-6 py-2">
      <a href="#">Stream/Buy</a>
    </li> */}

         <Link href="/#product">

          <li className="md:px-4 py-2">
            <a href="/#">Products</a>
          </li>
          </Link>


            <Link href="/#about">

          <li className="md:px-4 py-2">
            <a href="/#">About Us</a>
          </li>
            </Link>

            <Link href="/#service">

            <li className="md:px-4 py-2">
              <a href="/#">Services</a>
            </li>
              </Link>


            <Link href="/#client">

          <li className="md:px-4 py-2">
            <a href="/#">Client</a>
          </li>
            </Link>
          
            
            
            <Link href="/#office">

            <li className="md:px-4 py-2">
              <a href="/#">Office</a>
            </li>
              </Link>

            
            <Link href="/#contact">

          <li className="md:px-4 py-2">
            <a href="#">Contact</a>
          </li>
            </Link>
        </ul>
      </div>

  <div class="hidden sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
     
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
