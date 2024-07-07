import React from 'react';
import { Box, Typography, Paper, Avatar, Grid, Grow } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CommentIcon from '@mui/icons-material/Comment';  // 追加

interface Reference {
  name: string;
  relation: string;
  job: string;
  comment: string;
  avatar: string;
}

const references: Reference[] = [
  {
    name: 'TR',
    relation: '大学の同期',
    job: 'システムエンジニア',
    comment: '大学時代から、技術力の高さで周りから一目置かれていました。社会人になってからは、持ち前のポテンシャルで短所であったコミュニケーションスキルも大きく改善し、人として大きく成長しました。彼の技術と人柄が貴社にとって貴重な資産となることを願っています。',
    avatar: '/path/to/alexander.jpg'
  },
  {
    name: 'KK',
    relation: '恋人',
    job: 'ネットワークエンジニア',
    comment: 'エンジニアであるものの、職種が全く違う私の相談にいつでも乗ってくれました。傾聴力と問題解決能力が高く、力強い存在です。彼の高いコミュニケーションスキルは貴社の技術チームに新たな視点と価値をもたらすでしょう。',
    avatar: '/path/to/aiyana.jpg'
  }
];

const References: React.FC = () => {
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
        <Paper
          elevation={6}
          sx={{
            maxWidth: 1000,
            width: '100%',
            p: 4,
            backgroundColor: '#fafafa'
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'left', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <CommentIcon />
            推薦
          </Typography>
          <Grid container spacing={2}>
            {references.map((ref, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'left', p: 2 }}>
                  <Avatar src={ref.avatar} sx={{ width: 70, height: 70, marginRight: 2 }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">{ref.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{ref.relation} - {ref.job}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontStyle: 'italic', marginTop: 1 }}>
                      <FormatQuoteIcon color="action" />
                      <Typography>{ref.comment}</Typography>
                      <FormatQuoteIcon color="action" sx={{ transform: 'scaleX(-1)' }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grow>
    </Box>
  );
};

export default References;
