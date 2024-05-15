import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

import { Input } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';

import { Country, Currency } from '@/shared/const/common';
import { CurrencyEn, CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;

  readonly?: boolean;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  readonly,
  onChangeAvatar,
  onChangeUsername,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <HStack justify="center" className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} text={t('Произошла ошибка при загрузке')} title={t('Перезагрузите страницу')} />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap={'8'} max className={classNames(cls.ProfileCard, mods, [className])}>
      {/* <div className={cls.data}> */}
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input data-testid={'ProfileCard.name'} value={data?.name} placeholder={t('Ваше имя')} className={cls.input} onChange={onChangeFirstname} readOnly={readonly} />
      <Input data-testid={'ProfileCard.lastname'} value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} onChange={onChangeLastname} readOnly={readonly} />
      <Input value={data?.age} placeholder={t('Ваша возраст')} className={cls.input} onChange={onChangeAge} readOnly={readonly} />
      <Input value={data?.city} placeholder={t('Ваш город')} className={cls.input} onChange={onChangeCity} readOnly={readonly} />
      <Input value={data?.username} placeholder={t('Введите имя пользователя')} className={cls.input} onChange={onChangeUsername} readOnly={readonly} />
      <Input value={data?.avatar} placeholder={t('Введите ссылку')} className={cls.input} onChange={onChangeAvatar} readOnly={readonly} />

      <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />

      <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
      {/* </div> */}
    </VStack>
  );
};
