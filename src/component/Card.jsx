import { Card, Avatar, Box, Stack, Typography, CssBaseline, Divider, Chip, Switch } from '@mui/material';
import { blue } from '@mui/material/colors';
import LocationOn from '@mui/icons-material/LocationOn'
import Edit from '@mui/icons-material/Edit';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/Main.css';

export default function CardExample () {
  function handleClick () {
    window.location.href="https://www.google.com";
  }

  function socmedHandle () {
    const ig = document.querySelector('.socmed');
    ig.classList.toggle('ubah')
  }
  return (
    <Card sx={{ maxWidth: 500, margin: '2rem auto' }}>
      <CssBaseline>
        <Box sx={{ p:3, display:'flex', justifyContent: 'space-around' }}>
          <Avatar variant='circle' src='img/3.jpg' sx={{ width: 100, height: 100}}/>
          <Stack spacing={0.5} sx={{ px:2, justifyContent:"center" }}>
            <Typography fontWeight={700} color="text.primary">Muklas Nur Ardiansyah</Typography>
            <Typography variant="body2" color="text.secondary">
              <LocationOn sx={{ color: blue[600], fontSize: 16 }}/> Jakarta, Indonesia
            </Typography>
          </Stack>
          <Chip
            size="small"
            onClick={handleClick}
            icon={<Edit sx={{ fontSize: 16 }}/>}
          />
    
        </Box>
        <Divider/>
        <Stack 
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ 
            px: 2, py: 2, bgColor: 'background.default'
           }}
        >
          <Chip 
            className='socmed ubah'
            size="small"
            icon={<InstagramIcon />} 
            label="Instagram" 
            variant="outlined" 
            href="https://instagram.com/iam_muklas"
            clickable
          />

          <Switch onClick={socmedHandle}/>
        </Stack>
          
        
      </CssBaseline>
    </Card>
  )
}