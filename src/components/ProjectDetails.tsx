import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

interface ProjectDetail {
  title: string;
  summary: string;
  roles: string;
  technologies: string;
  outcomes: string;
  challenges: string;
}

const projectDetails: ProjectDetail[] = [
  {
    title: 'Webアプリケーション開発',
    summary: 'このプロジェクトは、中小企業向けにカスタマイズされたCRMシステムを開発しました。',
    roles: 'チームリーダーとしてプロジェクト管理、フロントエンドおよびバックエンドの開発を担当。',
    technologies: '使用技術: React, Node.js, MongoDB, Docker',
    outcomes: '顧客管理とデータ分析機能を強化し、顧客満足度を20%向上させました。',
    challenges: '初期の要件定義が不明瞭であったため、要件を明確化するワークショップを実施しました。'
  }
];

const ProjectDetails: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Paper elevation={3} sx={{ width: 1000, padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', margin: 2 }}>
          Project Details
        </Typography>
        {projectDetails.map((project, index) => (
          <Box key={index} sx={{ marginBottom: 4 }}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>{project.title}</Typography>
            <Typography paragraph><strong>プロジェクト概要:</strong> {project.summary}</Typography>
            <Divider light />
            <Typography paragraph><strong>役割と責任:</strong> {project.roles}</Typography>
            <Divider light />
            <Typography paragraph><strong>技術とツール:</strong> {project.technologies}</Typography>
            <Divider light />
            <Typography paragraph><strong>成果とインパクト:</strong> {project.outcomes}</Typography>
            <Divider light />
            <Typography paragraph><strong>チャレンジと解決策:</strong> {project.challenges}</Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default ProjectDetails;
