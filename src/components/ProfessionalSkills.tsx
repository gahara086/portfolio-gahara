import React from 'react';
import { Box, Typography, LinearProgress, Paper, Grow, Icon } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ComputerIcon from '@mui/icons-material/Computer';

// スキルの型定義
interface Skill {
  name: string;
  level: string;
  icon: React.ElementType;
  color: string;
  value: number;
}

// スキルのデータ
const programmingSkills: Skill[] = [
  { name: 'HTML', level: 'Master', icon: CodeIcon, color: '#1E90FF', value: 100 },
  { name: 'CSS', level: 'Expert', icon: CodeIcon, color: '#8A2BE2', value: 90 },
  { name: 'JavaScript', level: 'Master', icon: CodeIcon, color: '#1E90FF', value: 100 },
  { name: 'TypeScript', level: 'Advance', icon: CodeIcon, color: '#228B22', value: 80 },
  { name: 'Python', level: 'Master', icon: StorageIcon, color: '#1E90FF', value: 100 },
  { name: 'C', level: 'Master', icon: StorageIcon, color: '#1E90FF', value: 100 },
  { name: 'C++', level: 'Advance', icon: StorageIcon, color: '#228B22', value: 80 },
  { name: 'C#', level: 'Beginner', icon: StorageIcon, color: '#FF8C00', value: 60 },
  { name: 'Java', level: 'Beginner', icon: CodeIcon, color: '#FF8C00', value: 60 },
  { name: 'Algorithm', level: 'Advance', icon: AccountTreeIcon, color: '#228B22', value: 80 }
];

// スキルバーコンポーネント
interface SkillBarProps {
  name: string;
  level: string;
  icon: React.ElementType;
  color: string;
  value: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, icon: IconComponent, color, value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={{ enter: 1000, exit: 500 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 1 }} ref={ref}>
        <Icon component={IconComponent} sx={{ mr: 1 }} />
        <Typography sx={{ width: '30%' }}>{name}</Typography>
        <Box sx={{ width: '70%', height: 20, marginRight: 2, position: 'relative' }}>
          <LinearProgress
            variant="determinate"
            value={inView ? value : 0}
            sx={{
              height: '100%',
              width: '100%',
              '& .MuiLinearProgress-bar': {
                backgroundColor: color,
                transition: 'transform 2s ease-out'
              }
            }}
            aria-valuenow={inView ? value : 0}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
          />
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

// プロフェッショナルスキルコンポーネント
const ProfessionalSkills: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ maxWidth: 1000, width: '100%', padding: 4, backgroundColor: '#fafafa' }}>
          <Typography variant="h5" color="#20C0F3" sx={{ textAlign: 'left', margin: 2, fontWeight: 'bold' }}>
            <Icon component={ComputerIcon} sx={{ mr: 1, verticalAlign: 'bottom' }} />プログラミングスキル
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            {programmingSkills.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
};

export default ProfessionalSkills;
