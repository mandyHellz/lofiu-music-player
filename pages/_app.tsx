import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/player.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
