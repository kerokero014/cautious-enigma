// src/components/Styles/FooterStyles.ts
import { Theme } from '@mui/material/styles';

export const footerStyles = (theme: Theme) => ({
  footer: {
    py: theme.spacing(2),
    textAlign: 'center' as const,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  link: {
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});
