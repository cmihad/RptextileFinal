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
         
          <h2 className="text-nw font-semibold text-2xl pt-4 font-montserrat">
          Design & <br/>
          Development
          </h2>
          <p className="pt-4 text-sm px-2 text-left font-raleway">
          The design and development phase of the product is an extremely crucial step, upon which the textile and fashion industry’s growth are greatly depended on. The process of product development realzies the creativity and vision of designers, and produces a tangible form while keeping in mind all the technical and aesthetics aspects of it.
          </p>
          
          
        </div>

        <div className="nav-block__menu-item bg-compliance h-full relative updown reliso" >

        <Image 
          src="/Merch.png"
          width= {79}
          height={76}
          >
      
        </Image>

        <h2 className="text-white font-semibold text-2xl pt-6 font-montserrat">

        Marketing & <br/> Merchandising
        </h2>

        <p className="pt-4 text-sm px-2 text-left text-white font-raleway">
        Merchandisers help create a key connection between the buyer and the producer. From the pre-production activities, such as price settlement, order placement, and sample approval, to the post-production activities, such as, and confirming that the goods have been handed over to the shipping line on time, merchandisers are involved in every step of the process.

With this in mind, we have a dedicated merchandising team for each of our customers. This way, our customers are sure to receive excellent service in communication, development, sampling, regular production updates, and shipping confirmation. In addition to that, having a dedicated team that will closely monitor the process will help in identifying problems and take proactive steps.

              </p>

        </div>

        <div className="nav-block__menu-item  h-full bg-white relative updown reliso">
        <Image className="mx-10 "
          src="/check.png"
          width= {76}
          height={66}
          >
      
        </Image>
            <h2 className="text-nw font-semibold text-2xl pt-3 font-montserrat">
            Quality Check, <br/>
          Assurance <br/>
          & Testing
            </h2>

            <p className="pt-4 text-sm px-2 text-left font-raleway">
            We want to deliver the best value for money to our customers with our products. For that, we ensure that the quality of our products is always top-notch. Quality control is practiced right from the initial stage of sourcing raw materials to the stage of the final finished garment.

Our Quality Management Team consists of highly experienced personnel who will meticulously look over the quality of the product throughout each stage of the process, from pattern adjustment and cutting to the finishing and packing. Moreover, our technical team ensures that the craftsmanship and measurements are quintessential before the final product is handed over to the customer. 

          </p>
        </div>
       
        <div className="nav-block__menu-item bg-compliance h-full relative updown  reliso" >


        <Image 
          src="/correct.png"
          width= {65}
          height={74}
          >
      
        </Image>

          <h2 className="text-white font-semibold text-2xl pt-6 font-montserrat">
          Compliance <br/> & Safety
          </h2>

          <p className="pt-4 text-sm px-2 text-left text-white font-raleway">
          Everyone working hard on our team, and anyone associated with our work, deserves to be working in the best possible environment. With that in mind, we ensure that we maintain our standards well above the minimum and our stringent levels of compliance are met. 

Through the management structure of our compliance team, we specifically appoint safety guardians for social and labor welfare, ethics, building, structural and environmental wellbeing. Every member of the RP Textile family is key to our success, and their wellbeing is always our first priority.

          </p>
        </div>

        <div className="nav-block__menu-item h-full bg-white relative updown reliso">

        <Image 
          src="/delivery.png"
          width= {75}
          height={55}
          >
      
        </Image>
          <h2 className="text-nw font-semibold text-2xl pt-4 font-montserrat">
          Shipping  <br/>& Logistics

          </h2>

          <p className="pt-4 text-sm px-2 text-left font-raleway ">
          We are proud of how efficiently our in-house shipping and logistics team manages the entire delivery process and effortlessly tackles all logistical needs of our clients. A specialist member of our team is on hand to process payments, arrange and update the shipping documentation, negotiate with freight forwarders on your behalf, and deliver any special arrangements that are required with a Centro representative to update you in real-time.

          </p>

        </div>

    
       

      </div>
   
    </div>



    </div>
  )
}

export default OurServices
