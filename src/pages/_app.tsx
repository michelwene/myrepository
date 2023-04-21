import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Advent_Pro, Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const adventPro = Advent_Pro({
  subsets: ["latin"],
  variable: "--advent-pro",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main
        className={`${adventPro.variable} ${montserrat.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
      <ToastContainer />
    </>
  );
}
