'use client'

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6CABDD',
        },
        secondary: {
            main: '#B4B4B4',
        },
        info: {
            main: '#fff', 
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Replace with your custom font
        h1: {
            fontSize: '6.8rem',
        },
        h2: {
            fontSize: '4.8rem',
        },
        h3: {
            fontSize: '3.2rem',
        },
        h4: {
            fontSize: '2rem',
        },
        subtitle1: {
            fontSize: '1.6rem'
        },
        // Add more typography styles as needed
    },
    breakpoints: {
        values: {
          mobile: 0,
          tablet: 640,
          laptop: 1024,
          desktop: 1200,
        },
      },
});

export default theme;
