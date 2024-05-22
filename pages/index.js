import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/nav.js'
import Hero from '../components/hero.js'
import About from '../components/about.js'
import Work from '../components/work.js'
import Footer from '../components/footer.js'


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Work />
      <Footer />
    </>
  )
}
