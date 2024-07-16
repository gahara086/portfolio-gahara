import React from 'react';
import { Box, Typography, LinearProgress, Paper, Grow, Icon } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import CommunicationIcon from '@mui/icons-material/Forum';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ComputerIcon from '@mui/icons-material/Computer';

interface Skill {
  name: string;
  level: string;
  value: number;
  color: 'primary' | 'secondary' | 'error' | 'info';
  icon: React.ElementType;
}

const programmingSkills: Skill[] = [
  { name: 'HTML', level: 'Master', value: 100, color: 'primary', icon: CodeIcon },
  { name: 'CSS', level: 'Expert', value: 90, color: 'secondary', icon: CodeIcon },
  { name: 'JavaScript', level: 'MASTER', value: 100, color: 'primary', icon: CodeIcon },
  { name: 'TypeScript', level: 'Advance', value: 80, color: 'error', icon: CodeIcon },
  { name: 'Python', level: 'MASTER', value: 100, color: 'primary', icon: StorageIcon },
  { name: 'C', level: 'Master', value: 100, color: 'primary', icon: StorageIcon },
  { name: 'C++', level: 'Advance', value: 90, color: 'error', icon: StorageIcon },
  { name: 'Java', level: 'Beginner', value: 90, color: 'info', icon: CodeIcon },
  { name: 'Algorithm', level: 'Advance', value: 30, color: 'error', icon: AccountTreeIcon }
];

const communicationSkills: Skill[] = [
  { name: 'コミュニケーション', level: 'Expert', value: 90, color: 'secondary', icon: PeopleIcon },
  { name: '傾聴力', level: 'Master', value: 100, color: 'primary', icon: PeopleIcon },
  { name: 'ドキュメント作成', level: 'Expert', value: 90, color: 'secondary', icon: CodeIcon },
  { name: 'コードレビュー', level: 'Expert', value: 90, color: 'secondary', icon: CodeIcon },
  { name: 'ティーチング', level: 'Expert', value: 90, color: 'secondary', icon: CommunicationIcon },
  { name: 'プロジェクトマネジメント', level: 'Beginner', value: 30, color: 'info', icon: AccountTreeIcon }
];

interface SkillBarProps {
  name: string;
  level: string;
  value: number;
  color: 'primary' | 'secondary' | 'error' | 'info';
  icon: React.ElementType;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, value, color, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={{ enter: 1000, exit: 500 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 1 }} ref={ref}>
        <Icon component={icon} sx={{ mr: 1 }} />
        <Typography sx={{ width: '30%' }}>{name}</Typography>
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
    </Grow>
  );
};

const ProfessionalSkills: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            padding: 4 ,
            backgroundColor: '#fafafa'
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2 }}>
            <Icon component={EngineeringIcon} sx={{ mr: 1, verticalAlign: 'bottom' }} />専門技術
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant="h6" sx={{ textAlign: 'left', margin: 2 }}>
                <Icon component={ComputerIcon} sx={{ mr: 1, verticalAlign: 'bottom' }} />プログラミングスキル
              </Typography>
              {programmingSkills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} value={skill.value} color={skill.color} icon={skill.icon} />
              ))}
            {/* </Box> */}
            {/* <Box sx={{ width: '50%' }}> */}
              <Typography variant="h6" sx={{ textAlign: 'left', margin: 2 }}>
                <Icon component={CommunicationIcon} sx={{ mr: 1, verticalAlign: 'bottom' }} />コミュニケーションスキル
              </Typography>
              {communicationSkills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} value={skill.value} color={skill.color} icon={skill.icon} />
              ))}
            </Box>
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
};

export default ProfessionalSkills;
