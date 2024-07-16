import React from 'react';
import { Box, Typography, Avatar, IconButton, Tooltip } from '@mui/material';
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
            maxWidth: 1000,
            width: '100%',
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
          菅原栄嗣
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Tooltip title="GitHub" arrow>
            <IconButton 
              href="https://github.com/gahara086" 
              aria-label="GitHub"
              sx={{ 
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                  color: '#FFD700' // ホバー時の色をゴールドに変更
                }
              }}
            >
              <GitHubIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Qiita" arrow>
            <IconButton 
              href="https://qiita.com/moririn086" 
              aria-label="Qiita"
              sx={{ 
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                  color: '#FFD700' // ホバー時の色をゴールドに変更
                }
              }}
            >
              <ArticleIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Email" arrow>
            <IconButton 
              href="mailto:your-email@example.com" 
              aria-label="Email"
              sx={{ 
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                  color: '#FFD700' // ホバー時の色をゴールドに変更
                }
              }}
            >
              <EmailIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Tooltip> */}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
