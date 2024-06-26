import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article'; // Qiitaのアイコンが直接はないため、ArticleIconを代用します

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/path/to/background-image.jpg)',
        backgroundSize: 'cover',
        margin: 4 // 他のコンポーネントとの間にスペースを確保
      }}
    >
      <Box
        sx={{
          width: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.23)', // 影を追加して立体感を出す
          mb: 0.5 // 下にスペースを確保
        }}
      >
        <Avatar
          src="/path/to/your-avatar.jpg"
          sx={{ width: 90, height: 90, mb: 2 }}
        />
        <Typography variant="h4" sx={{ color: '#fff', mb: 1 }}>
          名前苗字
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton href="https://github.com/yourusername" aria-label="GitHub">
            <GitHubIcon sx={{ color: '#fff' }} />
          </IconButton>
          <IconButton href="https://qiita.com/yourusername" aria-label="Qiita">
            <ArticleIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
