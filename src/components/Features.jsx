import React from 'react'
import { features } from '../constants'

const Features = () => {
  return (
    <div className=' py-4 flex justify-center items-center'>
        <div className="container flex flex-col items-center justify-center">
            <h1 className='mb-10 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>FEATURE</h1>
            <h1 className='text-3xl lg:text-4xl mb-6'>Easily build <span className='mb-10 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'> your code</span></h1>
            <div className=' flex flex-col lg:flex-row flex-wrap lg:flex-wrap  items-center gap-2 px-4 py-2  justify-center' >
                { features.map((item,index) => (
                    <div key={index} className='lg:w-[30%] w-3/4 lg:h-[120px] lg:flex' >
                        <div className='bg-neutral-900  flex  items-center flex-wrap px-8 py-8 lg:px-6 lg:py-2'>
                       <div className='flex gap-2'> <div className='px-2 text-orange-700'>{item.icon}</div>
                         <div className='flex flex-col gap-2'>
                           <h1>{item.text}</h1>
                           <p className='text-xs text-zinc-400 '>{item.description}</p>
                         </div></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Features