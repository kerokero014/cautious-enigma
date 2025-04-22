import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Hi, I'm Kevin 👋
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Software Engineer crafting clean and scalable code.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/projects"
        sx={{ mt: 4 }}
      >
        View My Projects
      </Button>
    </Box>
  );
};

export default Home;
