import React from 'react'
import ContactUs from '../components/ContactUs'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'

import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
function contact() {
  return (
    <div>
    <TopBar></TopBar>
      <Navbar></Navbar>
      <ContactUsBanner></ContactUsBanner>
      <ContactUs></ContactUs>
      <Footer>

      </Footer>
    </div>
  )
}

export default contact
