import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'
import Trending from '../components/Trending'

function MainPage() {
  return (
    <>
      <div className=" min-w-7xl mx-0 md:mx-20">
        <div className="flex h-auto w-screen md:flex-row flex-col items-center justify-between p-8">
          <div className="ml-10 xl:ml-20 md:ml-5 md:w-1/2 mt-16 xl:mt-0">
            <h1 className=" text-4xl xl:text-6xl font-bold text-gray-800 md:text-5xl   mb-10 ">
            Making Group Bookings Easier & Faster
            </h1>
            <p className="text-base text-gray-500 xl:text-lg mb-4 ">
              It
              enables you to do things different from your daily routine
              activities
            </p>
            <div className="mt-4  flex items-start justify-start gap-5 text-center ">
              
              <button className="h-16 cursor-pointer xl:text-2xl  rounded-full min-w-full border-2 border-brand-primaryLight px-4 text-lg font-extrabold text-brand-primaryLight hover:bg-brand-primaryLight hover:text-white hover:shadow-xl">
                Book a demo
              </button>
            </div>
          </div>

          <div >
            <Image
              src={HeroImage}
              width={1200}
              height={1200}
              objectFit="contain"
              alt="hero img"
              className="xl:mt-24 md:mt-10 lg:mt-16"
            />
          </div>
        </div>
        <Trending/>
      </div>
    </>
  )
}

export default MainPage
