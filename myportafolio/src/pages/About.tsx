import {
  Box,
  Typography,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  LinearProgress,
  Tooltip,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Timeline as TimelineIcon } from '@mui/icons-material';
import { animate } from 'animejs';
import { useEffect } from 'react';

const skills = [
  { name: 'TypeScript & JavaScript', level: 90 },
  { name: 'React & Next.js', level: 85 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'MongoDB & PostgreSQL', level: 75 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'REST APIs & RAG', level: 70 },
  { name: 'System Design & Architecture', level: 65 },
  { name: 'Testing & Debugging', level: 70 },
];

const About = () => {
  useEffect(() => {
    skills.forEach((_, idx) => {
      const targets = document.querySelectorAll(`#skill-bar-${idx} .MuiLinearProgress-bar`);
      animate(targets, {
        width: `${skills[idx].level}%`,
        easing: 'easeInOutQuad',
        duration: 1200,
        delay: idx * 100,
      });
    });
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{ maxWidth: 900, mx: 'auto', mt: 6, p: 3 }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid>
          <Avatar
            src="https://avatars.githubusercontent.com/u/your_github_id"
            alt="Kevin Avatar"
            sx={{ width: 160, height: 160, mx: 'auto', boxShadow: 3 }}
          />
        </Grid>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
              I'm Kevin, a passionate Software Engineer focused on building clean, scalable, and
              reusable code. My strengths lie in crafting robust backends, developing responsive
              UIs, and continuously learning modern tech.
            </Typography>
            <Typography variant="body1" paragraph>
              I enjoy problem-solving, diving into architecture discussions, and leveraging tools
              like TypeScript, React, and Node.js to deliver meaningful user experiences. Outside of
              coding, I explore design systems, mentor peers, and occasionally sketch UI concepts.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Learning Journey
      </Typography>
      <List>
        {[
          '2021 - Started learning HTML, CSS, and JavaScript.',
          '2022 - Built my first React and Node.js applications.',
          '2023 - Contributed to open source and explored backend systems.',
          '2024 - Deep dive into TypeScript, system design, and scalability.',
        ].map((text, i) => (
          <ListItem key={i}>
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Tech Stack & Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, idx) => (
          <Grid key={skill.name}>
            <Typography variant="body1" gutterBottom>
              {skill.name}
            </Typography>
            <Box id={`skill-bar-${idx}`}>
              <Tooltip title={`${skill.level}%`} arrow>
                <LinearProgress
                  variant="determinate"
                  value={0}
                  sx={{ height: 10, borderRadius: 5, backgroundColor: '#AF71E9' }}
                />
              </Tooltip>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
