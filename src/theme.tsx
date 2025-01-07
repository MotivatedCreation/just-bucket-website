import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 1)',
    },
    secondary: {
      main: 'rgba(145, 145, 150, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(145, 145, 150, 1)'
    },
    info: {
      main: 'rgba(0, 150, 255, 1)'
    },
    warning: {
      main: 'rgba(255, 224, 0, 1)'
    },
    success: {
      main: 'rgba(0, 205, 0, 1)'
    },
    error: {
      main: 'rgba(220, 44, 48, 1)'
    }
  },
});

export default theme;