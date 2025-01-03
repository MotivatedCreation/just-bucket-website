import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { AppTextLogo } from './constants';


export const App = () => {
  return (
    <>
      <Box
        sx={{
          mt: 10,
          mb: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AppTextLogo sx={{
          width: '25%',
          height: '25%'
        }} />
      </Box>
      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 2,
          mb: 2,
          color: 'text.secondary',
        }}
      >
        <Link color='inherit' href='/privacy-policy'>Privacy Policy</Link>
      </Typography>
    </>
  );
}

export default App;