// In theme.js
import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
//merge mutate objects
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";

const palette = createPalette(
    merge({}, defaultTheme.palette, {
      primary: {
        main: "#ff0266", // Not far from red
      },
      secondary: {
        main: "#00ba00", // Not far from green
      },
      typography:{
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    
      }
    ));
  
  const rawTheme = {
      palette,
  };
  
  export const theme = createMuiTheme(
    merge({}, defaultTheme, rawTheme)
  );