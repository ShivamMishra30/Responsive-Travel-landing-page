import React from 'react'
import { CheckIcon  } from '@heroicons/react/solid'


const PricingPlans = ({featured }) => {
  return (
    <div className=''>
    <div className={` flex justify- items-center relative ${featured ? ' border-brand-primaryLight  border-2 rounded-md ' : "border"} `}>

        <div className='bg-white border border-brand-primaryLight border-opacity-10 rounded-md  cursor-pointer shadow-3xl'>
            {/* Popular Tag */}
            {featured ? (<span className='bg-brand-primaryLight text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
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
            <div className='p-12 bg-white'>
                <ul className='space-y-3'>
                    <li className='flex items-center space-x-4'><CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0'/><p className='text-lg text-gray-600'>Feature #1</p></li>
                    <li className='flex items-center space-x-4'><CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0'/><p className='text-lg text-gray-600'>Feature #1</p></li>
                    <li className='flex items-center space-x-4'><CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0'/><p className='text-lg text-gray-600'>Feature #1</p></li>
                </ul>

                {/* CTA  */}
                
            </div>
            <div className="mt-4 sm:mt-6 flex justify-center items-center md:grow mb-10 mx-auto">
            <a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Button Text</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
              </div> 
        </div>
        </div>
    </div>
  )
}

export default PricingPlans