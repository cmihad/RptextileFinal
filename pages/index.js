

import Footer from '../components/Footer'

import OurCustomers from '../components/OurCustomers'
import ContactUs from '../components/ContactUs'
import OurOffice from '../components/OurOffice'
import OurServices from '../components/OurServices'
import VideoHeader from '../components/VideoHeader'
import Ceo from '../components/Ceo'
import Product from '../components/Product'
import Timeline from '../components/Timeline'
export default function Home() {
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
