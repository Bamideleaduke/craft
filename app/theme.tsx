import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

// export { theme };

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      //   default: "#ffffff",
      paper: "#f7f7f7",
    },
    primary: {
      main: "#FF0000",
    },
    secondary: {
      main: "#FFFF00",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      //   default: "#1c1c1c",
      paper: "#252525",
    },
    primary: {
      main: "#00FF00",
    },
    secondary: {
      main: "#0000FF",
    },
  },
});

export default function MyTheme(mode: "light" | "dark") {
  return mode === "light" ? lightTheme : darkTheme;
}
