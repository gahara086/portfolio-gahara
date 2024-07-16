import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, Link, Dialog, DialogContent, Grow } from '@mui/material';
import Slider from 'react-slick';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ComputerIcon from '@mui/icons-material/Computer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Achievement {
  content: string;
  description: string;
  images: string[];
  url?: string; // 新しいプロパティ
}

interface Study {
  title: string;
  icon: JSX.Element;
  achievements: Achievement[];
}

const studyGuide: Study[] = [
  {
    title: '新規フレームワークの習得',
    icon: <ComputerIcon />,
    achievements: [
      {
        content: 'ポートフォリオサイトの作成',
        description: 'React, Next.jsを学習して、ポートフォリオサイトをデプロイ',
        images: [],
        // url: 'https://your-portfolio-link.com' // ここにリンクを追加
      },
      {
        content: 'React hooksの理解',
        description: 'React 16.8 で追加された新機能React hooksを理解するために、サンプルアプリを作成',
        images: [],
        url: '/study' // ここにリンクを追加
      }
    ],
  },
  {
    title: '競技プログラミング',
    icon: <CodeIcon />,
    achievements: [
      {
        content: 'AtCoderProblems',
        description: '様々なアルゴリズムを習得するために、AtCoderの過去問を実施',
        images: ['/StudyGuide/atcorder-problems.png']
      },
      {
        content: 'atcoder 茶入 - 2023',
        description: 'プログラミングコンテストサイト「atcoder」で初級者レベルに到達',
        images: ['/StudyGuide/atcorder-account.png']
      }
    ],
  },
  {
    title: '読書', // 本のアイコンに修正
    icon: <LocalLibraryIcon />,
    achievements: [
      {
        content: '技術書',
        description: '開発効率向上のために技術書を通読',
        // images: ['/StudyGuide/tech_book_1.jpeg', '/StudyGuide/tech_book_2.jpeg']
        images: []
        // リーダブルコード
        // 良いコード悪いコードで学ぶ
        // SQLアンチパターン
        // Web設計の本
        // プリンシプルオブプログラミング
        // 競技プログラミングの本
      },
      {
        content: '啓発本',
        description: 'コミュニケーションスキル及び開発フロー改善など、社会人としての振る舞いを学ぶために自己啓発本を通読',
        // images: ['/Hobby/自己啓発.png','/Hobby/自己啓発.png']
        images: []
        // カーネギー
        // チーズはどこへ消えた
        // レガシーコードからの脱却
        // googleのやつ
      }
    ],
  },
];

const StudyGuide: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    // setImageDescription(desciption);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddding: 4,
        marginBottom: 4 
      }}
    >
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ maxWidth: '1000px', width: '100%', padding: 2 }}>
          <Typography variant="h5" sx={{ textAlign: 'center', margin: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightbulbOutlinedIcon />
            技術習得
          </Typography>
          {studyGuide.map((study, index) => (
            <Box key={index} sx={{ margin: 2 }}>
              <Typography variant="h5" sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
                {study.icon}
                <span style={{ marginLeft: 10 }}>{study.title}</span>
              </Typography>
              <List>
                {study.achievements.map((achievement, idx) => (
                  <ListItem key={idx} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={achievement.content} secondary={achievement.description} />
                    <Box sx={{ width: 160, height: 90, marginLeft: 2 }}>
                      {achievement.images.length > 0 ? (
                        <Slider {...settings}>
                          {achievement.images.map((image, imageIndex) => (
                            <div key={imageIndex} onClick={() => handleClickOpen(image)}>
                              <img src={image} alt={`Image of ${achievement.content}`} style={{width: '100%', height: '100%', cursor: 'pointer' }} />
                            </div>
                          ))}
                        </Slider>
                      ) : <></>}
                    </Box>
                    {achievement.url && (
                      <Link href={achievement.url} target="_blank" rel="noopener" sx={{ mt: 1 }}>
                        サンプルアプリ
                      </Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Paper>
      </Grow>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="body1" style={{ marginTop: 20 }}>
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default StudyGuide;
