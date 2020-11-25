import React from 'react'

const ContactUsBanner = () => {
  return (
    <div>
      
      <div className="py-40 contact-us-banner" >
        <div className="container mx-auto ">
          <h2 className="text-6xl font-bold mb-2 text-white text-center font-display ">
            Contact Us
          </h2>
           <h3 className="text-2xl mb-8 text-gray-200 font-body text-center">
            We are just a click way,
            we are available 24/7. <br/>
            Feel free to reach out to us

          </h3> 
          {/* <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default ContactUsBanner
