import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import Tab1s from '../components/Tab1s'
const denim = () => {
  return (
    <div>
    <Navbar></Navbar>
    
      <div className="container mx-auto">
        <Tab1s
          tabnumer="1"
        ></Tab1s>
      </div>
    
      
    </div>

)
}
export default denim