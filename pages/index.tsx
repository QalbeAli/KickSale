import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import About from '../components/About'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Navbar'
import Projects from '../components/Projects'
import Subscription from '../components/Subscription'
import Table from '../components/Table'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <StandardNavMenu /> */}
      {/* <Header /> */}
      <div className=" ">
        <Hero />
        <div></div>
        <Projects />
        <About />
        <Table />
        <Faq />
        <Subscription />
        <Footer />
      </div>
    </div>
  )
}

export default Home
