import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { FaMapMarkerAlt} from 'react-icons/fa'
const OurOffice = () => {
  return (
    <div className="py-0 sm:py-1">
          
   

          <div className="my-0 place-items-center sm:my-8 grid grid-cols-1 md:grid-cols-2 container mx-auto ">
          
          
          <div className=" pt-10 sm:pt-32 ml-8">
          <h1>
            OUR Office
          </h1>
    
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center  ">

            <div className="mb-4 ">
              <h1 className="text-2xl tracking-tight font-display text-gray-700 font-bold"> Dhaka Office</h1>
              <p className="font-body text-xl text-gray-900">

              H# 13 (1st Floor), <br/> R # Garib-e-Newaz
              Avenue, <br/> Sector-11, Uttara, Dhaka-1230
            </p>
            <Link href="https://mihad.dev/" >

              <h3 className="text-gray-900 text-3xl underline  font">
                MAP
              </h3>
       
            </Link>
            </div>

          

         </div>
    </div>
    <div className="office-svg"  >
    <img 
      src="/AssetMap.png"
      width={650}
      height={500}  
    />
    
      
    </div>
    </div>
    </div>
  )
}

export default OurOffice
