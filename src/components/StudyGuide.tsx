import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, Link, Dialog, DialogContent, Grow } from '@mui/material';
import Slider from 'react-slick'; // 画像スライダーライブラリ
import CodeIcon from '@mui/icons-material/Code'; // 競技プログラミングのアイコン
import StarIcon from '@mui/icons-material/Star'; // 成就や成果を示すアイコン
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'; // 読書のアイコン
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'; // 個人学習のアイコン
import ComputerIcon from '@mui/icons-material/Computer'; // フレームワーク習得のアイコン
import "slick-carousel/slick/slick.css"; // スライダーのスタイル
import "slick-carousel/slick/slick-theme.css"; // スライダーのテーマ

// 学習内容に関する情報の型定義
interface Achievement {
  content: string; // 達成内容
  description: string; // 詳細説明
  images: string[]; // 画像のURLリスト
  url?: string; // 任意のURL（例えば、サンプルアプリへのリンク）
}

interface Study {
  title: string; // 学習タイトル
  icon: JSX.Element; // アイコン
  achievements: Achievement[]; // 達成項目のリスト
}

// 学習ガイドのデータ
const studyGuide: Study[] = [
  {
    title: '新規フレームワークの習得',
    icon: <ComputerIcon />,
    achievements: [
      {
        content: 'React, Next.js',
        description: 'ポートフォリオサイト、React hooksサンプルアプリの作成',
        images: [],
        url: '/study' // ここにリンクを追加
      },
      {
        content: 'Unity',
        description: 'UnityのためにC#の基礎学習を実施中',
        images: [],
      },
      {
        content: 'データ分析',
        description: 'データ分析を学習するために、pythonでPandasライブラリの学習',
        images: [],
      }
    ],
  },
  {
    title: '競技プログラミング',
    icon: <CodeIcon />,
    achievements: [
      {
        content: 'AtCoderProblems',
        description: '様々なアルゴリズムを習得するために、AtCoderの過去問を実施 プログラミングコンテストに挑戦',
        images: ['/StudyGuide/atcorder/atcorder-problems.png', '/StudyGuide/atcorder/atcorder-account.png']
      }
    ],
  },
  {
    title: '読書',
    icon: <LocalLibraryIcon />,
    achievements: [
      {
        content: '技術書',
        description: '開発効率向上のために技術書を通読',
        images: [
          '/StudyGuide/technology/book1.jpeg',
          '/StudyGuide/technology/book2.jpg',
          '/StudyGuide/technology/book3.jpg',
          '/StudyGuide/technology/book4.jpg',
          '/StudyGuide/technology/book5.jpg',
        ]
      },
      {
        content: '啓発本',
        description: 'コミュニケーションスキル及び開発フロー改善など、社会人としての振る舞いを学ぶために自己啓発本を通読',
        images: [
          '/StudyGuide/enlightenment/book1.jpg',
          '/StudyGuide/enlightenment/book2.jpeg',
          '/StudyGuide/enlightenment/book3.jpeg',
          '/StudyGuide/enlightenment/book4.jpg',
        ]
      }
    ],
  },
];

// 学習ガイドを表示するコンポーネント
const StudyGuide: React.FC = () => {
  const [open, setOpen] = useState(false); // 画像ダイアログの開閉状態
  const [selectedImage, setSelectedImage] = useState(''); // 選択された画像のURL
  const paperWidth = 1000; // Paperコンポーネントの最大幅

  // 画像をクリックした際にダイアログを開く処理
  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // ダイアログを閉じる処理
  const handleClose = () => {
    setOpen(false);
  };

  // スライダーの設定
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        <Paper elevation={6} sx={{ maxWidth: paperWidth, width: '100%', padding: 2 }}>
          {/* セクションタイトル */}
          <Typography variant="h5" color="#20C0F3" sx={{ textAlign: 'left', margin: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold' }}>
            <LightbulbOutlinedIcon />
            個人学習
          </Typography>
          {/* 学習ガイドデータをマップして表示 */}
          {studyGuide.map((study, index) => (
            <Box key={index} sx={{ margin: 2 }}>
              <Typography variant="h6" color="primary.main" sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
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
                    {/* 画像がある場合はスライダーを表示 */}
                    <Box sx={{ width: 160, height: 90, marginLeft: 2 }}>
                      {achievement.images.length > 0 ? (
                        <Slider {...settings}>
                          {achievement.images.map((image, imageIndex) => (
                            <div key={imageIndex} onClick={() => handleClickOpen(image)}>
                              <img src={image} alt={`Image of ${achievement.content}`} style={{ width: '100%', maxHeight: 75, objectFit: 'contain', cursor: 'pointer' }} />
                            </div>
                          ))}
                        </Slider>
                      ) : null}
                    </Box>
                    {/* URLがある場合はリンクを表示 */}
                    {achievement.url && (
                      <Link href={achievement.url} target="_blank" rel="noopener">
                        React hooks<br></br>
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
      {/* 画像ダイアログ */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default StudyGuide;
