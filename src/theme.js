// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode (optional but helps)
    text: {
      primary: '#ffffff', // white text for most components
      secondary: '#cccccc', // optional lighter white for secondary text
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },
});

export default theme;
