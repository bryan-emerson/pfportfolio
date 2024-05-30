import { Box, Container, Typography, Link } from '@mui/material';

import styles from "@/styles/footer.module.css";

let navObjects = [
  {
    name: 'About',
    url: '/',
    target: null,
    key: 1,
  },
  {
    name: 'Projects',
    url: '/projects',
    target: null,
    key: 2,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bryanemerson-/',
    target: '_blank',
    key: 3,
  },
  {
    name: 'Github',
    url: 'https://github.com/bryan-emerson',
    target: '_blank',
    key: 4,
  },
  {
    name: 'Resume',
    url: 'https://docs.google.com/document/d/12CYUXDHy1HpexCoWimkxkHj8vrJjY78ds-yaDTRAZXU/edit',
    target: '_blank',
    key: 5,
  },
  {
    name: 'Photo & Design',
    url: 'https://skifaster22.myportfolio.com',
    target: '_blank',
    key: 6,
  },
]

function Footer() {
  function returnLinks(arr) {
    return arr.map((linkObj) => (
      <Link
        href={linkObj.url}
        target={linkObj.target}
        key={linkObj.key}
        sx={{
          display: 'block',
          color: '#f2f2f2',
          textAlign: 'center',
          padding: '.5rem 1rem',
          textDecoration: 'none',
          fontSize: '17px',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#ddd',
            color: 'black',
          },
          '&.active': {
            backgroundColor: '#04AA6D',
            color: 'white',
          },
        }}
      >
        {linkObj.name}
      </Link>
    ));
  }

  const allLinks = navObjects.length ? returnLinks(navObjects) : "";

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      bgcolor: '#161616',
      color: '#FFFFFF',
      p: 2
    }}>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: { xs: 1, md: 1.5 }
      }}>
        <Typography variant="body1">Think We'd Be A Great Fit?</Typography>
        <Typography variant="body1">Let's Talk...</Typography>
      </Container>
      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexGrow: { xs: 1, md: 3 }
      }}>
        {allLinks}
      </Container>
    </Box>
  );
}

export default Footer;
