import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/player.css";
import { SongsProvider } from "../contexts/songsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SongsProvider>
        <Component {...pageProps} />
      </SongsProvider>
    </>
  );
}

export default MyApp;
