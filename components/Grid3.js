import React from 'react'
import { FaMoneyBillAlt } from 'react-icons/fa'


function Grid3() {
  return (
    <div>
      
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-body">
          Testimonials
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                < FaMoneyBillAlt />
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">
                John Doe
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                As an Athlete, this is the perfect product for me. I wear my
                Smart Health Monitoring Wristwatch everywhere I go, even in the
                bathroom since it's waterproof.
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">
                Jane Doe
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                I don't regret buying this wearble gadget. One of the best
                gadgets I own!.
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">
                James Doe
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Grid3