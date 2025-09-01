import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div>
      <h1>{t('greeting')}</h1>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
