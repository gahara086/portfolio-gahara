import { Typography, Container, Box } from '@mui/material';

const Hobbies = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          趣味
        </Typography>
        <Typography variant="body1">
          記録: 写真コンテストで国際的な賞を受賞。
        </Typography>
        <Typography variant="body1">
          研鑽: ガーデニング技術の向上のため、地元のコミュニティと協力し、月に一度のワークショップに参加。
        </Typography>
      </Box>
    </Container>
  );
};

export default Hobbies;
