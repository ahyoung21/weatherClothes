import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from '../store/store';

import Head from 'next/head';

import Header from '../components/common/header';
import Footer from '../components/common/footer';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Weather forecast" />
        <meta property="og:description" content="Weather forecast" />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Weather forecast</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
