// theme.js
import { createTheme, } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f7f7f7',
    },
    tertiary: {
      main: '#161616',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      '@media (min-width:600px)': {
        fontSize: '3rem',
        fontWeight: 'normal',
      },
      '@media (min-width:960px)': {
        fontSize: '4rem',
      },
    },
    body1: {
      fontSize: '.9rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.2rem',
      },
    },
    // Add more styles as needed
  },
});

export default theme;