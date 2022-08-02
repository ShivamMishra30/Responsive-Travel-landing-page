import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'
import Trending from '../components/Trending'

function MainPage() {
  return (
    <>
      <div className=" w-screen">
        <div className="flex h-auto w-screen items-center justify-center p-8">
          <div className="ml-10 md:ml-20 md:w-1/2">
            <h1 className="my-5 text-xl font-bold text-gray-800 md:text-4xl">
            Making Group Bookings Easier & Faster
            </h1>
            <p className="text-base text-gray-500 md:text-l">
              Traveling is one of the best way to enhance personal growth. It
              enables you to do things different from your daily routine
              activities
            </p>
            <div className="mt-12 flex items-start justify-start gap-5 text-center ">
              
              <button className="h-16 cursor-pointer rounded-xl  border-2 border-sky-600 px-4 text-l font-extrabold text-sky-600 hover:bg-sky-600 hover:text-white hover:shadow-xl">
                Book a demo
              </button>
            </div>
          </div>

          <div className="hidden md:block ">
            <Image
              src={HeroImage}
              width={900}
              height={700}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
        <Trending />
        <Trending/>
        <Trending/>
      </div>
    </>
  )
}

export default MainPage
