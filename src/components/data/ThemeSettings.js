import { createTheme } from '@mui/material/styles';

export const newTheme = createTheme({
    palette: {
      primary: {
        main: "#E9DB5D",
        contrastText: "#242105",
      },
      secondary: {
        main: "#A29415",
      },
      board: {
        border:  "#A29415",
        main: "#ffecb3",
      }
    },
  });

  export const cellTheme = createTheme({
    palette: {
      primary: {
        main: "#bac2a5",
      },
      secondary: {
        main: "#e5e6ca",
      }
    },
  });