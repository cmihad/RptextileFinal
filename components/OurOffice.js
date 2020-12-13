import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { FaMapMarkerAlt} from 'react-icons/fa'
const OurOffice = () => {
  return (
    <div className="py-4  sm:py-1 "id="office">
          
   

          <div className="my-0 place-items-center sm:my-16 grid grid-cols-1 md:grid-cols-2 container mx-auto ">
          
          
          <div className="pt-0 pb-8 sm:pt-10">
          <h1 className="text-2xl tracking-tight font-display text-gray-700 font-bold">
            OUR Office
          </h1>
    
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center  ">

            <div className="mb-4 ">
              <h1 className="text-2xl tracking-tight font-display text-gray-700 font-bold"> Dhaka Office</h1>
              <p className="font-body text-xl text-gray-900">

              House # 21, Road # 13, Ranavola Avenue, Sector # 10, Uttara, Dhaka-1230
            </p>
            <Link href="https://www.google.com/maps/place/21+Rd+13,+Dhaka+1230/@23.8893727,90.3932417,14.75z/data=!4m13!1m7!3m6!1s0x3755c46f226bb4d5:0xc3f9e582fb3d41ff!2s21+Rd+13,+Dhaka+1230!3b1!8m2!3d23.8910329!4d90.3879109!3m4!1s0x3755c46f226bb4d5:0xc3f9e582fb3d41ff!8m2!3d23.8910329!4d90.3879109" >

              <h3 className="text-gray-900 text-3xl underline  font cursor-pointer">
                MAP
              </h3>
       
            </Link>
            </div>

          

         </div>
    </div>

    <div className="office-svg"  >
    <Link href="https://www.google.com/maps/place/21+Rd+13,+Dhaka+1230/@23.8893727,90.3932417,14.75z/data=!4m13!1m7!3m6!1s0x3755c46f226bb4d5:0xc3f9e582fb3d41ff!2s21+Rd+13,+Dhaka+1230!3b1!8m2!3d23.8910329!4d90.3879109!3m4!1s0x3755c46f226bb4d5:0xc3f9e582fb3d41ff!8m2!3d23.8910329!4d90.3879109" >
    <img 
      src="/AssetMap2x.png"
      width={500}
      height={230}  
      className="cursor-pointer"
    />
    </Link>
    
      
    </div>
    </div>
    </div>
  )
}

export default OurOffice
