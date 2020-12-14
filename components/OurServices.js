import React from 'react'
import Image from 'next/image'
const OurServices = () => {
  return (
    <div>

   
    <div  className="bg-quader " id="service">
      <div className="py-8 sm:py-20">
      <h1 className="text-white
           text-center text-2xl  sm:text-4xl tracking-wide font-bold  font-montserrat">
            Our Services
          </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 h-96">
   


        <div className="nav-block__menu-item h-full bg-white relative updown reliso ">
          
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

        <div className="nav-block__menu-item bg-compliance h-full relative updown reliso" >

        <Image 
          src="/Merch.png"
          width= {79}
          height={76}
          >
      
        </Image>

        <h2 className="text-white font-semibold text-2xl pt-6 font-raleway">

        Marketing & <br/> Merchandising
        </h2>

        <p className="pt-4 text-sm px-2 text-left text-white">
        We have dedicated merchandising team for individual customer. Our merchandising team helps buyer with all sort of communication, development, sampling, regular production updates & confirmation on shipping. Also they work closely to identify any challenge at the very early stages & acts proactively to solve the problem.
        
        Our merchandising team also helps buyers to create products as per Buyers requirement. Offer different quality, new processes, adding or removing items to offer the best product for the customers.
              </p>

        </div>

        <div className="nav-block__menu-item  h-full bg-white relative updown reliso">
        <Image className="mx-10 "
          src="/check.png"
          width= {76}
          height={66}
          >
      
        </Image>
            <h2 className="text-nw font-semibold text-2xl pt-3 font-raleway">
            Quality Check, <br/>
          Assurance <br/>
          & Testing
            </h2>

            <p className="pt-4 text-sm px-2 text-left ">
       Quality is of prime importance in any aspect of business. Customers demand and expect value for money. 

We have a highly experienced quality team who will perform quality assurance from pattern adjustment, cutting, stitching, and finishing through packing. Also our technical team ensures the correct fit, workmanship & measurement to offer the best quality products for the final customer. Transparency of procedure is one of our core principles and we welcome the opportunity to review and develop our QC procedures to suit the needs of any of our customers.
          </p>
        </div>
       
        <div className="nav-block__menu-item bg-compliance h-full relative updown  reliso" >


        <Image 
          src="/correct.png"
          width= {65}
          height={74}
          >
      
        </Image>

          <h2 className="text-white font-semibold text-2xl pt-6 font-raleway">
          Compliance <br/> & Safety
          </h2>

          <p className="pt-4 text-sm px-2 text-left text-white">
        Our team are embedded in our own factories and those we work with to ensure standards are well above the minimum and our own stringent levels of compliance are met. Through the management structure of our compliance team we specifically appoint safety guardians for social and labour welfare, ethics, building, structural and environmental wellbeing. Our people are key to our success and their wellbeing is always at the forefront of our thinking.
          </p>
        </div>

        <div className="nav-block__menu-item h-full bg-white relative updown reliso">

        <Image 
          src="/delivery.png"
          width= {75}
          height={55}
          >
      
        </Image>
          <h2 className="text-nw font-semibold text-2xl pt-4 font-raleway">
          Shipping  <br/>& Logistics

          </h2>

          <p className="pt-4 text-sm px-2 text-left ">
        Our in house shipping and logistics team allows to efficiently process and manage the delivery and logistical needs of our clients orders. A specialist member of our team is on hand to process payments, arrange and update shipping documentation, negotiate with freight forwarders on your behalf and deliver on any special arrangements that are required with a Centro representative on hand to update you in real time.
          </p>

        </div>

    
       

      </div>
   
    </div>



    </div>
  )
}

export default OurServices
