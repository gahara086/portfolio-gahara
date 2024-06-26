import { Grid, Paper, Typography, Box } from '@mui/material';



const HomePage = () => {
  return (
    <Box sx={{ my: 4,  py: 3, flexGrow: 1, overflow: 'hidden', padding: 2 }}>
      <Paper elevation={4}>
        {/* このPaperで背景が変わってる */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="/profile.jpg"
              alt="Random"
              style={{ width: '10', height: '10' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2">
              タイトル
            </Typography>
            <Typography variant="body1">
              説明文
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  // ------------------------------------------------------
    // <Container>
    //   <Box sx={{ my: 4,  py: 3 ,textAlign: 'center' }}>{/* 上下のマージン(my)とパディング(py)を調整 */}
    //     <Box sx={{ position: 'relative', width: '10%', height: 0, marginTop: 4 }}>
    //       <Image
    //         src="/profile.jpg"
    //         alt="Profile Photo"
    //         width={10} // 画像の実際の幅
    //         height={10} // 画像の実際の高さ
    //         layout="responsive"
    //         objectFit="cover" // ここで画像のフィット方法を指定
    //       />
    //     </Box>
    //   <Typography variant="h5" component="h1" gutterBottom>
    //       <ThemeProvider theme={theme}>
    //         名前 苗字
    //       </ThemeProvider>
    //       名前 苗字

    //     </Typography>
    //     <Typography variant="subtitle1" gutterBottom>
    //       自己紹介の文章
    //     </Typography>
    //     <Typography variant="body1">
    //       : <Link href="example.com">your.email@example.com</Link> /
    //       <Link href="https://www.linkedin.com/in/yourprofile">LinkedIn Profile</Link>
    //       /atcorder account
    //     </Typography>
    //   </Box>
    // </Container>
  );
};

export default HomePage;

