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
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Responsive Travel Website</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      <body className='bg-brand-background mt-4 h-full'>
        <Navbar />

      <MainPage />
      <Services />
      <Destination />
      <Marquee><Achievement/></Marquee>
      <Notify />
      {/* <ContactPage/> */}
      <Footer />
    </body>
    </>
  )
}

export default Home
