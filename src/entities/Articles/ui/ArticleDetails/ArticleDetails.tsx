import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticlesDetailsData, getArticlesDetailsError, getArticlesDetailsIsLoading } from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducerList = {
  article: articleDetailsReducer,
};

export const ArticleDetails = memo(function ArticleDetails(props: ArticleDetailsProps) {
  const { className, id } = props;
  const { t } = useTranslation();

  const article = useSelector(getArticlesDetailsData);

  const isLoading = useSelector(getArticlesDetailsIsLoading);
  const error = useSelector(getArticlesDetailsError);

  const dispatch = useAppDispatch();

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (!article) {
    return null;
  }

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </>
    );
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузки статьи')} text={t('')} />;
  } else {
    content = (
      <>
        <HStack justify={'center'} max className={cls.avatarWrapper}>
          <Avatar src={article?.img} className={cls.avatar} />
        </HStack>
        <VStack gap={'4'}>
          <Text className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
          <HStack gap={'8'} className={cls.articleInfo}>
            <Icon Svg={EyeIcon} width={30} height={30} className={cls.icon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap={'8'} className={cls.articleInfo}>
            <Icon Svg={CalendarIcon} width={30} height={30} className={cls.icon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>

        {article?.blocks && article?.blocks.map(renderBlock)}
      </>
    );
  }
  return (
    // <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <VStack gap={'16'} className={classNames(cls.ArticleDetails, {}, [className])}>
      {content}
    </VStack>
    // </DynamicModuleLoader>
  );
});
