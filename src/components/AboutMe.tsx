import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4 // コンポーネント間のスペース調整
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 1000,
          display: 'flex',
          flexDirection: 'row',
          padding: 2,
          backgroundColor: '#fff' // 背景色
        }}
      >
        <Box sx={{ width: '50%', padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            自己紹介
          </Typography>
          <Typography variant="body1">
            ここに自己紹介の文章を記入します。あなたの背景、経験、専門知識などを紹介してください。
          </Typography>
        </Box>
        <Box sx={{ width: '50%', padding: 2, borderLeft: 1, borderColor: 'grey.300' }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            連絡先情報
          </Typography>
          <Typography variant="body2">
            年齢: 30歳<br />
            メールアドレス: email@example.com<br />
            電話番号: 090-1234-5678
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutMe;
