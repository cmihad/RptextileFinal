import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  FaLinkedinIn, FaWhatsapp,FaTelegram } from 'react-icons/fa'
function ContactUs() {
  return (


  <div className="mt-24 bg-pr" >
    <div class=" flex flex-col py-16 sm:place-items-center sm:flex-row justify-center sm:py-24">

        <div className="mx-12 my-6">
        <img
         src="/Group 825.png"
         width={265}
         height={207}
        />

     
        </div>
      <div className="mx-12 my-6">
      <h1  className=" text-center font-body text-white text-2xl tracking-tighter ">
        For more info <br /> please contact us
      </h1>
      <p  className="text-center font-body text-white text-2xl tracking-tighter">
          +88 01710267919 (BD) <br />
         info@rptextile.com
      </p>
      <div className="flex justify-center">
      <Link href="http://wa.me/8801710267919"> 

      <FaWhatsapp  
      className= "text-center text-white text-2xl my-5 mx-1 cursor-pointer" />
      
      </Link>


      <FaTelegram className="text-white text-2xl my-5 mx-1 cursor-pointer" />
      <Link href="https://mihad.dev/" >

      <FaLinkedinIn className="text-white text-2xl my-5 mx-1 cursor-pointer" />
      </Link>
      </div>

        </div>
    </div>
  </div>
 
)
}




export default ContactUs
