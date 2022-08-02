import  { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Services from './services'
import MainPage from './MainPage'
import Destination from './destination'
import Notify from '../components/Notify'
import Footer from '../components/Footer'
import ContactPage from '../components/ContactForm'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Responsive Travel Website</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Navbar />
      <MainPage />
      <Services />
      <Destination />
      <Notify />
      {/* <ContactPage/> */}
      <Footer />
    </div>
  )
}

export default Home
