import React from 'react'
import Navbar from './components/Navbar'
import Path from './Paths/Path'

const App = () => {
  return (
    <div className=' h-screen bg-[#232630]'>
      <Navbar />
      <div className=" w-[98%] m-auto">
        <Path />
      </div>
      
    </div>
  )
}

export default App
