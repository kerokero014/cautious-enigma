// src/components/Footer.tsx
import { Box, Typography, Link, useTheme } from '@mui/material';
import { footerStyles } from './Styles/FooterStyles';

const Footer = () => {
  const theme = useTheme();
  const styles = footerStyles(theme);

  return (
    <Box component="footer" sx={styles.footer}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2025 Kevin Mendoza. All rights reserved.
        {/* example link using your styles: */}
        <Link href="/privacy" sx={styles.link} underline="none" ml={1}>
          Privacy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
