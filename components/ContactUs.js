import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {  FaFacebookF ,FaLinkedinIn ,FaTelegramPlane ,FaWhatsapp } from 'react-icons/fa'
function ContactUs() {
  return (


  <div className="mt-0  bg-compliance" id="contact">
    <div class=" flex flex-col py-16 sm:place-items-center sm:flex-col justify-center sm:py-12">

        <div className="mx-24 my-2">
        <Image
         src="/Layer2@2x.png"
         width={220}
         height={207}
        />

     
        </div>
      <div className=" mx-12 mt-6">
      <h1  className=" text-center font-raleway text-white text-2xl tracking-tighter ">
        For more info  please contact us  +88 01710267919 (BD) <br/>
        info@rptextile.com
      </h1>
    
      <div className="flex justify-center mt-3">
      <Link href="https://www.facebook.com/RP-Textile-Fashion-545210429278815/">

      <FaFacebookF className=" text-center text-white text-3xl my-5 mx-4 cursor-pointer" />
      </Link>
      <Link href="https://www.linkedin.com/company/r-p-textile-and-fashion">


      <FaLinkedinIn className="text-white text-3xl my-5 mx-4  cursor-pointer" />
      </Link>

      <Link href="http://wa.me/8801710267919"> 

      <FaTelegramPlane className="text-white text-3xl my-5 mx-4  cursor-pointer" />
      
      </Link>
      <Link href="http://wa.me/8801710267919"> 

        <FaWhatsapp  
        className= "text-center text-white text-3xl my-5 mx-4  cursor-pointer" />

        </Link>
     
      </div>

        </div>
    </div>
  </div>
 
)
}




export default ContactUs
