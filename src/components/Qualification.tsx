import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, Grow } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ComputerIcon from '@mui/icons-material/Computer'; // コンピュータ関連のアイコン
import DriveEtaIcon from '@mui/icons-material/DriveEta'; // 自動車運転免許のアイコン
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'; // プロジェクトマネージャー資格のアイコン
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // 成就や賞を象徴するアイコン
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';

interface Qualification {
  title: string;
  year: string;
  status: 'completed' | 'planned';  // 資格のステータス
  icon: React.ReactElement;  // アイコンを追加
}

const qualifications: Qualification[] = [
  {
    title: '基本情報技術者',
    year: '2021',
    status: 'completed',
    icon: <ComputerIcon />
  },
  {
    title: '応用情報技術者',
    year: '2024',
    status: 'completed',
    icon: <ComputerTwoToneIcon />
  },
  {
    title: 'アルゴリズム実技検定 中級',
    year: '2024 - 2025',
    status: 'planned',
    icon: <AssignmentTurnedInIcon />
  },
  {
    title: '情報処理安全確保支援士（セキュリティスペシャリスト）',
    year: '2025-2026',
    status: 'planned',
    icon: <AssignmentTurnedInIcon />
  },
  // {
  //   title: 'プロジェクトマネージャー',
  //   year: '2028-2030',
  //   status: 'planned',
  //   icon: <AssignmentTurnedInIcon />
  // },
  {
    title: '普通自動車第一種運転免許',
    year: '2019',
    status: 'completed',
    icon: <DriveEtaIcon />
  }
];

const Qualification: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddding: 4,
        marginBottom: 4 
      }}
    >
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            padding: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmojiEventsIcon /> 資格
          </Typography>
          <List>
            {qualifications.map((qual, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {qual.status === 'completed' ? qual.icon : <HourglassEmptyIcon />}
                </ListItemIcon>
                <ListItemText primary={qual.title} secondary={`取得年: ${qual.year} (${qual.status === 'completed' ? '取得済み' : '取得予定'})`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grow>
    </Box>
  );
};

export default Qualification;
