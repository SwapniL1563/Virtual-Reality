import React from 'react'
import { testimonials } from '../constants'

const Tetsimonials = () => {
  return (
    <div className="flex  flex-wrap justify-center items-center mt-20">
        <div className="container px-10 ">
            <h1 className='text-4xl text-center mb-10'>What People are saying</h1>

            <div className='flex flex-wrap items-center justify-center gap-3 '>{ testimonials.map((items,index) => (
                <div className="box  lg:w-[25%] md:w-1/3 px-4 py-8 bg-neutral-900 rounded-md " key={index}>
                    <h1 className=' text-sm font-extralight lg:text-[0.9rem] mb-6'>{items.text}</h1>
                    <div className="box-img flex items-center gap-3">
                        <img className='w-10 h-10 rounded-full border border-neutral-400 ' src={items.image} alt="image" />
                        <div className='flex flex-col justify-center '>
                            <h1 className='text-sm '>{items.user}</h1>
                            <h2 className='text-xs text-neutral-400'>{items.company}</h2>
                        </div>
                    </div>
                </div>
            ))}</div>
        </div>
    </div>
  )
}

export default Tetsimonials