import React from 'react'
import logo from '/favicon.ico'

const Navbar = () => {
  return (
    <nav className=" w-full h-fit">
      <div className=' w-full h-fit bg-transparent border-b border-blue-200 px-5 py-2 flex justify-between items-center'>
        <div className="">
          <a href="#">
            <h1 className=' font-semibold text-xl tracking-wide font-mono'>Canvas Collection</h1>
          </a>
        </div>
        <div className=" flex items-center gap-5">
          <h2 className=' text-lg font-semibold font-mono'>Hello User !!</h2>
          <img className=' w-8 h-8 rounded-[50%]' src={logo} alt="logo" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
