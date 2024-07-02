import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='flex justify-center items-center' >
      <div className="container  justify-center items-center">
      <h1 className='mt-14 mb-4 text-4xl text-center'>Pricing</h1>

      <div className='flex flex-wrap items-center justify-center gap-5 lg:gap-3 '>
        { pricingOptions.map((items,index)=> (
          <div className=' flex flex-col lg:w-auto w-[60%] px-10 py-8 gap-3 border border-neutral-600 rounded-md' key={index}>
            <h1 className='text-xl'>{items.title}</h1>
            <h2 className='text-3xl'>{items.price}<span className='text-sm text-neutral-400'>/Month</span></h2>
      
            <div className='flex flex-col gap-2 '>
              {items.features.map((item,index)=> (
      
               <div className='flex gap-2 items-center ' key={index}>
                 < CheckCircle2 className='w-5 '/>
                 <h1 className='text-sm' > {items.features[index]}</h1>
               </div>

              ))}
            </div>

            <button href="#" className='border border-orange-500 px-4 py-1 mt-6 rounded hover:bg-gradient-to-r from-orange-500 to-orange-800'>Subscribe</button>
            </div>
        )) }
      </div>
    </div>
    </div>
  )
}

export default Pricing