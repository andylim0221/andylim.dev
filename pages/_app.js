import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Navbar />
      <Container />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
