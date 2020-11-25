import React from 'react'
import Image from 'next/image'
const OurCustomers = () => {
  return (
    <div className="container mx-auto my-24"  >
    <h1 className="text-gray-800
           text-center text-4xl my-10 tracking-wide font-bold  font-display">
            Companies That We Work With
          </h1>
         
   <div className="flex   justify-evenly py-16 ">
      <div>

        <Image className="mx-10"
          src="/cuslogo1.png"
          height={60}
          width= {80}
          >
      
        </Image>
    
      </div>

      <div>

        <Image className="mx-10"
          src="/cuslogo2.png"
          height={60}
          width= {80}
          >
      
        </Image>
    
      </div>
      <div>

        <Image className="mx-10"
          src="/cuslogo3.png"
          height={60}
          width= {80}
          >
      
        </Image>
    
      </div>

      <div>

        <Image className="mx-10"
          src="/cuslogo4.png"
          height={60}
          width= {80}
          >

        </Image>

        </div>


        <div>

        <Image className="mx-10"
          src="/cuslogo5.png"
          height={60}
          width= {150}
          >

        </Image>

        </div>       

        <div>

          <Image className="mx-10"
            src="/cuslogo6.png"
            height={60}
            width= {160}
            >

          </Image>

          </div>      


          <div>

            <Image className="mx-10"
              src="/cuslogo7.png"
              height={60}
              width= {180}
              >

            </Image>

            </div>     
    
  </div>
    </div>
  )
}

export default OurCustomers
