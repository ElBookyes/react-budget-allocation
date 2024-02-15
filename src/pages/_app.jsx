import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AppProvider } from '../context/AppContext';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

