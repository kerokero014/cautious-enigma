import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { animate, stagger } from 'animejs';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A React & MUI portfolio showcasing my projects and skills.',
    github: 'https://github.com/kevin/portfolio',
    live: 'https://kevin.dev',
  },
  {
    title: 'Chat App',
    description: 'Realtime chat application using Socket.io and Node.js.',
    github: 'https://github.com/kevin/chat-app',
    live: '#',
  },
  // Add more project entries here
];

export const Projects = () => {
  useEffect(() => {
    animate('.project-card', {
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutQuad',
      duration: 600,
      delay: stagger(150),
    });
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{ p: 3, maxWidth: 900, mx: 'auto' }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((proj) => (
          <Grid key={proj.title}>
            <Card
              component={motion.div}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {proj.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {proj.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={proj.github} target="_blank">
                  GitHub
                </Button>
                <Button size="small" href={proj.live} target="_blank">
                  Live
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
