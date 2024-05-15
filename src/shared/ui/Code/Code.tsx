import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import { ArticleCodeBlock } from '@/entities/Articles/model/types/article';
import { Icon } from '../Icon/Icon';

import CopyIcon from '@/shared/assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code(props: CodeProps) {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ThemeButton.CLEAR} onClick={onCopy}>
        <Icon Svg={CopyIcon} width={30} height={30} />
      </Button>
      <code>
        <div>{text}</div>
      </code>
    </pre>
  );
});
