import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleImageBlock } from '@/entities/Articles/model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(function ArticleImageBlockComponent(props: ArticleImageBlockComponentProps) {
  const { className, block } = props;

  console.log(block.src);

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} alt={block.title} />

      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
