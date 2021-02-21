
import Image from 'next/image'
import Link from 'next/link'
const Product = () => {
  return (
    <div className="bg-gray-800 bg-product " id="product"  >
    <h1 className=" py-8 text-center text-2xl sm:text-4xl text-white  font-bold md:py-16 font-montserrat tracking-wide">
      Our Products
    </h1>

    <div className= " pt-2 grid-cols-1  grid sm:grid-cols-5 gap-x-16 pb-16 sm:pt-20 place-items-center">
      <div>
      <Image
        src="/tshirt1.png"
        width={378}
        height={382}
        priority
      />

      <h2 className="text-2xl text-white text-center pt-8 font-raleway">
        T-Shirt
      </h2>


      </div>

      <div>
      <Image
        src="/pantmain1.png"
        width={120}
        height={240}
        priority
      />
        <h2 className="text-2xl text-white text-center pt-8 font-raleway ">
        Trouser
      </h2>

        </div>

        <div>


        <Image
        src="/tshirt.png"
        width={378}
        height={382}
        priority

      />
      <h2 className="text-2xl text-white text-center pt-8 font-raleway">
        Shirt
      </h2>

        </div>

        <div>

        <Image
        src="/jacket.png"
        width={378}
        height={382}
        priority
      />
        <h2 className="text-2xl text-white text-center pt-8 font-raleway">
        Jacket
      </h2>

        </div>

        <div>

        <Image
        src="/lin6.png"
        width={165}
        height={206}
        priority

      />
        <h2 className="text-2xl text-white text-center pt-8 font-raleway">

        Undergarments
      </h2>

        </div>
    </div>


    <div className="text-center pb-24">

      <Link href="/collections">

      <button className="text-center w-64 h-12 bg-bg-f5 rounded-md">
       <h1 className="font-montserrat font-bold">

        Our Collections
       </h1>
      </button>
      </Link>
    </div>
    </div>
  )
}

export default Product
