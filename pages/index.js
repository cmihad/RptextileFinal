

import Footer from '../components/Footer'

import OurCustomers from '../components/OurCustomers'
import ContactUs from '../components/ContactUs'
import OurOffice from '../components/OurOffice'
import OurServices from '../components/OurServices'
import VideoHeader from '../components/VideoHeader'
import Ceo from '../components/Ceo'
import Product from '../components/Product'
import Timeline from '../components/Timeline'


// let client = require('contentful').createClient({
//   space: process.env.NEXT_CONTENTFUL_SPACE_ID,
//   accessToken:process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
// });
// export async function getStaticProps(){
//   let data = await client.getEntries({
//     content_type:'articles'
//   })
//   return{

//     props: {
//       articles: data.items,
//     },

//     revalidate: 1,
//   }
   
// }



export default function Home( ) {

  return (
    <div className="mx-auto">
   
     <VideoHeader></VideoHeader>
     
      <Product></Product>
      <Ceo></Ceo>
      <Timeline></Timeline>
   
    <OurServices></OurServices>
    
    <OurCustomers></OurCustomers>
    <OurOffice></OurOffice>
    <ContactUs></ContactUs>
    <Footer></Footer>

    </div>
   
  )
}
