import React from 'react'
import workImg from "../assets/code.jpg"
import { checklistItems } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Workflow = () => {
  return (
    <div className='containe flex justify-center items-centerr mt-14 '>
        <div className='flex flex-col  justify-center text-center items-center'>
           <h1 className='lg:text-4xl text-2xl mb-6 mt-4'>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>coding workflow</span></h1>

          <div className="lg:flex justify-center  items-center lg:gap-4">

          <div className="img flex items-center justify-center">
          <img  className='w-[400px]' src={workImg} alt="" />
           </div>

           <div className="code  ">
            {checklistItems.map((item,index) => (
                <div className='flex px-8 py-5 lg:py-6 lg:px-6 gap-2  ' key={index}>
                    <div className='lg:px-1 text-green-400'>
                        { <CheckCircle2/>}
                    </div>

                    <div className="flex flex-col text-start lg:justify-center gap-2 ">
                        <h1 className=''>{item.title}</h1>
                        <p className='text-xs text-zinc-400'>{item.description}</p>
                    </div>
                </div>
            ))}
           </div>
          </div>
        </div>
    </div>
  )
}

export default Workflow