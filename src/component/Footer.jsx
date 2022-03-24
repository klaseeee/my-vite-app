import { Box, Typography } from "@mui/material";

export default function Footer (props) {
    return (
        <Box
            color={props.footerColor}
            bottom={0}
            position="static"
            component="footer"
            sx={{ bgcolor: props.footerbgColor, padding: '40px 0' }}
        >
            <Typography variant="h6" align="center" gutterBottom>{props.footerTitle}</Typography>
            <Typography variant="subtitle2" align="center" gutterBottom>Something here to give the footer a purpose</Typography>
        </Box>
    )
}