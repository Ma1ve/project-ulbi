import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleTextBlock } from '@/entities/Articles/model/types/article';
import { Text } from '@/shared/ui/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(function ArticleTextBlockComponent(props: ArticleTextBlockComponentProps) {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text key={index} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
