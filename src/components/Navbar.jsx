import React from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants"
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

const Navbar = () => {

    const [openNavbar,setOpenNavbar] = useState(false);

    function toggleNavbar () {
     setOpenNavbar(!openNavbar)
    }

  return (
    <div className=' sticky  top-0 z-20  backdrop-blur-lg border-b border-neutral-700/80'>
        <nav className='container  px-10 py-3 mx-auto relative '>
           <div className="flex justify-between items-center">
           <div className='logo  flex items-center justify-center cursor-default'>
                <img className='h-10 w-10' src={logo} alt="logo" />
                <h3>VirtualR</h3>
            </div>

           <ul className='hidden lg:flex justify-center gap-5'>
            { navItems.map((item,index) => (
            <li key={index}>
                <a  className='text-neutral-400 hover:text-white' href={item.href}>{item.label}</a>
            </li>) )}
           </ul>

           <div className="button hidden lg:flex gap-5">
            <a className='border-[1.5px] bg-transparent border-white px-2 py-1 rounded-md cursor-pointer'>Sign in</a>
            <a className='border-[1.5px]  border-transparent bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-1 rounded-md cursor-pointer'>
                Create an account</a>
           </div>

           <div className=" lg:hidden  flex flex-col justify-end">
            <button onClick={toggleNavbar}>{ openNavbar ? <X></X> : <Menu></Menu>}</button>
           </div>
           </div>

           { openNavbar && ( 
            <div className='bg-[#121212] backdrop-blur-lg py-4 absolute left-0 w-full  z-20 flex flex-col justify-center items-center lg:hidden'>
            <ul className=' flex justify-center items-center flex-col '>
            { navItems.map((item,index) => (
            <li className='py-4' key={index}>
                <a className='text-lg  text-neutral-400 hover:text-white' href={item.href}>{item.label}</a>
            </li>) )}
           </ul>

           <div className="button flex   lg:hidden gap-4 pt-3 pb-8  " >
            <a href='#' className='border-[1.5px] bg-transparent border-white  px-2 rounded-md cursor-pointer'>Sign in</a>
            <a href='#' className='border-[1.5px]  border-transparent bg-gradient-to-r from-orange-500 to-orange-800 px-2 rounded-md cursor-pointer'>
                Create an account</a>
           </div>
           </div>)}


        </nav>
    </div>
  )
}

export default Navbar