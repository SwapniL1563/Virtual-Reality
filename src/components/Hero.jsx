import React from 'react'
import vid1 from "../assets/video1.mp4"
import vid2 from "../assets/video2.mp4"

const Hero = () => {
  return (
   <div className="flex justify-center items-center">
     <div className='w-full flex flex-col gap-6 items-center text-center justify-center lg:py-14 py-20'>
        <h1 className='lg:text-6xl md:text-5xl text-4xl'>Virtual build tools
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'> for <br /> developers</span>
        </h1>
        <p className='text-zinc-400 lg:text-md text-[0.65rem] lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aliquam. <br /> Est, aliquam. Lorem ipsum dolor. Est, aliquam.</p>

        <div className="button hidden lg:flex gap-5">
        <a className='border-[1.5px]  border-transparent bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-2 rounded-md outline-none cursor-pointer'>
        Start for free</a>
        <a className='border-[1.5px] bg-transparent border-white px-2 py-2 rounded-md cursor-pointer'>  Documentation</a>
        </div>

        <div className='lg:flex-row  flex flex-col justify-center items-center  gap-3 mt-6'>
            <video autoPlay  muted loop className='w-3/4 lg:w-1/3 border-2  border-orange-500 rounded-md' src={vid1}></video>
            <video autoPlay  muted loop className='w-3/4 lg:w-1/3 border-2  border-orange-500 rounded-md' src={vid2}></video>
        </div>

    </div>
   </div>
  )
}

export default Hero