import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import JumpLinkButton from './JumpLinkButton';

import Slider from '../components/slider.js'

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
              <Typography variant="subtitle2" className={styles.subtitle}>I&apos;m a Frontend Developer</Typography>
              <Typography variant="body1" className={styles.body}>I strive to make bold, simple, user friendly solutions with React and javascript. </Typography>
              <JumpLinkButton href="#work">Learn More</JumpLinkButton>
          </div>
          <Container className={styles.aboutImage}>
            <Slider />
          </Container>
        </div>
      </div>
    </>
  )
}

export default About;