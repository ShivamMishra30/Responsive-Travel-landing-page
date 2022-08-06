import React from 'react'
import Image from 'next/image'
import One from '../public/images/1.jpg'
import Two from '../public/images/2.jpg'
import { AiFillStar } from 'react-icons/ai'
import { DeviceTabletIcon } from '@heroicons/react/outline'

function Trending() {
  return (
    <section className="w-full bg-brand-background pt-7 pb-7 md:pt-20 md:pb-24 ">
    <div className="box-border flex flex-col items-center  content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300  border-solid md:flex-row max-w-7xl lg:px-16">

        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:my-16 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <Image width={400} height={300} layout='responsive'  src="https://cdn.devdojo.com/images/november2020/hero-image.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
        </div>

        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none text-center rounded-xl shadow-brand-primaryLight shadow-3xl ring-1 ring-brand-primaryLight">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl text-center  md:text-2xl">
                Boost Productivity 
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32  text-center ">
                Build an atmosphere that creates productivity in your organization and your company culture.
            </p>
            <ul className="p-0 mb-4 leading-6 border-0 border-gray-300 ">
                <li className="box-border relative py-1 pl-0 text-center text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-center text-gray-500 border-solid ">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-center text-gray-500 border-solid ">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                
            </ul>
        </div>
    </div>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16 py-24 ">

        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32 rounded-xl shadow-brand-primaryLight shadow-3xl ring-1 ring-brand-primaryLight">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 text-left border-gray-300 lg:text-3xl md:text-2xl">
                Automated Tasks
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0  border-gray-300  text-center lg:text-left sm:pr-10 lg:text-lg">
                Save time and money with our revolutionary services. We are the leaders in the industry.
            </p>
            <ul className="p-0 mb-4 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid ">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid ">
                    <span className="inline-flex items-justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid ">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
            </ul>
        </div>
        
        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <Image width={400} height={300} layout='responsive' src="https://cdn.devdojo.com/images/november2020/hero-image.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
        </div>
    </div>

    

    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 py-24">

        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <Image layout='responsive'width={400} height={300}  src="https://cdn.devdojo.com/images/november2020/hero-image.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
        </div>

    
        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none rounded-xl shadow-brand-primaryLight shadow-3xl ring-1 ring-brand-primaryLight">
            <h2 className="m-0 text-xl text-center font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Boost Productivity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg text-center lg:text-right">
                Build an atmosphere that creates productivity in your organization and your company culture.
            </p>
            <ul className="py-4 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-center text-gray-500 border-solid ">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-center text-gray-500 border-solid ">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-center text-gray-500 border-solid ">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-brand-primaryLight rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
            </ul>
        </div>
        
    </div>
</section>
    
  )
}

export default Trending
