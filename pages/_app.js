import Navbar from '../components/nav.js';

import '@/styles/globals.css'

import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';

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
