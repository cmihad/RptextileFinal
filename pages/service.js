import React from 'react'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Services  from '../components/Services'
import ServicesBanner from '../components/ServicesBanner'
import TopBar from '../components/TopBar'
function service() {
  return (
    <div>
    <TopBar>

    </TopBar>
    <Navbar></Navbar>
    <ServicesBanner></ServicesBanner>
      <Services></Services>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  )
}

export default service
