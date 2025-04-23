// theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff6f61' },
    secondary: { main: '#f5a623' },
  },
  typography: {
    fontFamily: 'Fira Code, monospace',
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.25rem',
      },
    },
  },
});
