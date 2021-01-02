import React from 'react'

const Timeline = () => {
  return (
   <div className="bg-white-F9 ">


    <div className="container bg-white-F9  mx-auto w-full h-full">
    <div className="relative wrap overflow-hidden p-10 h-full">
    <h1 className="text-2xl my-6 sm:text-4xl font-bold text-center text-gray-800 mb-8  font-montserrat">
            Our Journey
          </h1>
      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}} />
      {/* right timeline */}
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl h-12 w-1/8 sm:h-16 sm:w-1/12  rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white font-montserrat ">2010</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
         
            
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 font-raleway">Engineer turned entrepreneur, Poritosh Chandra Paul is the founder of RP Group. Establishing the company back in 2010, he started trading business in the garments sector.</p>

        
        </div>
      </div>
      {/* left timeline */}
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl h-12 w-1/8 sm:h-16 sm:w-1/12  rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg font-montserrat">2012</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">

        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity- font-raleway">Started business on a small scale, working as a provider of fabrics, garments, and accessories to other local businesses.</p>

          
        </div>
      </div>
      {/* right timeline */}
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl h-12 w-1/8 sm:h-16 sm:w-1/12  rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white font-montserrat">2018</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
          
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 font-raleway">RP Textile & Fashion officially working in its first big office with a total of 16 employees.</p>
        </div>
      </div>
      {/* left timeline */}
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl h-12 w-1/8 sm:h-16 sm:w-1/12  rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg font-montserrat">2019</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
       


        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 font-raleway">The construction firm, RP Engineers, witnessed a rapid growth rate, with new clients and suppliers being added to their repertoire regularly.</p>

        </div>
      </div>
       {/* right timeline */}
       <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl h-12 w-1/8 sm:h-16 sm:w-1/12 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white font-montserrat">2020</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 font-raleway">The rapidly growing company keeps expanding with ventures in multiple sectors of the clothing industry. Currently operating from their new head office with a total of 80 employees. </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Timeline
