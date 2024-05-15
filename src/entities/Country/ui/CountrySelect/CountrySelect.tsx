import { CurrencyEn } from '@/entities/Currency/model/types/currency';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

//! ТУТ ДОЛЖЕН БЫТЬ Currency в model/types
import { Country } from '@/shared/const/common';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
// import { ListBox } from '@/shared/ui/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo(function CountrySelect(props: CountrySelectProps) {
  const { className, value, onChange, readonly } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <ListBox
      readonly={readonly}
      defaultValue={'Укажите страну'}
      value={value}
      items={options}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      direction={'top right'}
      label={'Укажите страну'}
    />
  );

  // return <Select readonly={readonly} label={'Укажите страну'} value={value} options={options} onChange={onChangeHandler} className={classNames('', {}, [className])} />;
});
