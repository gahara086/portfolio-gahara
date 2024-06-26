import { Typography, Container, Box } from '@mui/material';

const Expertise = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          特技
        </Typography>
        <Typography variant="body1">
          作業効率化: 毎日の業務フローを見直し、自動化ツールを導入して時間を大幅に節約。
        </Typography>
        <Typography variant="body1">
          スキルアップ: 定期的にオンラインコースを受講し、最新の技術トレンドを学習。
        </Typography>
        <Typography variant="body1">
          長所: 優れた問題解決能力とチーム内でのコミュニケーション力。
        </Typography>
      </Box>
    </Container>
  );
};

export default Expertise;
