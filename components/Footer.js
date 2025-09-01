import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  return <footer>{t('footer')}</footer>;
}
