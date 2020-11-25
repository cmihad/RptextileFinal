import React from 'react'
import Image from 'next/image'
function news1() {
  return (
    <div>
     <div>
     <div >
       <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8 font-body">
        Product Category
       </h1>
     </div>
        <div className="mx-auto mt-16 xl:max-w-6xl">
          {/* <ImageCard
            src="/new-york.jpeg"
            title="New York City"
            date="2015–Present"
          /> */}
          
          <div className="flex xl:mt-10 xl:-mx-6">
            <div className="w-full xl:px-6">
              <ImageCard
                src="/Asset3.jpg"
                title="Jeans"
               
                width={420}
                height={420}
              />
            </div>
            <div className="w-full xl:px-6">
              <ImageCard
                src="/Asset4.jpg"
                title="Denim"
                width={420}
                height={420}
              />
            </div>
            <div className="w-full xl:px-6">
              <ImageCard
                 src="/Asset5.jpg"
                title="Mens clothing"
                width={420}
                height={420}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default news1
const Img = ({ src, aspectRatio = 16 / 9, className = "" }) => {
  return (
    <div
      className="relative"
      style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
    >
      <div className="absolute inset-0">
        <img src={src} className={`${className} w-full h-full object-cover`} />
      </div>
    </div>
  );
};
function ImageCard({ src, title, date, width, height }) {
  return (
    <div className="relative">
    
      <Image
        className="object-cover w-full h-full xl:rounded-lg"
        src={src}
        width={width}
        height={height}
        
      />
       <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-gradient-to-t from-black.85 xl:bg-none xl:static xl:text-gray-900 xl:px-0">
        <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
          {title}
        </p>
        <p className="text-xs sm:text-sm xl:text-gray-700">{date}</p>
      </div>
    </div>
  );
}
