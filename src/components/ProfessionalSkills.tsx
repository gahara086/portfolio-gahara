import React from 'react';
import { Box, Typography, LinearProgress, Paper } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: string;
  value: number;
  color: 'primary' | 'secondary' | 'error' | 'info';
}

const programmingSkills: Skill[] = [
  { name: 'HTML', level: 'Master', value: 100, color: 'primary' },
  { name: 'CSS', level: 'Expert', value: 90, color: 'secondary' },
  { name: 'JavaScript', level: 'Advance', value: 80, color: 'primary' },
  { name: 'TypeScript', level: 'Advance', value: 80, color: 'primary' },
  { name: 'Python', level: 'Advance', value: 80, color: 'secondary' },
  { name: 'C', level: 'Master', value: 100, color: 'error' },
  { name: 'C++', level: 'Expert', value: 90, color: 'info' },
  { name: 'Java', level: 'Expert', value: 90, color: 'error' },
  { name: 'Algorithm', level: 'Beginner', value: 30, color: 'info' }
];

const communicationSkills: Skill[] = [
  { name: 'CodeReview', level: 'Master', value: 100, color: 'primary' },
  { name: 'InterView', level: 'Master', value: 100, color: 'primary' },
  { name: 'Presentation', level: 'Master', value: 100, color: 'primary' },
  { name: 'LeaderShip', level: 'Master', value: 100, color: 'primary' },
  { name: 'Communication', level: 'Expert', value: 90, color: 'secondary' },
  { name: 'CreateDocument', level: 'Expert', value: 90, color: 'secondary' },
  { name: 'CustomerSupport', level: 'Expert', value: 90, color: 'secondary' },
  { name: 'ClientSupport', level: 'Expert', value: 90, color: 'secondary' },
  { name: 'ProjectManagement', level: 'Expert', value: 90, color: 'secondary' }
];

interface SkillBarProps {
  name: string;
  level: string;
  value: number;
  color: 'primary' | 'secondary' | 'error' | 'info';
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, value, color }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 1 }} ref={ref}>
      <Typography sx={{ width: '20%' }}>{name}</Typography>
      <Box sx={{ width: '70%', height: 20, marginRight: 2, position: 'relative' }}>
        <LinearProgress 
          variant="determinate"
          value={inView ? value : 0}
          color={color}
          sx={{
            height: '100%',
            width: '100%',
            '& .MuiLinearProgress-bar': {
              transition: 'transform 2s ease-out'
            }
          }} />
        <Typography sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          textAlign: 'center',
          lineHeight: '20px',
          color: 'white',
          fontSize: '0.75rem'
        }}>
          {level}
        </Typography>
      </Box>
    </Box>
  );
};

const ProfessionalSkills: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      {/* <Paper elevation={3} sx={{ width: '95%', padding: 2 }}> */}
      {/* TODO: ここの幅は%で指定するようにした方がいいかも */}
      <Paper elevation={3} sx={{ width: 1000, padding: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'left', margin: 2 }}>
          Professional Skills
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ width: '50%' }}>
            <Typography variant="h6" sx={{ textAlign: 'left', margin: 2 }}>
              Programming Skills
            </Typography>
            {programmingSkills.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} value={skill.value} color={skill.color} />
            ))}
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="h6" sx={{ textAlign: 'left', margin: 2 }}>
              Communication Skills
            </Typography>
            {communicationSkills.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} value={skill.value} color={skill.color} />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfessionalSkills;
