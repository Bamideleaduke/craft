"use client";
import { useContext } from "react";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MyTheme from "./theme";
// import { ColorModeContext } from "./context";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{ padding: "0 3rem" }}>
      <Hero />
    </Box>
    // <>
    //   <Typography variant="h1">Hello World</Typography>
    // </>
  );
}
