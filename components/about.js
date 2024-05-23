// About.js
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import JumpLinkButton from './JumpLinkButton';
import Slider from '../components/slider.js'

import { useTheme } from '@mui/material/styles';
import styles from '@/styles/about.module.css'

function About() {
  const theme = useTheme();
  return (
    <Grid container spacing={2} sx={{ pt:"4rem"}}>
      <Grid item xs={12} md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box className={styles.aboutContent} sx={{ pl: '2rem' }}>
          <Typography variant="h1">About Me</Typography>
          <Typography variant="body1">I&apos;m a Frontend Developer with a passion for creating user-friendly solutions with React and JavaScript.</Typography>
          <JumpLinkButton href="/blog">Learn more</JumpLinkButton>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ maxWidth: { xs: '90%', md: '80%'},}}>
          <Slider />
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;