import React from 'react'

import Navbar from '../components/Navbar'


import 'react-tabs/style/react-tabs.css';

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
