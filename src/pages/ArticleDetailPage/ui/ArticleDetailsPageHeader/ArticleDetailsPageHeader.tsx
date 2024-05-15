import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailPageHeader.module.scss';

import { Button, ThemeButton } from '@/shared/ui/Button';

import { useNavigate } from 'react-router-dom';
// import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticlesDetailsData } from '@/entities/Articles';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from '@/shared/ui/Stack';
import { RoutePath } from '@/app/providers/router/config/routeConfig';
import { getRouteArticle, getRouteArticleDetails } from '@/shared/const/router';

interface ArticleDetailPageHeaderProps {
  className?: string;
}

const ArticleDetailPageHeader = (props: ArticleDetailPageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticlesDetailsData);

  const onBackList = useCallback(() => {
    // navigate(RoutePath.articles);
    navigate(getRouteArticle());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    // navigate(`${RoutePath.article_details}${article?.id}/edit`);
    navigate(getRouteArticleDetails(article!.id));
  }, [article?.id, navigate]);

  if (!article) {
    return null;
  }

  return (
    <HStack max justify={'between'} className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
      <Button onClick={onBackList} theme={ThemeButton.OUTLINE}>
        {t('Назад')}
      </Button>

      {canEdit && (
        <Button className={cls.editBtn} onClick={onEditArticle} theme={ThemeButton.OUTLINE}>
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
};

export default memo(ArticleDetailPageHeader);
