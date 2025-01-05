import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export const App = () => {
  return (
    <Box
      sx={{
        mt: 10,
        mb: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Stack>
        <Typography variant='h1'>
          <strong>Just Bucket</strong>
        </Typography>
        <Typography variant='subtitle1'>
          Going Everywhere.
        </Typography>
      </Stack>
    </Box>
  );
}

export default App;