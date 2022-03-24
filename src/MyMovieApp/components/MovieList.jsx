import { Button, Box, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MovieList ({movie}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return ( 
    <Grid item md={4} sm={6} xs={12}>
      <Card sx={{maxWidth: 350, maxHeight: 600}}>
        <CardMedia
          component="img"
          height={300}
          src={movie.Poster == "N/A" ? "https://via.placeholder.com/400" : movie.Poster}
          alt={movie.Title}
        />
        <CardContent>
          <Typography variant="h6" color="initial">
            {movie.Title}
          </Typography>
          <Typography variant="body1" color="initial">
            {movie.Year}
          </Typography>
          <CardActions>
            <Button onClick={handleOpen}>details</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Grid container spacing={2}>
                    <Grid item xs={7}>
                      <CardMedia
                        component="img"
                        src={movie.Poster == "N/A" ? "https://via.placeholder.com/400" : movie.Poster}
                        alt={movie.Title}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        {movie.Title}
                      </Typography>
                      <Typography variant="body2" id="modal-modal-description" sx={{ mt: 2 }}>
                        {movie.Genre}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>  
  )
}
