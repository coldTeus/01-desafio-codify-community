import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: '#161516',
    },
    secondary: {
      main: '#3BF3FF',
    },
    text: {
      primary: '#5BE89C',
      secondary: '#E4EEF1',
      paragraph: '#7C7D80',
      title_project: '#E3E2D6',
      number_project: '#545657',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif', 
    fontFamily_sub: 'Asap Condensed, sans-serif',
  },
});

export default theme;