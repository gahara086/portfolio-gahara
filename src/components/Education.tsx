import React from 'react';
import { Box, Typography, Paper, Grow, Link } from '@mui/material';
import { School as SchoolIcon, EmojiEvents as HighSchoolIcon, Engineering as UniversityIcon } from '@mui/icons-material';
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

// 学歴情報の型定義
interface Education {
  degree: string; // 学位または専攻
  school: string; // 学校名
  period: string; // 学習期間
  description: string; // 学校での説明または専攻内容
  icon: React.ReactElement; // 学校に関連するアイコン
  thesis?: {
    title: string; // 卒論のタイトル
    summary: string; // 卒論の概要
  }; // 卒論情報
  action?: {
    title: string; // 成果物のタイトル
    summary: string; // 成果物のリンク
  }; // 成果物情報
}

// 学歴データの配列
const educationHistory: Education[] = [
  {
    degree: '情報工学',
    school: '徳島大学',
    period: '2014 - 2019',
    description: '情報工学を専攻',
    thesis: {
      title: '深層強化学習を使用したビデオゲームプレイヤーの作成',
      summary: 'シミュレーション環境「OpenAI Gym」を使用して、ビデオゲーム「pacman」のプレイヤーを作成しました。深層強化学習を採用し、高度な決定能力を有するプレイヤーの開発を目指しました。'
    },
    action: {
      title: '2年時に講義内での成果物で個人賞を受賞',
      summary: 'http://netadm.iss.tokushima-u.ac.jp/soft/2015/1st/winner.html'
    },
    icon: <UniversityIcon />
  },
  {
    degree: '',
    school: '大阪桐蔭高等学校',
    period: '2011 - 2014',
    description: '',
    icon: <HighSchoolIcon />
  },
  {
    degree: '',
    school: '奈良教育大学附属中学校',
    period: '2008 - 2011',
    description: '',
    icon: <SchoolIcon />
  }
];

// 学歴を表示するコンポーネント
const Education: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4
      }}
    >
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            flexDirection: 'row', // 列から行への変更
            p: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Typography variant="h5" color="#20C0F3" sx={{ textAlign: 'center', margin: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold' }}>
            <SchoolIcon />
            学歴
          </Typography>
          <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
            {/* 学歴のリストをマップして表示 */}
            {educationHistory.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  {/* タイムラインのドットとコネクタ */}
                  <TimelineDot color="primary">
                    {edu.icon}
                  </TimelineDot>
                  {index !== educationHistory.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  {/* 学校名 */}
                  <Typography variant="h5" color="primary.main">{edu.school}</Typography>
                  {/* 学位または専攻 */}
                  <Typography variant="h6" color="primary.main">{edu.degree}</Typography>
                  {/* 学習期間 */}
                  <Typography variant="subtitle2">{edu.period}</Typography>
                  {/* 学校での説明 */}
                  <Typography>{edu.description}</Typography>
                  {edu.thesis && (
                    <>
                      {/* 卒論タイトルと概要 */}
                      <Typography sx={{ mt: 1, fontWeight: 'bold' }}>卒論タイトル: {edu.thesis.title}</Typography>
                      <Typography sx={{ mt: 0.5 }}>卒論概要: {edu.thesis.summary}</Typography>
                    </>
                  )}
                  {edu.action && (
                    <>
                      {/* 成果物タイトルとリンク */}
                      <Typography sx={{ mt: 1 }}>{edu.action.title}:
                        <Link href={edu.action.summary} target="_blank" rel="noopener">
                          個人作品
                        </Link>
                      </Typography>
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
