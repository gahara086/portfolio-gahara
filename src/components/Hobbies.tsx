import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, CardMedia, Dialog, DialogTitle, DialogContent, Grow } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import StarIcon from '@mui/icons-material/Star';

interface Achievement {
  content: string;
  description: string;
  images: string[];
}

interface Hobby {
  title: string;
  icon: JSX.Element;
  achievements: Achievement[];
}

const hobbies: Hobby[] = [
  {
    title: '麻雀',
    icon: <SportsEsportsIcon />,
    achievements: [
      {
        content: '雀魂 最高段位到達 - 2024',
        description: 'オンライン麻雀「雀魂」にて上位0.16%に位置する魂天に到達',
        images: ['/Hobby/jantama-account.png','/Hobby/jantama-achievements.png']
      },
      {
        content: '天鳳 最高難易度宅到達 - 2016',
        description: 'オンライン麻雀「天鳳」にて上位0.192%に位置する八段に到達',
        images: ['/Hobby/tenho-account.png','/Hobby/tenho-achievements.png']
      }
    ],
  },
  // {
  //   title: '競技プログラミング',
  //   icon: <CodeIcon />,
  //   achievements: [
  //     {
  //       content: 'atcoder 茶入 - 2023',
  //       description: 'プログラミングコンテストサイト「atcoder」で初級者レベルに到達',
  //       images: ['/Hobby/atcorder-account.png']
  //     }
  //   ],
  // },
  {
    title: '筋トレ',
    icon: <FitnessCenterIcon />,
    achievements: [
      {
        content: '週2回のトレーニングルーチン維持',
        description: '一貫して週に2回のトレーニングを行い、健康を維持',
        images: []
      },
      {
        content: 'ベンチプレス N Kg',
        description: 'ベンチプレスで個人記録を更新',
        images: ['/Hobby/bench-press-achievements.png']
      }
    ],
  }
];

const Hobby: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ width: 1000, padding: 2 }}>
          <Typography variant="h5" sx={{ textAlign: 'left', margin: 2, display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ marginRight: 1 }} />趣味
          </Typography>
          {hobbies.map((hobby, index) => (
            <Box key={index} sx={{ margin: 2 }}>
              <Typography variant="h5" sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
                {hobby.icon}
                <span style={{ marginLeft: 10 }}>{hobby.title}</span>
              </Typography>
              <List>
                {hobby.achievements.map((achievement, idx) => (
                  <ListItem key={idx} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={achievement.content} secondary={achievement.description} />
                    {achievement.images.map((image, imageIndex) => (
                      <CardMedia
                        key={imageIndex}
                        component="img"
                        sx={{ width: 160, height: 90, marginLeft: 2, cursor: 'pointer' }}
                        image={image}
                        alt={`Image of ${achievement.content}`}
                        onClick={() => handleClickOpen(image)}
                      />
                    ))}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Paper>
      </Grow>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow} // アニメーションの追加
        transitionDuration={500}  // アニメーションの時間を調整
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Hobby;
