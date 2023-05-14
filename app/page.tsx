"use client";
import { useContext } from "react";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MyTheme from "./theme";
import { ColorModeContext } from "./context";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const lightTheme = MyTheme("light");
  const darkTheme = MyTheme("dark");
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const theme = mode === "light" ? lightTheme : darkTheme;
  return (
    <Box sx={{ padding: "0 3rem" }}>
      <Box>Hello</Box>
      <Typography
        sx={
          {
            // border: "2px solid red",
          }
        }
      >
        {" "}
        {theme.palette.mode} mode
        <IconButton
          sx={{
            ml: 1,
            // border: "2px solid blue"
          }}
          onClick={toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Typography>
      <Hero />
    </Box>
  );
}
