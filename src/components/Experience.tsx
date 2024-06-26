import { Typography, Container, Box } from '@mui/material';

const Experience = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          職歴
        </Typography>
        <Typography variant="body1">
          株式会社 - システムエンジニア (2020年 - 現在)
          <br />
          主な役割: フルスタック開発、プロジェクトリード
        </Typography>
        <Typography variant="h6" gutterBottom>
          学歴
        </Typography>
        <Typography variant="body1">
          XX大学 - 情報工学部 卒業 (2020年)
          <br />
          主要科目: XXX
        </Typography>
      </Box>
    </Container>
  );
};

export default Experience;
