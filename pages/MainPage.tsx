import React from 'react'
import Image from 'next/image'
import Link from "next/link"

function MainPage() {
  return (
    <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5 mt-10 lg:mt-16">
          <div
            className="px-8 py-12 flex items-center max-w-md mx-auto sm:max-w-xl lg:mx-24 lg:py-16 lg:max-w-full lg:mr-0 2xl:col-span-2"
          >
            <div className="xl:max-w-xl">
              {/* <img className="h-10" src="/img/logo.svg" alt="Workcation" /> */}
              
              <h1
                className=" text-2xl font-bold text-center lg:text-left text-gray-900 sm:mt-8 sm:text-4xl lg:text-5xl xl:text-7xl"
              >
                <h1 className="text-5xl font-extrabold inline text-brand-primaryLight">Making</h1>

                <h1 className="text-5xl font-extrabold  text-brand-primaryLight ">
    Group Booking 
  </h1>
      
                <h1 className="text-5xl text-brand-primaryLight  font-extrabold ">Easier and Faster.</h1>
              </h1>
              <p className="mt-2 text-gray-600 text-center lg:text-left lg:text-xl sm:mt-4 sm:text-xl">
                Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy
                some nice weather even when you're not on vacation.
              </p>
              <div className="mt-4 sm:mt-6 flex justify-center items-center md:grow">
                <Link
                  href="https://calendly.com/shivamdhruvmishra4/demo" passHref
                >
                  <a className="relative inline-block text-lg group">
                    
                    <span className="relative z-10 block px-24 py-3 overflow-hidden font-medium leading-tight text-brand-primaryLight transition-colors duration-300 ease-out border-2 border-brand-primaryLight rounded-full group-hover:text-white">

                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-white"></span>
                      <span className="absolute left-0 w-80 h-80 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-brand-primaryLight group-hover:-rotate-180 ease"></span>
                      <span className="relative">Book a demo</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-brand-primaryLight rounded-full group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-full"></span>
                    
                </a>
                </Link>
              </div>
            </div>
            
          </div>
          <div className="hidden mt-24 lg:block 2xl:col-span-3">
            <Image
              className="object-cover object-center"
              src="/images/hero.png"
              layout='responsive'
              height={500}
              width={500}
              alt="private movie"
            />
          </div>
    </div>
  )
}

export default MainPage
