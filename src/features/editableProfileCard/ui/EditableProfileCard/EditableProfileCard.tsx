import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from '@/entities/Profile';
import { Country, Currency } from '@/shared/const/common';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { VStack } from '@/shared/ui/Stack';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

export const EditableProfileCard = memo(function EditableProfileCard(props: EditableProfileCardProps) {
  const { className, id } = props;
  const { t } = useTranslation();

  const reducers: ReducerList = {
    profile: profileReducer,
  };

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      //@ts-ignore
      dispatch(fetchProfileData(id));
    }
  });

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const formData = useSelector(getProfileForm);

  const validateErrors = useSelector(getProfileValidateError);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.DATA_ERROR]: t('Ошибка DATA_ERROR'),
    [ValidateProfileError.INCORRECT_AGE]: t('Ошибка возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Ошибка дата юзер'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Ошибка страна'),
  };

  const onChangeFirstname = useCallback(
    (value?: string) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ name: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (value?: Country) => {
      //@ts-ignore
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap={'8'} max className={classNames(cls.EditableProfileCard, {}, [className])}>
        <EditableProfileCardHeader />

        {validateErrors?.length && validateErrors.map((err) => <Text data-testId={'EditableProfileCard.Error'} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err} />)}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          readonly={readonly}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
