import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid="AboutPage">
      <div>{t('О сайте')}</div>
    </Page>
  );
};

export default AboutPage;
