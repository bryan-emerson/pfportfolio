import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import heroPhoto from '../public/heroPhoto.jpg'
import heroDark from '../public/heroDark.jpg'
import darkHero from '../public/darkHero.jpg'
import newHero from '../public/newHero.jpg'

import styles from '@/styles/hero.module.css'

function Hero() {
  return (
    <>
      <div className={styles.heroWrapper}>

        <Image
          className={styles.back}
          src={newHero}
          alt='portrait of Bryan outdoors'
          fill
          objectFit='cover'
          objectPosition='cover'
          priority
        />

        <div className={styles.heroContent}>
          <Typography variant="caption" gutterBottom className={styles.eyebrow}>
            My Name Is Bryan Emerson
          </Typography>
          <Typography variant="h1" className={styles.title}>I&apos;m a Frontend Developer</Typography>
          <Typography variant="body1" className={styles.body}>I strive to make bold, simple, user friendly solutions with React and javascript. </Typography>
          <div className={styles.label}>
          <a href="#work">
            <Typography variant="button" className={styles.ctaText}>VIEW WORK</Typography>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;


//i think crop is good on photo now and hero content placed properly. need to make about section
        //   <Image
        //   className={styles.back}
        //   src={newHero}
        //   alt='portrait of Bryan outdoors'
        // />


        // <div className={styles.back} style={{
        //   backgroundImage: `url('${newHero.src}')`,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        //   zIndex: 1
        // }} />