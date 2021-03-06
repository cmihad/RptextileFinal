import Footer from '../components/Footer'
import OurCustomers from '../components/OurCustomers'
import ContactUs from '../components/ContactUs'
import OurOffice from '../components/OurOffice'
import VideoHeader from '../components/VideoHeader'
import Ceo from '../components/Ceo'
import Product from '../components/Product'
import Timeline from '../components/Timeline'
import NewServices from '../components/NewServices'
import SimpleMap from '../components/SimpleMap'
import OurOffice1 from '../components/OurOffice1'
import FacebookChat from '../components/FacebookChat'
import Enviroment from '../components/Enviroment'

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


    <NewServices></NewServices>
    <OurCustomers></OurCustomers>

    <OurOffice1></OurOffice1>

    <Enviroment></Enviroment>
    <SimpleMap></SimpleMap>
    <ContactUs></ContactUs>

    <Footer></Footer>
<FacebookChat></FacebookChat>
    </div>

  )
}
