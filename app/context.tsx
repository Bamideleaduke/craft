"use client";
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
    try {
      localStorage.setItem("themeMode", mode);
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
      //   createTheme({
      //     palette: {
      //       mode,
      //       ...(mode === "light"
      //         ? {
      //             // palette: {
      //             // palette: {
      //             background: {
      //               default: "#ffffff",
      //               paper: "#f7f7f7",
      //             },

      //             primary: {
      //               main: "#FF0000",
      //             },
      //             secondary: {
      //               main: "#FFFF00",
      //             },
      //           }
      //         : {
      //             background: {
      //               default: "#1c1c1c",
      //               paper: "#252525",
      //             },
      //             primary: {
      //               main: "#00FF00",
      //             },
      //             secondary: {
      //               main: "#0000FF",
      //             },
      //           }),
      //     },
      //   }),

      theme,
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
