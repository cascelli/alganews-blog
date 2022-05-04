import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import Error from "next/error";
import { ThemeProvider } from "styled-components";
import { light } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

// necessário para alterar a base URL dos servicos no danielbonifacio-sdk
import "../httpConfig";

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

const progress = new ProgressBar({
  size: 2,
  color: light.primaryBackground,
  delay: 100,
});

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  // return <Component {...pageProps} />
  if (pageProps.error) {
    return (
      // <div>
      //   <h1>{pageProps.error.message}</h1>
      // </div>
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
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

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default MyApp;
