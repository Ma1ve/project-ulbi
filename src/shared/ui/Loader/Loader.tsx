import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <>
      <span className={classNames(cls.Loader, {}, [className])}></span>
    </>
  );
};
