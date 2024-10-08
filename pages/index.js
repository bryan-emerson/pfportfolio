import Head from "next/head";
import Image from "next/legacy/image";
import styles from "@/styles/Home.module.css";

import Navbar from "../components/nav.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Work from "../components/work.js";
import Stack from "../components/stack.js";
import Footer from "../components/footer.js";
import Experience from "../components/experience.js";

export default function Home() {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero imageSrc="/newHero.jpg" />
      <About />
      <Work />
      <Stack />
      <Experience />
      <Footer />
    </>
  );
}
