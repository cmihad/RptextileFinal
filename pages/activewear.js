import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ActivewearComp from '../components/ActivewearComp'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import KnitComp from '../components/KnitCompo';
import ShirtComp from '../components/ShirtComp';
import Tab1s from '../components/Tab1s';

const activewear = () => {
  return (
    <div>
    <Navbar></Navbar>
    
      <div className="container mx-auto">
        <Tab1s
          tabnumer="0"
        ></Tab1s>
      </div>
   
      
    </div>
  )
}

export default activewear
