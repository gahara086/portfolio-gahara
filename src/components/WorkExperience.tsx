import React from 'react';
import { Box, Typography, Paper, Grow, Chip, Link } from '@mui/material';
import { WorkOutline as WorkOutlineIcon } from '@mui/icons-material';
import { LocalShipping as LocalShippingIcon, Tv as TvIcon } from '@mui/icons-material';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

interface Experience {
  title: string;
  period: string;
  role: string;  // 役職を追加
  description: string;
  technologies: string[];
  links: {
    url: string;
    title: string;
  }[];
  icon: React.ReactElement;
}

const experiences: Experience[] = [
  {
    // title: '港湾分野における情報処理システム CyberPort開発',
    title: '港湾分野における情報処理システム開発',
    period: '2022年 10月 - 現在',
    role: 'システムアーキテクト',  // 役職
    description: '「CyberPort」は、港湾運営の効率化を図るために設計された先進的な情報処理システムです。このプロジェクトでは、リアルタイムでの船舶の入出港管理、荷役作業の最適化、環境監視といった複数の機能を統合しました。',
    technologies: ['JavaScript (Dojo)', 'HTML', 'CSS', 'Python (Flask)', 'PostgreSQL'],
    links: [
      { url: 'https://example.com/cyberport-news1', title: 'CyberPortプロジェクトのニュースリリース1' },
      { url: 'https://example.com/cyberport-news2', title: 'CyberPortプロジェクトのニュースリリース2' }
    ],
    icon: <LocalShippingIcon />
  },
  {
    title: 'AndroidOS搭載DTV 画質処理機能開発',
    period: '2019年 7月 - 2022年 9月',
    role: 'リードエンジニア',  // 役職
    description: 'このプロジェクトでは、Android OSを搭載したデジタルテレビ(DTV)のための高度な画質処理機能を開発しました。',
    technologies: ['C', 'C++', 'Android'],
    links: [
      { url: 'https://example.com/android-dtv-news', title: 'DTV画質処理機能開発に関する記事' }
    ],
    icon: <TvIcon />
  }
];

const WorkExperience: React.FC = () => {
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
            <WorkOutlineIcon />
            職務経歴
          </Typography>
          <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, textAlign: 'left' }}>
                  <Typography variant="h5" color="primary.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {exp.icon}
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">{exp.role}</Typography>
                  <Typography variant="subtitle2">{exp.period}</Typography>
                  <Typography>{exp.description}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {exp.technologies.map((tech, i) => (
                      <Chip key={i} label={tech} variant="outlined" color="primary" />
                    ))}
                  </Box>
                  {exp.links.map((link, i) => (
                    <Link key={i} href={link.url} target="_blank" rel="noopener" sx={{ mt: 1, display: 'block' }}>
                      {link.title}
                    </Link>
                  ))}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </Grow>
    </Box>
  );
};

export default WorkExperience;
