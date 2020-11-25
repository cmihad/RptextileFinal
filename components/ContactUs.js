import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  FaLinkedinIn, FaWhatsapp,FaTelegram } from 'react-icons/fa'
function ContactUs() {
  return (


  <div className="my-24 bg-pr" >
    <div class="flex place-items-center justify-center py-24">

        <div className="mx-12">
        <img
         src="/Group 825.png"
         width={265}
         height={207}
        />

     
        </div>
      <div className="mx-12">
      <h1  className="font-body text-white text-2xl tracking-tighter">
        For more info <br /> please contact us
      </h1>
      <p  className="font-body text-white text-2xl tracking-tighter">
      +88 01710267919 (BD) <br />
         info@rptextile.com
      </p>
      <div className="flex">
      <Link href="http://wa.me/8801710267919"> 

      <FaWhatsapp  className="text-white text-2xl my-5 mx-1" />
      </Link>

      <FaTelegram className="text-white text-2xl my-5 mx-1" />
      <Link href="https://mihad.dev/">

      <FaLinkedinIn className="text-white text-2xl my-5 mx-1" />
      </Link>
      </div>

        </div>
    </div>
  </div>
 
)
}




export default ContactUs
