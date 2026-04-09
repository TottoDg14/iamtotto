import Layout from '../comps/Layout';
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
