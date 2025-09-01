import { appWithTranslation } from 'next-i18next';
import '../styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
