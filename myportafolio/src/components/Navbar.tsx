// src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { navbarStyles } from './Styles/NavbarStyle';

const Navbar = () => {
  const theme = useTheme();
  const styles = navbarStyles(theme);

  return (
    <AppBar position="static">
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h6" sx={styles.logo}>
          Kevin Mendoza
        </Typography>
        <Box sx={styles.navItems}>
          {['/', '/about', '/projects', '/experience', '/contact'].map((path, i) => (
            <Button key={i} component={Link} to={path} sx={styles.navLink}>
              {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ').toUpperCase()}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
