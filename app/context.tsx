// import React, { createContext, useState, useEffect, useContext } from "react";
// import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";

// interface ColorModeContextType {
//   toggleColorMode: () => void;
//   mode: "light" | "dark";
// }

// const ColorModeContext = createContext<ColorModeContextType>({
//   toggleColorMode: () => {},
//   mode: "light",
// });

// export function useColorMode(): ColorModeContextType {
//   return useContext(ColorModeContext);
// }

// export function ColorModeProvider({ children }: { children: React.ReactNode }) {
//   const [mode, setMode] = useState<"light" | "dark">(() => {
//     if (typeof window === "undefined") {
//       return "light";
//     }

//     try {
//       const storedMode = localStorage.getItem("themeMode");
//       if (storedMode === "light" || storedMode === "dark") {
//         return storedMode as "light" | "dark";
//       }
//     } catch (e) {
//       console.error("Error reading from local storage:", e);
//     }

//     return "light";
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem("themeMode", mode);
//     } catch (e) {
//       console.error("Error writing to local storage:", e);
//     }
//   }, [mode]);

//   const toggleColorMode = () => {
//     setMode((prevMode) => {
//       const newMode = prevMode === "light" ? "dark" : "light";
//       localStorage.setItem("themeMode", newMode);
//       console.log("Mode toggled:", newMode);
//       return newMode;
//     });
//   };
//   console.log("set mode ", mode);
//   const theme: Theme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   return (
//     <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// "use client";
import React, { useContext, createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import MyTheme from "./theme";
export const ColorModeContext = createContext<{
  toggleColorMode: () => void;
  mode: "light" | "dark";
}>({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeProvider = ({ children }: any) => {
  //   const [mode, setMode] = React.useState<"light" | "dark">(
  //     (typeof window !== "undefined" &&
  //       (localStorage.getItem("themeMode") as "light" | "dark")) ||
  //       "light"
  //   );
  const [mode, setMode] = React.useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    try {
      const storedMode = localStorage.getItem("themeMode");
      if (storedMode === "light" || storedMode === "dark") {
        console.log("stored mode from context", storedMode);
        return storedMode;
      }
    } catch (e) {
      console.error("Error reading from local storage:", e);
    }

    return "light";
  });

  //   React.useEffect(() => {
  //     localStorage.setItem("themeMode", mode); // store the current theme mode in localStorage
  //   }, [mode]);

  React.useEffect(() => {
    if (!mode) {
      return;
    }
    try {
      localStorage.setItem("themeMode", mode);
      console.log("theme mode from context", mode);
    } catch (e) {
      console.error("Error writing to local storage:", e);
    }
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode); // store the new mode in localStorage
          console.log("new mode", newMode);
          return newMode;
        });
      },
    }),
    []
  );
  const value = React.useMemo(
    () => ({ toggleColorMode: colorMode.toggleColorMode, mode }),
    [colorMode.toggleColorMode, mode]
  );

  const theme = MyTheme(mode);
  const Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette: {
                // palette: {
                background: {
                  default: "#ffffff",
                  paper: "#f7f7f7",
                },

                primary: {
                  main: "#FF0000",
                },
                secondary: {
                  main: "#FFFF00",
                },
              }
            : {
                background: {
                  default: "#1c1c1c",
                  paper: "#252525",
                },
                primary: {
                  main: "#00FF00",
                },
                secondary: {
                  main: "#0000FF",
                },
              }),
        },
      }),

    // theme,
    [theme]
  );
  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

// ColorModeProvider;

export const useModeContext = () => {
  return useContext(ColorModeContext);
};
