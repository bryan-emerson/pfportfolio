import { Box, Container, Typography, Link, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

let navObjects = [
  {
    name: 'Work',
    url: '/#work',
    target: null,
    key: 2,
  },
  {
    name: 'Blog',
    url: '/blog',
    target: null,
    key: 1,
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
    url: '/resume.pdf',
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
  const theme = useTheme();
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
        <Typography variant='button'>
        {linkObj.name}
        </Typography>
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
      <a href="mailto:Bryan.Emerson.Codes@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: { xs: '1 1 auto', md: '1 1 30%' },
          cursor: 'pointer',
          color: 'inherit', // Ensure text color is inherited
        }}>
          <Typography variant="h6" color="inherit">Think We&apos;d Be A Great Fit?</Typography>
          <Typography variant="h6" color="inherit">Let&apos;s Talk...</Typography>
        </Container>
      </a>
      <Divider orientation="vertical" flexItem sx={{ bgcolor: '#FFFFFF', my: 2, display: { xs: 'none', md: 'block' } }} />
      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: { xs: '1 1 auto', md: '1 1 70%' }
      }}>
        {allLinks}
      </Container>
    </Box>
  );
}

export default Footer;
