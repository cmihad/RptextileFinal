import React from 'react'
import Image from 'next/image'
const Ceo = () => {
  return (
    <div className="bg-bg-f5 py-40" id="about">

    
    <div className="container mx-auto ">
    <div className="md:grid md:grid-cols-2 place-items-center">

      <div>
        <h3 className="text-lg  text-gray-700 py-2">
          About Us
        </h3>
        <h1 className="text-5xl text-gray-800 font-bold py-1">
          Founder's Note
        </h1>
        <p className="text-lg  text-gray-900 py-2">
        We aim to put forward the best so that our clients never turn away from our doors unsatisfied. To ensure that we can achieve that, two things are extremely crucial: prioritizing our customers and working as a team. Moreover, our team consists of textile suppliers, designers, service providers, manufacturers, merchandisers, all experts in their own fields.
        </p>

        <p className="text-2xl   text-gray-900  font-semibold py-2">MD: Poritosh Chandra Paul</p>
        <div className="pr-10">

        <img
         className="pr-40"
        src="/rsign1.png"
        width={300}
        height={120}

        />
        </div>
      </div>

      <div>
        <Image
          src="/ceo.jpg"
          width={500}
          height={500}
        
        />

        
      </div>
      
    </div>
    </div>

    </div>
  )
}

export default Ceo
