import React from 'react'

import Navbar from '../components/Navbar'

import Tab1s from '../components/Tab1s'
const shirt = () => {
  return (
    <div>
    <Navbar></Navbar>
    
      <div className="container mx-auto">
        <Tab1s
          tabnumer="3"
        ></Tab1s>
      </div>
    
      
    </div>
  )
}

export default shirt
