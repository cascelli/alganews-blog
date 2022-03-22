import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { light } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

interface CustomAppProps extends NextPageProps {
  // Movido para o arquivo custom.d.ts e declarado como uma interface NextPageProps para simplificar
  // error?: {
  //   message: string;
  // };
}

// Sobrescreve PageProps
type AppProps<P = any> = {
  pageProps: p;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  // return <Component {...pageProps} />
  if (pageProps.error) {
    return (
      <div>
        <h1>{pageProps.error.message}</h1>
      </div>
    );
  }
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default MyApp;
