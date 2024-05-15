import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div style={{ color: 'red' }}>{t('НЕТ ДОСТУПА !!!!')}</div>
    </Page>
  );
};

export default ForbiddenPage;
