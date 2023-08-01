import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/nav.js'
import Hero from '../components/hero.js'


export default function Home() {
  return (
    <>
    <div className={styles.home}>
      <Navbar/>
      <Hero />
    </div>
    </>
  )
}
