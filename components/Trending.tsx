import React from 'react'
import Image from 'next/image'
import One from '../public/images/1.jpg'
import Two from '../public/images/2.jpg'
import { AiFillStar } from 'react-icons/ai'
import { DeviceTabletIcon } from '@heroicons/react/outline'

function Trending() {
  return (
    <div className="my-20 flex  items-center justify-center">
      {/* images section  */}
      <div className='max-w-sm rounded overflow-hidden shadow-lg mx-8 px-4 py-4'>
      <Image src='/images/package-detail.png' width={1000} height={800} 
        objectFit="cover" 
        quality={100}/>
        </div>
        {/* textual content */}
        <div className="flex-col items-start justify-start sm:mt-8 md:mt-0 md:ml-20">
          <h1 className="text-5xl font-bold text-gray-900">Best Of The Week</h1>
          <p className="mt-5 w-3/4 text-base text-gray-600 md:text-xl">
            Traveling is one of the best way to enhance personal growth. It
            enables you to do things different from your daily routine
            activities
          </p>
          <div className="flex items-start justify-start gap-5">
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">50+</h1>
              <p className="text-xl font-medium text-gray-600">Destination</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">800+</h1>
              <p className="text-xl font-medium text-gray-600">Tourists</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">300+</h1>
              <p className="text-xl font-medium text-gray-600">Hotels</p>
            </div>
          </div>
          <button className="h-14 w-auto rounded-xl bg-sky-600 px-8  text-white shadow-xl hover:bg-sky-500">
            Find Place
          </button>
        </div>
      </div>
    
  )
}

export default Trending
