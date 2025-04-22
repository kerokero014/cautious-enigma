// theme.ts
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6f61',
    },
    secondary: {
      main: '#f5a623',
    },
  },
  typography: {
    fontFamily: 'Fira Code, monospace',
  },
});
