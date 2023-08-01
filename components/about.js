import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import styles from '@/styles/about.module.css'

function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.contentWrapper}>
          <div className={styles.aboutContent}>
              <Typography variant="h2" gutterBottom className={styles.h2}>
                ABOUT
              </Typography>
              <Typography variant="h1" className={styles.title}>I&apos;m a Frontend Developer</Typography>
              <Typography variant="body1" className={styles.body}>I strive to make bold, simple, user friendly solutions with React and javascript. </Typography>
              <div className={styles.label}>
                <Typography variant="button" className={styles.ctaText}>LEARN MORE</Typography>
              </div>
          </div>
          <Container className={styles.aboutimage}>

          </Container>
        </div>
      </div>
    </>
  )
}

export default About;