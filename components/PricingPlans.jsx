import React from 'react'
import { CheckIcon  } from '@heroicons/react/solid'


const PricingPlans = ({featured }) => {
  return (
    <div className={` flex justify- items-center relative ${featured ? ' border-sky-500  border-2 rounded-md' : "border"} `}>
        <div className='bg-white border border-sky-500 border-opacity-10 rounded-md shadow-xl cursor-pointer'>
            {/* Popular Tag */}
            {featured ? (<span className='bg-sky-500 text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                Most Popular
            </span>): null}
            {/* Card Header */}
            <div className='px-6 py-12 '>
                <p className='text-3xl font-semibold text-center mb-4'>Growth</p>
                <div className='flex justify-center items-center'>
                    <div className='flex items-start'>
                        <p className='text-4xl font-medium'>$</p>
                        <p className='text-7xl font-bold'>49</p>
                    </div>
                    <p className='text-2xl text-gray-400'>/month</p>
                </div>
            </div>

            {/* Card body */}
            <div className='p-12 bg-gray-100'>
                <ul className='space-y-3'>
                    <li className='flex items-center space-x-4'><CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0'/><p className='text-lg text-gray-600'>Feature #1</p></li>
                    <li className='flex items-center space-x-4'><CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0'/><p className='text-lg text-gray-600'>Feature #1</p></li>
                    <li className='flex items-center space-x-4'><CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0'/><p className='text-lg text-gray-600'>Feature #1</p></li>
                </ul>

                {/* CTA  */}
                <button className={`mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap  focus:outline-none focus:ring-4 focus:ring-sky-600 focus:ring-opacity-50 transition-all ${featured ? 'bg-sky-600 hover:bg-sky-700 text-white hover:scale-105 transform  ': "bg-white text-sky-500 hover:bg-gray-50"} `} >
                    Start your free trail
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default PricingPlans