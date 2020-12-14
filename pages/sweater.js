import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
const sweater = () => {
  return (
    <div>
    <Navbar></Navbar>
      <div className="grid grid-cols-1  sm:grid-cols-4 sm:grid-rows-4 container mx-auto gap-x-3 gap-y-4 ">
          <div>

          <article >

          <Image 
            
            src="/sweater/1.png"
            width= {400}
            height={450}
            >

          </Image>


          </article>
          </div>



          <div>

<article class=" ">

<Image 
  
  src="/sweater/2.png"
  width= {400}
  height={450}
  >

</Image>


</article>
</div>


<div>

<article class=" rounded-none  ">

<Image 
  
  src="/sweater/3.png"
  width= {400}
  height={450}
  >

</Image>


</article>
</div>


<div>

<article class=" rounded-none  ">

<Image 
  
  src="/sweater/4.png"
  width= {400}
  height={450}
  >

</Image>


</article>
</div>


<div>

<article class=" rounded-none  ">

<Image 
  
  src="/sweater/5.png"
  width= {400}
  height={450}
  >

</Image>


</article>
</div>


<div>

<article class=" rounded-none  ">

<Image 
  
  src="/sweater/6.png"
  width= {400}
  height={450}
  >

</Image>


</article>
</div>


<div>

<article class=" rounded-none  ">

<Image 
  
  src="/sweater/7.png"
  width= {400}
  height={450}
  >

</Image>


</article>
</div>


<div>

<article class=" rounded-none  ">

<Image 
  
  src="/sweater/8.png"
  width= {400}
  height={450}
  >

</Image>


</article>
</div>
</div>
</div>

)
}
export default sweater