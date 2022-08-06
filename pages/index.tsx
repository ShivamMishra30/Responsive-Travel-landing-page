import  { NextPage } from 'next'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import Navbar from '../components/Navbar'

import MainPage from './MainPage'
import { useRef } from 'react';
import Notify from '../components/Notify'
import Footer from '../components/Footer'
import Achievement from '../components/Achievement'
import Trending from '../components/Trending';
import Features from '../components/Features'
const Home: NextPage = () => {
  const featureRef = useRef()
  return (
      
      
      <html className='bg-brand-background '>
        <Head>
        <title>Responsive Travel Website</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
        <Navbar/>
        
        <MainPage />
        <Trending/>
        <Features/>
        
        <section className="h-auto bg-brand-background">
    <div className="max-w-7xl mx-auto py-10 px-10 sm:py-16 sm:px-6 lg:px-8 sm:text-center">
        <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-6xl">Some achievements along the journey..</p>
    </div>
    
</section>
        <Marquee><Achievement/></Marquee>
        
        {/* <ContactPage/> */}
        <Footer />
    </html>

  )
}

export default Home
