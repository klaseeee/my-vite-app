import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Footer from "./Footer";

const theme = createTheme();
const useStyles = makeStyles((theme)=> ({
  root : {
    backgroundColor: 'lightgray'
  },
  container :{
      padding: '5rem 0 0 0'
  },
  buttons : {
    padding: '1.5rem'
  },
  cardGrid : {
    padding: '20px 0'
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia : {
    height: 200
  },
  cardContent : {
    flexGrow: 1
  }
}));

const album = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function PhotoAlbum () {
  const classes = useStyles();
  return (
    <main>
        <div>
            <ThemeProvider theme={theme}>
              <Container className={classes.container} maxWidth="sm">
                <Typography variant="h2" color="text.primary" gutterBottom align="center">Photo Album</Typography>
                <Typography variant="subtitle1" color="text.secondary" align="center">Hello everyone, this is a photo album and i'm trying to make this sentence as long as possible. So we can see how does it look like on the screen</Typography>
                <div className={classes.buttons}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button 
                        sx={{ 
                        bgcolor : '#009688'
                        }} 
                        variant="contained" size="small">
                        see my photos
                      </Button>
                    </Grid> 
                    <Grid item>
                      <Button 
                        sx={{ 
                          color : '#009688'
                        }}  
                        variant="outlined" 
                        size="small">
                        see my photos
                      </Button>
                    </Grid> 
                  </Grid>
                </div>
              </Container>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {album.map((alb) => (
                    <Grid item key={alb} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          component="img"
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          alt="image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography variant="h5" gutterBottom>This is Heading</Typography>
                          <Typography variant="body2" gutterBottom>This is media card, you can use this section to describe the content</Typography>
                        </CardContent>
                        <CardActions>
                          <Button color="primary" size="small">view</Button>
                          <Button color="primary" size="small">edit</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </ThemeProvider>
        </div>
        <Footer/>
    </main>
  )
}