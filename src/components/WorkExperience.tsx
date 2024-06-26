import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Timeline,  TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineItem } from '@mui/lab';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  // TODO: ここに開発物の画像を追加する
  // TODO: 開発物のリンクとか、newsとかも追加する
  // TODO: フレームワークとかスキル面の情報も記載する
  {
    title: 'Frontend Developer',
    company: 'Creative Agency',
    period: 'May 2015 - Present',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
  },
  {
    title: 'Graphic Designer',
    company: 'Design Studio',
    period: 'June 2013 - May 2015',
    description: 'Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'
  },
  {
    title: 'Junior Web Developer',
    company: 'Indie Studio',
    period: 'January 2011 - May 2013',
    description: 'User generated content in real-time will have multiple touchpoints for offshoring. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
  }
];

const WorkExperience: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Paper elevation={3} sx={{ width: 1000, padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', margin: 2 }}>
          Work Experience
        </Typography>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="primary.main">{exp.title} at {exp.company}</Typography>
                <Typography variant="subtitle2">{exp.period}</Typography>
                <Typography>{exp.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </Box>
  );
};

export default WorkExperience;
