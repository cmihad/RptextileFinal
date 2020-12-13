
import Image from 'next/image'
const Product = () => {
  return (
    <div className=" bg-upda  " id="product" >
    <h1 className="text-center text-2xl sm:text-4xl text-white  font-bold text-center py-16 font-montserrat tracking-wide">
      Our Products
    </h1>

    <div className= " grid-cols-1  grid sm:grid-cols-5 gap-x-16 pb-40 pt-20 place-items-center">
      <div>
      <Image 
        src="/tshirt1.png"
        width={378}
        height={382}

      />

      <h2 className="text-2xl text-white text-center pt-8 font-raleway">
        T-Shirt
      </h2>
     
     
      </div>

      <div>
      <Image 
        src="/trouser.png"
        width={160}
        height={350}

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

      />
        <h2 className="text-2xl text-white text-center pt-8 font-raleway">
        
        Undergarments
      </h2>

        </div>
    </div>
    </div>
  )
}

export default Product
