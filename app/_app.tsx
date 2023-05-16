import { ColorModeProvider } from "./context";
import { AppProps } from "next/app";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
