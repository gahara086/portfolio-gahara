import React from 'react';
import { Box, Typography, LinearProgress, Paper } from '@mui/material';

interface Skill {
  name: string;
  level: string;
  value: number;
  color: 'primary' | 'secondary' | 'error' | 'info';
}

const skills: Skill[] = [
  { name: 'HTML', level: 'Master', value: 100, color: 'primary' },
  { name: 'CSS', level: 'Expert', value: 90, color: 'secondary' },
  { name: 'JavaScript', level: 'Advance', value: 80, color: 'primary' },
  { name: 'WordPress', level: 'Advance', value: 80, color: 'secondary' },
  { name: 'Adobe Photoshop', level: 'Master', value: 100, color: 'error' },
  { name: 'Adobe Illustrator', level: 'Expert', value: 90, color: 'info' },
  { name: 'Sketch', level: 'Expert', value: 90, color: 'error' },
  { name: 'Adobe XD', level: 'Beginner', value: 30, color: 'info' }
];

interface SkillBarProps {
  name: string;
  level: string;
  value: number;
  color: 'primary' | 'secondary' | 'error' | 'info';
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, value, color }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 1 }}>
    <Typography sx={{ width: '20%' }}>{name}</Typography>
    <Box sx={{ width: '70%' }}>
      <LinearProgress variant="determinate" value={value} color={color} />
    </Box>
    <Typography sx={{ width: '10%' }}>{level}</Typography>
  </Box>
);

const ProfessionalSkills: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Paper elevation={3} sx={{ width: 1000, padding: 2 }}>
        <Typography variant="h6" sx={{ textAlign: 'left', margin: 2 }}>
          Professional Skills
        </Typography>
        {skills.map(skill => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} value={skill.value} color={skill.color} />
        ))}
      </Paper>
    </Box>
  );
};

export default ProfessionalSkills;
