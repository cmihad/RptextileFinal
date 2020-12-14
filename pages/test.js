import React from 'react'
import Image from 'next/image'
const test = () => {
  return (
    <div>
      <div className="grid grid-cols-5 h-96 bg-gray-800 place-items-center">
      <div>
      <div className="h-full bg-red-400 text-center relative updown">

         
      <Image 
          
          src="/Dress_Code@2x.png"
          width= {63}
          height={84}
          >
      
        </Image>
         
          <h2 className="text-nw font-semibold text-2xl pt-4 font-raleway">
          Design & <br/>
          Development
          </h2>
          <p className="pt-4 text-sm px-2 text-left">
          Product development is the very first stage of introduction of new style. The concept of new style or design is developed by fashion designer which is merely a design or sketch on the paper. Product development is the process where that sketch or design is converted in to a 3D form garment, with all technical and aesthetic approach keeping in mind. Our design team reflects the thoughts of designer in physical sample.
          </p>
      </div>
      </div>



      <div>
        
        </div>
        <div>
        
        </div>

        <div>
        
        </div>

        <div>
        
        </div>
      </div>
    </div>
  )
}

export default test
