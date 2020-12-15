import React from 'react'

import Navbar from '../components/Navbar'

import Tab1s from '../components/Tab1s'
const knit = () => {
  return (
    <div>
    <Navbar></Navbar>
    
      <div className="container mx-auto">
        <Tab1s
          tabnumer="2"
        ></Tab1s>
      </div>
    
      
    </div>
  )
}

export default knit
