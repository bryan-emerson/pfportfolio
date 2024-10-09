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
    <Grid container spacing={2} sx={{ py:"4rem", px: '2rem'}}>
      <Grid item xs={12} md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box className={styles.aboutContent} sx={{  }}>
          <Typography variant="h2">Who is He?</Typography>
          <Typography variant="body1">Attention to detail. Team Player Extraordinaire. Military Foundations. Hospitality Industry Hustle. Penchant for Design. Passion for Nature.</Typography>
          <JumpLinkButton href="#work">Learn more</JumpLinkButton>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '80%'}, }}>
          <Slider />
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;