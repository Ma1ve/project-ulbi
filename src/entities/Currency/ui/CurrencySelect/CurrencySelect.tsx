import { CurrencyEn } from '@/entities/Currency/model/types/currency';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';

import cls from 'CurrencySelect.module.scss';
//! ТУТ ДОЛЖЕН БЫТЬ Currency в model/types
import { Currency } from '@/shared/const/common';

import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(function CurrencySelect(props: CurrencySelectProps) {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ListBox
      readonly={readonly}
      defaultValue={t('Укажите валюту')}
      value={value}
      items={options}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      direction={'top right'}
      label="Укажите валюту"
    />
  );

  // return <Select readonly={readonly} label={'Укажите валюту'} value={value} options={options} onChange={onChangeHandler} className={classNames('', {}, [className])} />;
});
