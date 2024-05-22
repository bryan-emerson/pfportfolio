import Navbar from '../components/nav.js';

import '@/styles/globals.css'

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
      <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
