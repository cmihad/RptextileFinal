import React from 'react'

const ServicesBanner = () => {
  return (
    <div>
   <div className="py-40 services-banner" >
        <div className="container mx-auto ">
          <h2 className="text-6xl font-bold mb-2 text-white text-center font-display ">
            Our Services
          </h2>
           <h3 className="text-2xl mb-8 text-gray-200 font-body text-center">
           Designs born from expertise and diligence. <br/>
From the initial product development to the final delivery, <br/> our team is meticulous and efficiently delivers the products on time.


          </h3> 
          {/* <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button> */}
        </div>
      </div>
 </div>
  )
}

export default ServicesBanner
