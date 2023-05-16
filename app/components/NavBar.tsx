"use client";
import { useRef, useContext } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import Logo from "../assets/crafthaven_logo.png";
import Image from "next/image";
import MyTheme from "../theme";
import { ColorModeContext } from "../context";
// import { useColorMode } from "../context";
// import { useColorMode } from "../context";
// import ToggleColorMode from "../ToggleColorMode";

export default function Navbar() {
  // let theme = useTheme();
  // console.log("themee", theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);
  const appBarRef = useRef<HTMLDivElement>(null);
  const lightTheme = MyTheme("light");
  const darkTheme = MyTheme("dark");
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  //  theme = mode === "light" ? lightTheme : darkTheme;
  // const { toggleColorMode, mode } = useColorMode();
  console.log("nav mode theme", mode);

  const handleColorModeToggle = () => {
    // console.log("nav mode 2", mode);
    // console.log("theme",theme.palette.mode)
    toggleColorMode();
  };
  return (
    <AppBar
      position="static"
      ref={appBarRef}
      sx={{ backgroundColor: "#060606", padding: "0 3rem" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
        {/* <Box component="img" src={Logo} alt="CraftH_LOgo" /> */}

        <Image
          src={Logo}
          priority={true}
          alt="CraftH_LOgo"
          style={{
            width: "90px",
            height: "50px",
          }}
        />
        {/* </Typography> */}

        <Box>
          <Button color="inherit">
            <Link href="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link href="/about">About</Link>
          </Button>
          <Button color="inherit">
            <Link href="/contact">Contact</Link>
          </Button>
        </Box>
        <Box>
          {" "}
          {/* <IconButton
            sx={{
              ml: 1,
              mr: 2,
              // border: "2px solid blue"
            }}
            onClick={toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton> */}
          {/* <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton> */}
          <IconButton onClick={() => handleColorModeToggle()} color="inherit">
            {mode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
          <Link style={{ marginRight: "1rem" }} href="/login">
            Login
          </Link>
          <Link href="/signin">Sign in</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// "use client"
// import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           My Website
//         </Typography>
//         <Box>
//           <Button color="inherit">
//             <Link href="/">Home</Link>
//           </Button>
//           <Button color="inherit">
//             <Link href="/about">About</Link>
//           </Button>
//           <Button color="inherit">
//             <Link href="/contact">Contact</Link>
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }
