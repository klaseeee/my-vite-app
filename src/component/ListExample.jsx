import { Box, CssBaseline, Link, List, ListItem, ListItemText } from "@mui/material";

export default function ListExample () {
  return (
    <Box sx={{ bgcolor: 'lightgrey' }}>
      <CssBaseline>
        <List>
            <ListItem>
                <ListItemText primary="option 1"/>
            </ListItem>
            <ListItem>
                <Link 
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferer"
                  sx={{ textDecoration: 'none' }}>
                  google
                </Link>
            </ListItem>
            <ListItem>option 2</ListItem>
        </List>
      </CssBaseline>
    </Box>
  )
}