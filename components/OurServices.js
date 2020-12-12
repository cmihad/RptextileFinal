import React from 'react'
import Image from 'next/image'
const OurServices = () => {
  return (
    <div  className="bg-upda " id="service">
      <div className="py-8 sm:py-20">
      <h1 className="text-white
           text-center text-2xl  sm:text-3xl tracking-wide font-bold  font-montserrat">
            Our Services
          </h1>
      </div>

      <div className="flex-5col ">
      <div className="nav-block">


        <div className="nav-block__menu-item ">
          
        <Image 
          
          src="/Dress_Code@2x.png"
          width= {63}
          height={84}
          >
      
        </Image>
         
          <h2 className="text-nw font-semibold text-2xl pt-4">
          Design & <br/>
          Development
          </h2>
        </div>

        <div className="nav-block__menu-item " >

        <Image 
          src="/Merch.png"
          width= {79}
          height={76}
          >
      
        </Image>

        <h2 className="text-nw font-semibold text-2xl pt-6">

        Marketing & <br/> Merchandising
        </h2>
        </div>

        <div className="nav-block__menu-item ">
        <Image className="mx-10 "
          src="/check.png"
          width= {76}
          height={66}
          >
      
        </Image>
            <h2 className="text-nw font-semibold text-2xl pt-12">
            Quality Check, <br/>
          Assurance <br/>
          & Testing
            </h2>
        </div>
       
        <div className="nav-block__menu-item " >


        <Image 
          src="/correct.png"
          width= {65}
          height={74}
          >
      
        </Image>

          <h2 className="text-nw font-semibold text-2xl pt-6">
          Compliance <br/> & Safety
          </h2>

        </div>

        <div className="nav-block__menu-item ">

        <Image 
          src="/delivery.png"
          width= {75}
          height={55}
          >
      
        </Image>
          <h2 className="text-nw font-semibold text-2xl pt-4">
          Shipping  <br/>& Logistics

          </h2>
        </div>

      </div>
       

      </div>
    </div>
  )
}

export default OurServices
