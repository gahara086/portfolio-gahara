import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // 趣味がゲームの場合のアイコン
import StarIcon from '@mui/icons-material/Star'; // 成果や実績を示すアイコン

interface Hobby {
  title: string;
  achievements: string[];
}

const hobbies: Hobby[] = [
  {
    // icons-materialからいい感じのアイコンを取得
    title: '麻雀',
    achievements: [
      // 画像を張る
      // 上位から数えた割合も記載する
      '雀魂 最高段位到達 - 2024',
      '天鳳 最高難易度宅到達 - 2019, 2020'
    ]
  },
    {
    // icons-materialからいい感じのアイコンを取得
    title: '筋トレ',
    achievements: [
      // 筋トレの画像を入れる
      '週2程度',
    ]
  },
  {
    title: '競技プログラミング',
    achievements: [
      // 画像を張る
      'atcorder 茶入 - 2023'
    ]
  }
];

const Hobby: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Paper elevation={3} sx={{ width: 1000, padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', margin: 2 }}>
          Hobby
        </Typography>
        {hobbies.map((hobby, index) => (
          <Box key={index} sx={{ margin: 2 }}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              {hobby.title}
            </Typography>
            <List>
              {hobby.achievements.map((achievement, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={achievement} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Hobby;
