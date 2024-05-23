// Work.js
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '../components/card.js'
import projects from '../public/work.js'
import styles from '@/styles/work.module.css'
import { useTheme } from '@mui/material/styles';

function Work() {
  const theme = useTheme();
  const getAllProj = (array) => {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
      tempArr.push(<Grid item xs={12} sm={6} key={i}><Card projObj={array[i]} /></Grid>)
    }
    return tempArr;
  }

  let allProjects = "";

  if (projects.length) {
    allProjects = getAllProj(projects)
  }

  return (
    <Box className={styles.work} id='work' sx={{ mt: '4rem', backgroundColor: theme.palette.secondary.main }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ m: '2rem' }}>
          <Typography variant="h2">FEATURED</Typography>
          <Typography variant="body2">Work</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
        </Grid>
        {allProjects}
      </Grid>
    </Box>
  );
}

export default Work;