import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Stack() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const imageSize = isSmallScreen ? 300 : 500;

  return (
    <Grid container spacing={2} sx={{}}>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "2rem",
        }}
      >
        <Image src="/maya.png" alt="description" width={imageSize} height={imageSize} layout="responsive" />
      </Grid>
      <Grid item xs={12} md={6}
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <Typography variant="body1">Stack / Skills</Typography>
    <Typography variant="h4">Look what I can Do</Typography>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, }}>
      <List sx={{ mr: { md: '8rem' }, pl: 0 }}>
        <ListItem>React</ListItem>
        <ListItem>Next.js</ListItem>
        <ListItem>Javascript</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>MUI</ListItem>
      </List>
      <List sx={{ pl: 0 }}>
        <ListItem>AXIOS</ListItem>
        <ListItem>SWR</ListItem>
        <ListItem>Recoil</ListItem>
        <ListItem>Vercel</ListItem>
        <ListItem>GIT</ListItem>
        <ListItem>JIRA</ListItem>
      </List>
    </Box>
  </Box>
</Grid>
    </Grid>
  );
}

export default Stack;
