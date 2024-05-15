import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(function LangSwitcher(props: LangSwitcherProps) {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <>
      <Button onClick={toggle} theme={ThemeButton.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])}>
        {t(short ? 'Кототкий язык' : 'Язык')}
      </Button>
    </>
  );
});
