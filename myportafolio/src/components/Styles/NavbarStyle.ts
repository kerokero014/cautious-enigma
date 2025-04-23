// src/components/Styles/NavbarStyle.ts
import { Theme } from '@mui/material/styles';

export const navbarStyles = (theme: Theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // use theme.spacing for padding
    p: theme.spacing(1),
    // use palette from theme
    bgcolor: theme.palette.background.paper,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: { fontSize: '1.75rem' },
  },
  navItems: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  navLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': { color: theme.palette.text.secondary },
  },
});
