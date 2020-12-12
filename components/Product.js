
import Image from 'next/image'
const Product = () => {
  return (
    <div className=" bg-gray-900 " >
    <h1 className="text-4xl text-white  font-bold text-center py-8">
      Our Product
    </h1>

    <div className="container mx-auto grid grid-cols-5 gap-x-8 pb-40 pt-32 place-items-center">
      <div>
      <Image 
        src="/tshirt1.png"
        width={378}
        height={382}

      />

      <h2 className="text-2xl text-white font-semibold text-center pt-8">
        T-Shirt
      </h2>
     
     
      </div>

      <div>
      <Image 
        src="/trouser.png"
        width={195}
        height={250}

      />
        <h2 className="text-2xl text-white font-semibold text-center pt-8">
        Trouser
      </h2>
        
        </div>

        <div>
        

        <Image 
        src="/tshirt.png"
        width={378}
        height={382}

      />
      <h2 className="text-2xl text-white font-semibold text-center pt-8">
        Shirt
      </h2>

        </div>

        <div>

        <Image 
        src="/jacket.png"
        width={378}
        height={382}

      />
        <h2 className="text-2xl text-white font-semibold text-center pt-8">
        Jacket
      </h2>

        </div>

        <div>
        
        <Image 
        src="/lin6.png"
        width={378}
        height={382}

      />
        <h2 className="text-2xl text-white font-semibold text-center pt-8">
        
        Under Garments
      </h2>

        </div>
    </div>
    </div>
  )
}

export default Product
