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
    title: '港湾分野における情報処理システム開発',
    period: '2022年 10月 - 現在',
    role: '開発側リーダー',  // 役職
    description: '港湾施設情報を電子化し、地図上で情報を確認できるアプリの開発を行いました。利用者視点でユーザビリティを意識し利活用しやすいアプリにすることで、顧客満足度の向上に貢献しました。',
    technologies: ['JavaScript (jQuery, Dojo, ArcGIS, Auth0)', 'HTML', 'CSS', 'Python (Flask, Auth0)', 'PostgreSQL'],
    links: [
      { url: 'https://www.cyber-port.mlit.go.jp/infra/', title: '対象アプリ' },
      { url: 'https://www.mlit.go.jp/kowan/content/001741935.pdf', title: 'プロジェクトのリリースニュース' }
    ],
    icon: <LocalShippingIcon />
  },
  {
    title: 'AndroidOS搭載DTV 画質処理機能開発',
    period: '2019年 7月 - 2022年 9月',
    role: '開発職',  // 役職
    description: 'Android OSを搭載したデジタルテレビ(DTV)のための高度な画質処理機能の開発しました。開発にあたって、バグの原因の調査及び改修及び新規モデルへの対応、試験まで幅広く開発を実施しました。',
    technologies: ['C', 'C++', 'Android'],
    links: [
      { url: 'https://example.com/android-dtv-news', title: 'リリースされているDTV画質処理機能（リンク先無し）' }
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
