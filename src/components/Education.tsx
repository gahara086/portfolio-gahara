import React from 'react';
import { Box, Typography, Paper, Grow } from '@mui/material';
import { School as SchoolIcon, EmojiEvents as HighSchoolIcon, Engineering as UniversityIcon } from '@mui/icons-material';
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
  icon: React.ReactElement;
  thesis?: {
    title: string;
    summary: string;
  };  // 卒論のタイトルと内容を詳細に記述
}

const educationHistory: Education[] = [
  {
    degree: '情報工学',
    school: '大学',
    period: '2014 - 2019',
    description: '情報工学を専攻',
    thesis: {
      title: '深層強化学習を使用したビデオゲームプレイヤーの作成',
      summary: 'シミュレーション環境「OpenAI Gym」を使用して、ビデオゲーム「pacman」のプレイヤーを作成しました。深層強化学習を採用し、高度な決定能力を有するプレイヤーの開発を目指しました。'
    },
    icon: <UniversityIcon />
  },
  {
    degree: '教養',
    school: '高校',
    period: '2011 - 2014',
    description: '一般教養を学習',
    icon: <HighSchoolIcon />
  },
  {
    degree: '教養',
    school: '中学',
    period: '2008 - 2011',
    description: '一般教養を学習',
    icon: <SchoolIcon />
  }
];

const Education: React.FC = () => {
  return (
    // <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
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
        {/* <Paper elevation={6} sx={{ maxWidth: 960, width: '100%', padding: 4, backgroundColor: '#fafafa' }}> */}
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            flexDirection: 'row', // 列から行へ変更
            p: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', margin: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <SchoolIcon />
            学歴
          </Typography>
          <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
            {educationHistory.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    {edu.icon}
                  </TimelineDot>
                  {index !== educationHistory.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h5" color="primary.main">{edu.school}</Typography>
                  <Typography variant="h6" color="primary.main">{edu.degree}</Typography>
                  <Typography variant="subtitle2">{edu.period}</Typography>
                  <Typography>{edu.description}</Typography>
                  {edu.thesis && (
                    <>
                      <Typography sx={{ mt: 1, fontWeight: 'bold' }}>卒論タイトル: {edu.thesis.title}</Typography>
                      <Typography sx={{ mt: 0.5 }}>卒論概要: {edu.thesis.summary}</Typography>
                    </>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </Grow>
    </Box>
  );
};

export default Education;
