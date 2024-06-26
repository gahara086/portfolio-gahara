import React from 'react';
import { Box, Typography, Paper,  } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

const educationHistory: Education[] = [
  {
    degree: 'Masters in Information Technology',
    school: 'International University',
    period: '2011 - 2013',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'Regional College',
    period: '2007 - 2011',
    description: 'Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'
  },
  {
    degree: 'Science and Mathematics',
    school: 'Mt. High School',
    period: '1995 - 2007',
    description: 'User generated content in real-time will have multiple touchpoints for offshoring. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
  }
];

const Education: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Paper elevation={3} sx={{ width: 1000, padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', margin: 2 }}>
          Education
        </Typography>
        <Timeline position="alternate">
          {educationHistory.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== educationHistory.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="primary.main">{edu.degree} from {edu.school}</Typography>
                <Typography variant="subtitle2">{edu.period}</Typography>
                <Typography>{edu.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </Box>
  );
};

export default Education;
