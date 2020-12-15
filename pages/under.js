import React from 'react'
import Tab1s from '../components/Tab1s'
import Navbar from '../components/Navbar'
const under = () => {
  return (
    <div>
    <Navbar></Navbar>
    
      <div className="container mx-auto">
        <Tab1s
          tabnumer="6"
        ></Tab1s>
      </div>
    
      
    </div>
  )
}

export default under
