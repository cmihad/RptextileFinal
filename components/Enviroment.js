import React from 'react'
import Image from 'next/image'
const Enviroment = () => {
  return (
    <div>


<h1 className="text-gray-900
        text-center text-2xl my-4 sm:text-4xl sm:my-10 tracking-wide font-bold  font-display">
         Work Environment
       </h1>
       <div className="grid grid-cols-1 md:grid-cols-4">
        <div><Image
      className=" min-w-full"
      src="/shirt/1.jpg"
       width={800}
       height={510}

      priority

      /></div>
        <div>
        <Image
     className=" min-w-full"
     src="/shirt/2.jpg"
     width={800}
       height={510}

      priority

      />
        </div>

        <div>
        <Image
       className=" min-w-full"
       src="/shirt/3.jpg"
       width={800}
       height={510}

      priority

      />
        </div>
        <div>
        <Image
  className=" min-w-full"
  src="/shirt/4.jpg"
  width={800}
       height={510}

      priority

      />
        </div>



       </div>

    </div>
  )
}

export default Enviroment
