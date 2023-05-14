import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ p: 2, mt: 8, backgroundColor: 'grey.200' }}>
      <Typography variant="body2" align="center">
        My Website &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
