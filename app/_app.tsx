import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import { theme } from './theme';
import { AppProps } from "next/app";
import MyTheme from "./theme";
import { ColorModeProvider } from "./context";
import { useTheme } from "@emotion/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = MyTheme("dark");
  if ((Component as any).getLayout) {
    const getLayout = (Component as any).getLayout;
    return getLayout(<Component {...pageProps} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
