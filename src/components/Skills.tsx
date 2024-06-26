import { Typography, Container, Box } from '@mui/material';

const Skills = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          技術スキル
        </Typography>
        <Typography variant="body1">
          JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Docker, AWS
        </Typography>
        <Typography variant="h6" gutterBottom>
          ソフトスキル
        </Typography>
        <Typography variant="body1">
          チームワーク、プロジェクト管理、コミュニケーション能力
        </Typography>
      </Box>
    </Container>
  );
};

export default Skills;
