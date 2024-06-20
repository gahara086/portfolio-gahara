import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore my projects and learn more about my professional journey.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
