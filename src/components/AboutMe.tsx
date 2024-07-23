import React from 'react';
import { Box, Typography, Paper, Grow, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // プロフィールアイコン
import LandscapeIcon from '@mui/icons-material/Landscape';

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            display: 'flex',
            flexDirection: 'row', // 列から行へ変更
            p: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Box sx={{ width: '60%', marginRight: 2 }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 'medium' }}>
              <PersonIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              自己紹介
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              はじめまして。私はシステムエンジニアとして社会人6年目になる菅原栄嗣と申します。<br />
              仕様調整、コーディング、リリース作業といった幅広い業務を経験してきました。
              特にプログラミングに長けており、開発面ではソースコードレビューを担当しており、効率的なコーディングとバグの早期発見に貢献しています。 <br />
              開発側のリーダーとして、現在は週3日客先に常駐して仕様調整の業務を行っています。
              技術的な課題だけでなく、顧客の要望に応えることで、より良い製品作りを目指しています。
            </Typography>
            {/* <Typography variant="body1" sx={{ mb: 2 }}>
              また、自身の強みを発見するために、適正診断を実施しました。<br />
              下記に診断結果を添付します。
            </Typography>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdfIcon />}
              sx={{
                mb: 2,
                '&:hover': {
                  backgroundColor: '#e0f2f1',
                  transform: 'scale(1.05)'
                }
              }}
              href="/path/to/your/strengthsfinder_results.pdf"
              target="_blank"
            >
              ストレングスファインダー診断結果
            </Button> */}
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Box sx={{ width: '40%' }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'medium' }}>
              <AccountBoxIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              プロフィール
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {/* 基礎情報 */}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <CakeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              年齢: 29歳
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <LandscapeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              出身地: 奈良県
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              メールアドレス: gaharajob@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              電話番号: 080-3845-1745
            </Typography>
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
};

export default AboutMe;
