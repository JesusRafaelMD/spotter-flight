"use client"
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    
    secondary: {
      main: "#dc004e", // Pink
    },
    background: {
      default: "#f5f5f5", // Light gray
      paper: "#ffffff", // White for paper elements
    },
    text: {
      primary: "#000000", // Black for primary text
      secondary: "#555555", // Dark gray for secondary text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          //backgroundColor: "#1976d2", // Blue background for buttons
        }
      }
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});