import React from 'react'
import Image from 'next/image'
const Ceo = () => {
  return (
    <div className="py-8 bg-new-white sm:py-40" id="about">


    <div className="container mx-auto ">
    <div className="md:grid md:grid-cols-2 place-items-center">

      <div className="pb-12">
        {/* <h3 className="text-xl  text-gray-700 py-2">
          About Us
        </h3> */}
        <h1 className="text-4xl text-left ml-4 sm:text-left sm:text-5xl text-gray-800 font-bold  font-montserrat">
          Founder's Note
        </h1>
        <p className="mx-4 text-left  sm:text-left text-lg  text-gray-900 py-2 sm:mr-20 font-raleway sm:mx-0 ">
        We aim to put forward the best so that our clients never turn away from our doors unsatisfied. To ensure that we can achieve that, two things are extremely crucial: prioritizing our customers and working as a team. Moreover, our team consists of textile suppliers, designers, service providers, manufacturers, merchandisers, all experts in their own fields.
        </p>
        <div className="pt-6 mx-4 sm:mx-0 " >

        <Image

        src="/rsz_sign.png"
        width={250}
        height={50}
        priority

        />
        </div>
        <p className="mx-4 text-2xl  sm:mx-0 text-gray-900 pt-2 font-montserrat font-semibold"> Poritosh Chandra Paul</p>
        <p className="mx-4 text-2xl sm:mx-0   text-gray-900   font-montserrat font-medium"> Managing Director</p>

      </div>

      <div>
        <Image
          src="/ceo.jpg"
          width={4928}
          height={3264}
          className="rounded-2xl "


        />


      </div>

    </div>
    </div>

    </div>
  )
}

export default Ceo
