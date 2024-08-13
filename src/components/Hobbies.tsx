import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, CardMedia, Dialog, DialogTitle, DialogContent, Grow } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // 麻雀のアイコン
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // 筋トレのアイコン
import StarIcon from '@mui/icons-material/Star'; // 成就や成果を示すアイコン

// 達成内容に関する情報の型定義
interface Achievement {
  content: string; // 達成内容
  description: string; // 詳細説明
  images: string[]; // 画像のURLリスト
}

// 趣味に関する情報の型定義
interface Hobby {
  title: string; // 趣味のタイトル
  icon: JSX.Element; // アイコン
  achievements: Achievement[]; // 達成項目のリスト
}

// 趣味のデータセット
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
  {
    title: '筋トレ',
    icon: <FitnessCenterIcon />,
    achievements: [
      {
        content: '週2回のトレーニングルーチン維持',
        description: '一貫して週に2回のトレーニングを行い、健康を維持',
        images: []
      }
    ],
  }
];

// 趣味を表示するコンポーネント
const Hobby: React.FC = () => {
  const [open, setOpen] = useState(false); // 画像ダイアログの開閉状態
  const [selectedImage, setSelectedImage] = useState(''); // 選択された画像のURL

  // 画像をクリックした際にダイアログを開く処理
  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // ダイアログを閉じる処理
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ width: 1000, padding: 2 }}>
          {/* セクションタイトル */}
          <Typography variant="h5" color="#20C0F3" sx={{ textAlign: 'left', margin: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold' }}>
            <StarIcon sx={{ marginRight: 1 }} />趣味
          </Typography>
          {/* 趣味データをマップして表示 */}
          {hobbies.map((hobby, index) => (
            <Box key={index} sx={{ margin: 2 }}>
              <Typography variant="h6" color="primary.main" sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
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
                    {/* 画像がある場合は画像を表示し、クリックでダイアログを開く */}
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
      {/* 画像ダイアログ */}
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
