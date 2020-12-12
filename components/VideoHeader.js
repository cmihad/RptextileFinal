import React from 'react'
import Link from 'next/link'
const VideoHeader = () => {
  return (
    <header className="header relative lg:overflow-hidden z-10">
    <div className="absolute inset-0 -z-back lg:opacity-100 opacity-50">
      <video src="video2.mp4" autoPlay muted loop className="object-cover w-full h-full" />
    </div>
    <nav className="md:p-3 py-2 px-3 z-10">
      <div className="container mx-auto md:flex block flex-wrap items-center justify-start">
        <div className="flex-1 flex items-center justify-between">
          <a href="#">
            <img src="/Logo.png" alt="GSL Logo" width="50" height="45" />
          </a>
          <button data-menu-toggle className="md:hidden block pr-1">
            <svg className="fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <ul data-menu className="md:flex hidden flex-wrap items-center justify-start text-white">
          <Link href="/">

          <li className="md:px-6 py-2">
            <a href="#" className="text-brand">Home</a>
          </li>
          </Link>
          {/* <li class="md:px-6 py-2">
      <a href="#">Stream/Buy</a>
    </li> */}
       

            <Link href="#about">

          <li className="md:px-6 py-2">
            <a href="#">About Us</a>
          </li>
            </Link>

            <Link href="#service">

            <li className="md:px-6 py-2">
              <a href="#">Services</a>
            </li>
              </Link>


            <Link href="#product">

            <li className="md:px-6 py-2">
              <a href="#">Products</a>
            </li>
            </Link>


           

            <Link href="#client">

          <li className="md:px-6 py-2">
            <a href="#">Client</a>
          </li>
            </Link>
          
            
            
            <Link href="#office">

            <li className="md:px-6 py-2">
              <a href="#">Office</a>
            </li>
              </Link>

            
            <Link href="#contact">

          <li className="md:px-6 py-2">
            <a href="#">Contact</a>
          </li>
            </Link>
        </ul>
      </div>
    </nav>
    <div className="container mx-auto lg:mt-56 lg:px-16 px-4 py-4">
      <div className="md:pl-8 md:border-l-4 border-white">
        <h1 className="text-primary md:text-7xl text-2xl font-bold font-sans m-0 md:leading-none">RP Textile And Fashion</h1>
        <p className="text-white text-3xl md:max-w-lg w-full md:my-4">
        Your Trusted Apparel Sourcing Partner
        </p>
      
      </div>
    </div>
  </header>
  )
}

export default VideoHeader
