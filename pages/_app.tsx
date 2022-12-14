import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Head from 'next/head';

import Header from '../components/common/header';
import Footer from '../components/common/footer';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

const persistor = persistStore(store);

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
