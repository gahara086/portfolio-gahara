import { Typography, Container, Box, Link } from '@mui/material';

const Projects = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          プロジェクト
        </Typography>
        <Typography variant="body1" gutterBottom>
          プロジェクトマネジメントツール (2021年)
          <br />
          目的: 効率的なタスク管理とチームコラボレーションの促進
          <br />
          使用技術: React, Node.js, MongoDB
          <br />
          役割: フロントエンド開発リーダー
          <br />
          成果: チームの生産性向上に大きく寄与
          <br />
          リンク: <Link href="https://github.com/yourusername/project-management-tool">GitHub</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Projects;
