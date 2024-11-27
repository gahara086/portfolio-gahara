import React from 'react';
import { Box, Typography, Paper, Grow, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SchoolIcon from '@mui/icons-material/School';

const contactInfo = [
  { icon: <CakeIcon />, label: '年齢', value: '29歳' },
  { icon: <LandscapeIcon />, label: '出身地', value: '奈良県' },
  { icon: <EmailIcon />, label: 'メールアドレス', value: 'gaharajob@gmail.com' },
  { icon: <PhoneIcon />, label: '電話番号', value: '080-3845-1745' },
];

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
            flexDirection: 'row',
            p: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Box sx={{ width: '60%', marginRight: 2 }}>
            <Typography variant="h5" color="#20C0F3" sx={{ mb: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon />
              自己紹介
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              はじめまして。私はシステムエンジニアとして社会人6年目になる菅原栄嗣と申します。<br />
              仕様調整、コーディング、リリース作業といった幅広い業務を経験してきました。
              特にプログラミングに長けており、開発面ではソースコードレビューを担当しており、効率的なコーディングとバグの早期発見に貢献しています。 <br />
              開発側のリーダーとして、現在は週3日客先に常駐して仕様調整の業務を行っています。
              技術的な課題だけでなく、顧客の要望に応えることで、より良い製品作りを目指しています。
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Box sx={{ width: '40%' }}>
            <Typography variant="h5" color="#20C0F3" sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccountBoxIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              プロフィール
            </Typography>
            {contactInfo.map((info, index) => (
              <Typography variant="body1" sx={{ mb: 1 }} key={index}>
                {info.icon}
                &nbsp;{info.label}: {info.value}
              </Typography>
            ))}
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
};

export default AboutMe;
