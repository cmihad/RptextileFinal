import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Services from '../components/Services'
import Image from 'next/image'
import Ready from '../components/Ready'
import News1 from '../components/News1'
import News2 from '../components/News2'
import HeaderDummy from '../components/Headerdummy'
import HeaderMain  from '../components/HeaderMain'
import CategoryHome from '../components/CategoryHome'
import UcardCategory from '../components/UCardsCategory'
import TopBar from '../components/TopBar'
import Journey from '../components/Journey'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Grid3 from '../components/Grid3'
import link from 'next/link'
import HomeBanner from '../components/HomeBanner'
import OurCustomers from '../components/OurCustomers'
import ContactUs from '../components/ContactUs'
import OurOffice from '../components/OurOffice'
import OurServices from '../components/OurServices'
import VideoHeader from '../components/VideoHeader'
import Ceo from '../components/Ceo'
import Product from '../components/Product'
export default function Home() {
  return (
    <div className="mx-auto">
      {/* <HeaderMain></HeaderMain> */}
      {/* <TopBar></TopBar> */}
      {/* <Navbar></Navbar> */}
     <VideoHeader></VideoHeader>
      {/* <HomeBanner></HomeBanner> */}
     
      {/* <Grid3></Grid3> */}

      {/* <News1></News1>
      <News2></News2> */}
      <Product></Product>
      <Ceo></Ceo>
    <Journey></Journey>
    <OurServices></OurServices>
      {/* <UcardCategory></UcardCategory> */}

      <CategoryHome>

      </CategoryHome>
 {/* <HeaderDummy></HeaderDummy> */}
      {/* <Services></Services> */}
    {/* <Ready></Ready> */}
    <OurCustomers></OurCustomers>
    <OurOffice></OurOffice>
    <ContactUs></ContactUs>
    <Footer></Footer>

    </div>
   
  )
}
