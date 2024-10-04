import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

import styles from '@/styles/navbar.module.css'

const drawerWidth = 240;

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

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h6" sx={{ my: 2 }} className={styles.name}>
          Bryan Emerson
        </Typography>
      </Link>
      <Divider />
      <List>
        {navObjects.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.url} component={Link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div >
    <Box sx={{ display: 'flex' }} >

      <AppBar component="nav" sx={{ backgroundColor: "primary.main" }} className={styles.navbar}>
        <Toolbar>
          <IconButton

            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Bryan Emerson
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navObjects.map((item) => (
              <Link key={item.key} href={item.url} component={Link} target={item.target}>
                <Button key={item.key} sx={{ color: '#000000' }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </div>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
