import { Counter } from '@/entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <div>{t('Главная страница')}</div>
      <RatingCard title={'Как вам статья?'} feedbackTitle={'Оставьте отзыв о статье'} hasFeedback />
    </Page>
  );
};

export default MainPage;
