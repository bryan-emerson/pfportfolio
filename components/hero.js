import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import heroPhoto from '../public/heroPhoto.jpg'
import heroDark from '../public/heroDark.jpg'

import styles from '@/styles/hero.module.css'

function Hero() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <Container maxWidth='xl'>
          <div className={styles.back} style={{
            backgroundImage: `url('${heroDark.src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: 0
          }} />
        </Container>
        <div className={styles.heroContent}>
          <Typography variant="caption" gutterBottom className={styles.eyebrow}>
            My Name Is Bryan Emerson
          </Typography>
          <Typography variant="h1" className={styles.title}>I&apos;m  a Frontend Developer</Typography>
          <Typography variant="body1" className={styles.body}>I Strive to make simple, bold, user friendly solutions.</Typography>
          <div className={styles.label}>
          <Typography variant="button" className={styles.ctaText}>VIEW WORK</Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;