import  { NextPage } from 'next'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import Navbar from '../components/Navbar'
import Services from './services'
import MainPage from './MainPage'
import Destination from './destination'
import Notify from '../components/Notify'
import Footer from '../components/Footer'
import Achievement from '../components/Achievement'
import Trending from '../components/Trending';
import Features from '../components/Features'
const Home: NextPage = () => {
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
        <Services />
        <Destination />
        <Marquee><Achievement/></Marquee>
        <Notify />
        {/* <ContactPage/> */}
        <Footer />
    </html>

  )
}

export default Home
