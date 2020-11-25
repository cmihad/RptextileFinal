import React from 'react'
import TopBar from '../components/TopBar'
import Topbar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Link from 'next/link'
import AboutUsBanner from '../components/AboutUsBanner'
import Journey from '../components/Journey'
import Whoweare from '../components/Whoweare'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import OurOffice from '../components/OurOffice'
function about() {
  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <AboutUsBanner></AboutUsBanner>

      <Journey></Journey>
      <OurOffice></OurOffice>
   <ContactUs></ContactUs>
   <Footer></Footer>
    </div>
  )
}

export default about
