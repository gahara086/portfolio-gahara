import React from 'react';
import { Box, Typography, Avatar, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article'; // Qiitaのアイコンが直接はないため、ArticleIconを代用します
import Head from 'next/head';

// 共通のスタイルやコンポーネントを定義
const iconButtonStyle = {
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
  }
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ポートフォリオ</title>
        <meta name="description" content="ホームページの説明文" />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/HomePage/back.png)',
          backgroundSize: '1000px auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 4
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
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.23)',
            mb: 0.5,
          }}
        >
          <Avatar
            src="/HomePage/icon.png" // アイコンの画像
            sx={{ width: 90, height: 90, mb: 2 }}
            alt="プロフィールアイコン"
          />
          <Typography variant="h4" sx={{ color: '#000000', mb: 1 }}>
            菅原栄嗣
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* GitHubのリンクボタン */}
            <Tooltip title="GitHub" arrow>
              <IconButton
                href="https://github.com/gahara086"
                aria-label="GitHub"
                sx={iconButtonStyle}
              >
                <GitHubIcon sx={{ color: '#000000' }} />
              </IconButton>
            </Tooltip>
            {/* Qiitaのリンクボタン */}
            <Tooltip title="Qiita" arrow>
              <IconButton
                href="https://qiita.com/moririn086"
                aria-label="Qiita"
                sx={iconButtonStyle}
              >
                <ArticleIcon sx={{ color: '#000000' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
