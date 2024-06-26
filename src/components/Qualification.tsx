import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // 資格アイコン

interface Qualification {
  title: string;
  year: string;
}

const qualifications: Qualification[] = [
  {
    title: '基本情報技術者',
    year: '2018'
  },
  {
    title: '応用情報技術者',
    year: '2020'
  },
  {
    title: 'プロジェクトマネージメントプロフェッショナル（PMP）',
    year: '2021'
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    year: '2022'
  }
];

const Qualification: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Paper elevation={3} sx={{ width: 1000, padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', margin: 2 }}>
          Qualifications
        </Typography>
        <List>
          {qualifications.map((qual, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <VerifiedUserIcon />
              </ListItemIcon>
              <ListItemText primary={qual.title} secondary={`取得年: ${qual.year}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Qualification;
