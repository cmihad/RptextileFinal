import React from 'react'
import { FaFacebookF ,FaLinkedinIn } from 'react-icons/fa'
function TopBar() {
  return (
    <div>
      <div className="w-full h-8 flex bg-pr  ">
      <div className="container mx-auto flex justify-between px-6 " >

      <div className="flex" >
      <FaFacebookF className=" mb-auto mt-auto text-white px-1" />

      <FaLinkedinIn  className=" mb-auto mt-auto text-white "/>

      </div>

       <div className="flex h-8 ">
        <p className="text-white font-medium mb-auto mt-auto ">Contact: info@rptextile.com    +88 01710267919 (BD) +1 5183472268155 (NY) </p>
      </div>
      
    </div>
    </div>
  </div>
  )
}

export default TopBar
