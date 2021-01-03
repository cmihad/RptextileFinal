import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Map from './SimpleMap'


import { FaMapMarkerAlt} from 'react-icons/fa'
const OurOffice1 = () => {
  return (
    <div className="py-4  sm:py-1 "id="office">
          
          <div className="mx-auto container py-12 ">
          
            <div className="mb-4 text-center">
              <h1 className="text-2xl tracking-tight text-gray-700 font-bold font-montserrat"> Dhaka Office</h1>
              <p className=" text-xl text-gray-900 font-raleway">

              House # 21, Road # 13, Ranavola Avenue, Sector # 10, Uttara, Dhaka-1230
            </p>
            <Link href="https://www.google.com/maps/place/23%C2%B052'56.1%22N+90%C2%B023'28.2%22E/@23.8822522,90.3906188,19z/data=!3m1!4b1!4m21!1m14!4m13!1m4!2m2!1d90.3905978!2d23.8767859!4e1!1m6!1m2!1s0x3755c46f226bb4d5:0xc3f9e582fb3d41ff!2s21+Rd+13,+Dhaka+1230!2m2!1d90.3879109!2d23.8910329!5i1!3m5!1s0x0:0x0!7e2!8m2!3d23.8822507!4d90.3911663" >

              <h3 className="text-gray-900 text-3xl underline  font cursor-pointer">
                MAP
              </h3>
       
            </Link>
            </div>

          

         </div>


    </div>

  )
}

export default OurOffice1
