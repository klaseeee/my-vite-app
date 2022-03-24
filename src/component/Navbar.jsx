import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';

export default function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }} component="nav">
      <AppBar position="fixed" enableColorOnDark
        sx={{ 
          bgcolor : props.bgColor
         }}
      >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {props.navbarIcon}
          </IconButton>
          <Typography variant="h6" color={props.color} component="div">
            {props.navbarTitle}
        </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
