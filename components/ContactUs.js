import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {  FaFacebookF ,FaLinkedinIn ,FaTelegramPlane ,FaWhatsapp } from 'react-icons/fa'
function ContactUs() {
  return (


  <div className="mt-4 bg-upda" >
    <div class=" flex flex-col py-16 sm:place-items-center sm:flex-col justify-center sm:py-12">

        <div className="mx-12 my-6">
        <Image
         src="/Layer2@2x.png"
         width={220}
         height={207}
        />

     
        </div>
      <div className=" mx-12 my-6">
      <h1  className=" text-center font-body text-white text-2xl tracking-tighter ">
        For more info  please contact us  +88 01710267919 (BD) <br/>
        info@rptextile.com
      </h1>
    
      <div className="flex justify-center mt-3">
      <FaFacebookF className=" text-center text-white text-3xl my-5 mx-4 cursor-pointer" />

      <Link href="https://mihad.dev/" >


      <FaLinkedinIn className="text-white text-3xl my-5 mx-4  cursor-pointer" />
      </Link>

     

      <FaTelegramPlane className="text-white text-3xl my-5 mx-4  cursor-pointer" />
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
