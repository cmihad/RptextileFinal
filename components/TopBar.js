import React from 'react'
import { FaFacebookF ,FaLinkedinIn ,FaTelegramPlane ,FaWhatsapp } from 'react-icons/fa'
function TopBar() {
  return (
    <div>
      <div className="hidden  sm:w-full sm:h-10 sm:flex bg-upda  ">
      <div className="container mx-auto flex justify-between px-6 " >

      <div className="flex " >
      <FaFacebookF className=" mb-auto mt-auto text-white px-1 cursor-pointer mr-2" />

      <FaLinkedinIn  className=" mb-auto mt-auto text-white cursor-pointer mx-2"/>
      <FaTelegramPlane  className=" mb-auto mt-auto text-white cursor-pointer mx-2"/>
      <FaWhatsapp  className=" mb-auto mt-auto text-white cursor-pointer mx-2"/>

      </div>

       <div className="flex h-10 ">
        <p className="text-white font-medium mb-auto mt-auto ">Contact: info@rptextile.com    +88 01710267919 (BD)  </p>
      </div>
      
    </div>
    </div>
  </div>
  )
}

export default TopBar
