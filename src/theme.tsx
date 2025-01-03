import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#19857b',
    },
    info: {
      main: '#4294F7'
    },
    warning: {
      main: '#FDF451'
    },
    success: {
      main: '#5CC83B'
    },
    error: {
      main: '#B83B37'
    }
  },
});

export default theme;