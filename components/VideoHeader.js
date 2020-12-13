import React from 'react'
import Link from 'next/link'
import Nav from './Nav'

const VideoHeader = () => {
  return (
    <header className="header relative lg:overflow-hidden z-10">
    <div className="absolute inset-0 -z-back lg:opacity-100 opacity-50">
      <video src="video2.mp4" autoPlay muted loop className="object-cover w-full h-full" />
    </div>
      <Nav></Nav>
    <div className="container mx-auto  lg:px-16 lg:pt-64 px-4 py-4">
      <div className="md:pl-8 md:border-l-4 border-white">
        <h1 className="text-upda md:text-6xl text-2xl font-bold font-montserrat m-0 md:leading-none">RP Textile & Fashion</h1>
        <p className="text-white text-2xl font-extrabold  md:max-w-lg w-full md:my-4 font-raleway md:font-black">
        Your Trusted Apparel Sourcing Partner
        </p>
      
      </div>
    </div>
  </header>
  )
}

export default VideoHeader
