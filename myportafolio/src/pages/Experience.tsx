import { Box, Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { createTimeline, stagger } from 'animejs';

const events = [
  {
    year: '2021',
    title: 'Frontend Developer Intern',
    subtitle: 'Acme Corp',
    description: 'Built UI components with React and improved user experience.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    subtitle: 'Beta Inc.',
    description: 'Developed end-to-end applications using Node.js, Express, and React.',
  },
  {
    year: '2023',
    title: 'Open Source Contributor',
    subtitle: 'Community',
    description: 'Contributed to popular libraries and enhanced documentation.',
  },
  {
    year: '2024',
    title: 'Senior Software Engineer',
    subtitle: 'Gamma LLC',
    description: 'Architected and scaled microservices for high-traffic applications.',
  },
];

const Experience = () => {
  useEffect(() => {
    const timeline = createTimeline({
      loop: false,
      defaults: { duration: 800 },
    });

    // Add animation using the animation signature: (targets, properties)
    timeline.add('.timeline-dot', {
      scale: [0, 1],
      opacity: [0, 1],
      delay: stagger(200),
    });
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{ p: 3, maxWidth: 900, mx: 'auto' }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Experience
      </Typography>
      <Timeline position="alternate">
        {events.map((evt, idx) => (
          <TimelineItem key={idx}>
            <TimelineSeparator>
              <TimelineDot className="timeline-dot" color="primary" />
              {idx < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6">{evt.year}</Typography>
                <Typography variant="subtitle1">
                  {evt.title} @ {evt.subtitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {evt.description}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
