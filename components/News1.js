import React from 'react'

function news1() {
  return (
    <div>
     <div>
     <div>
       <h1 className="text-5xl text-center text-gray-800 tracking-wide font-bold">
        Our Offices
       </h1>
     </div>
        <div className="mx-auto mt-16 xl:max-w-6xl">
          {/* <ImageCard
            src="/new-york.jpeg"
            title="New York City"
            date="2015–Present"
          /> */}
          <div className="flex xl:mt-10 xl:-mx-6">
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/new-york.jpeg"
                title="New York"
                date="160-37 HIGHLAND AVENUE,FLOOR-1,JAMAICA,NEW YORK,NY-11432,USA."
                aspectRatio={1}
              />
            </div>
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/dhaka.jpg"
                title="Dhaka"
                date="H# 13 (1st Floor), R # Garib-e-Newaz
Avenue, Sector-11, Uttara, Dhaka-1230."
                aspectRatio={1}
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
function ImageCard({ src, title, date, aspectRatio = 16 / 9 }) {
  return (
    <div className="relative">
      <Img
        className="object-cover w-full h-full xl:rounded-lg"
        src={src}
        aspectRatio={aspectRatio}
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
