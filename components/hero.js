import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import JumpLinkButton from './JumpLinkButton';
import { useTheme } from '@mui/material/styles';

function Hero({ imageSrc, children }) {
  const theme = useTheme();

  const childrenArray = [
    <Box key="intro"sx={{ display: 'inline' }}>
      <Typography  variant="body1" sx={{ display: 'inline' }}> My Name Is </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'inline' }}>Bryan Emerson</Typography>
    </Box>,
    <Typography variant="h1" key="description" sx={{ width: { xs: '80%', sm: '100%'} }}>I&apos;m a Frontend Developer</Typography>,
    <Typography variant="body1" key="description" sx={{ width: { xs: '80%', sm: '100%'} }}>I strive to make bold, simple, user friendly solutions with React and javascript.</Typography>,
    <JumpLinkButton href="#work" key="button">View Work</JumpLinkButton>,
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: {
          xs: '63%',
          sm: '74%',
        },
        alignItems: {
          xs: 'center',
          sm: 'center',
          md: 'center',
        },
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '2rem',
        color: 'white',
      }}
    >
<Grid container item xs={12} md={6} sx={{ pt: { xs: '30vh', sm: '40vh', md:'0vh'}, }}>
  {childrenArray.map((child, index) => (
    <Grid item xs={12} key={index}>
      {child}
    </Grid>
  ))}
</Grid>
    </Box>
  );
}

export default Hero;




// import Image from 'next/image'
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import JumpLinkButton from './JumpLinkButton';

// import heroPhoto from '../public/heroPhoto.jpg'
// import heroDark from '../public/heroDark.jpg'
// import darkHero from '../public/darkHero.jpg'
// import newHero from '../public/newHero.jpg'

// import styles from '@/styles/hero.module.css'

// function Hero() {
//   return (
//     <>
//       <div className={styles.heroWrapper}>

//         <Image
//           className={styles.back}
//           src={newHero}
//           alt='portrait of Bryan outdoors'
//           fill
//           objectFit='cover'
//           objectPosition='cover'
//           priority
//         />

//         <div className={styles.heroContent}>
//           <Typography variant="caption" gutterBottom className={styles.eyebrow}>
//             My Name Is Bryan Emerson
//           </Typography>
//           <Typography variant="h1" className={styles.title}>I&apos;m a Frontend Developer</Typography>
//           <Typography variant="body1" className={styles.body}>I strive to make bold, simple, user friendly solutions with React and javascript. </Typography>
//           <JumpLinkButton href="#work">VIEW WORK</JumpLinkButton>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Hero;


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