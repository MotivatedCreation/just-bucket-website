import Box from '@mui/material/Box';

import { AppTextLogo } from './constants';


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
      <AppTextLogo sx={{
        width: '25%',
        height: '25%'
      }} />
    </Box>
  );
}

export default App;