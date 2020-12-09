import React from 'react'
import Image from 'next/image'
const OurCustomers = () => {
  return (
    <div className="img-custtomer-bg py-2">

    <div className="container mx-auto my-0 sm:my-24 "  >
    <h1 className="text-white
           text-center text-2xl my-4 sm:text-4xl sm:my-10 tracking-wide font-bold  font-display">
            Companies That We Work With
          </h1>
         
   <div className=" customer-grid px-4 pb-8 pt-4 md: justify-evenly md:py-16 ">
      <div>

        <Image className="mx-10"
          src="/Group8.png"
          width= {114}
          height={71}
          >
      
        </Image>
    
      </div>

      <div>

        <Image className="mx-10"
          src="/Group10.png"
          width= {87}
          height={66}
          >
      
        </Image>
    
      </div>
      <div>

      <Image className="mx-10"
          src="/Group12.png"
          width= {63}
          height={55}
          >
      
        </Image>
    
      </div>

      <div>

      <Image className="mx-10"
          src="/Group14.png"
          width= {177}
          height={40}
          >
      
        </Image>
        </div>


        <div>

        <Image className="mx-10"
          src="/Group16.png"
          width= {130}
          height={25}
          >
      
        </Image>

        </div>       

        <div className="mr-24">

        <Image className="mx-10"
          src="/Group22.png"
          width= {86}
          height={75}
          >
      
        </Image>

          </div>      


          <div>

          <Image className="mx-10"
          src="/Group18.png"
          width= {160}
          height={40}
          >
      
        </Image>
            </div>    
            <div>

            <Image className="mx-10"
            src="/Group24.png"
            width= {160}
            height={40}
            >
        
            </Image>
            </div>     


           <div>

            <Image className="mx-10"
            src="/Group20.png"
            width= {140}
            height={38}
            >
        
            </Image>
            </div>      
            
           <div className="ml-20">

              <Image className="mx-10"
              src="/Group26.png"
              width= {140}
              height={38}
              >

              </Image>
              </div>      
              <div className="ml-20">

           
            </div>      

      <div className="ml-20">

        <Image className="mx-10"
        src="/Group32.png"
        width= {140}
        height={38}
        >

        </Image>
              </div>      
        <div className="ml-20">

      <Image className="mx-10"
      src="/Group30.png"
      width= {73}
      height={45}
      >

      </Image>
      </div>      
    <div className="ml-20">

      <Image className="mx-10"
      src="/Group28.png"
      width= {110}
      height={35}
      >

      </Image>
      </div>      
   <div className="ml-20">

      </div>      

    
  </div>
    </div>
    </div>
  )
}

export default OurCustomers
