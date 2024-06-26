import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { Code } from '@/shared/ui/Code';
import { ArticleCodeBlock } from '@/entities/Articles/model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(function ArticleCodeBlockComponent(props: ArticleCodeBlockComponentProps) {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
