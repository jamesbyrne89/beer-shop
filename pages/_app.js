import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const theme = {
  colors: {
    primary: "#000",
    grey: "#ccc",
  },
  fonts: {
    primary: "arial",
  },
  fontSizes: {
    headingOne: "1.75rem",
    headingTwo: "1.25rem",
    body: "1rem",
    body_sm: "0.875rem",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  a {
    text-decoration: none;
    color: black;
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-height: 100vh;
  }
`;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
