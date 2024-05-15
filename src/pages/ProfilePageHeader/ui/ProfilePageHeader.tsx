import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from '@/entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { useParams } from 'react-router-dom';
import { HStack } from '@/shared/ui/Stack';

interface ProfilePageHeader {
  className?: string;
}

export const ProilePageHeader = (props: ProfilePageHeader) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const { className } = props;

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const { id } = useParams();

  const onSave = useCallback(() => {
    //@ts-ignore
    dispatch(updateProfileData(id));
  }, [dispatch, id]);

  return (
    <HStack justify="between" className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div /* className={cls.btnsWrapper} */>
          {readonly ? (
            <Button onClick={onEdit} className={cls.editBtn} theme={ThemeButton.OUTLINE}>
              {t('Редактировать')}
            </Button>
          ) : (
            <HStack gap={'8'}>
              <Button onClick={onCancelEdit} /* className={cls.editBtn} */ theme={ThemeButton.OUTLINE_RED}>
                {t('Отменить')}
              </Button>

              <Button onClick={onSave} /* className={cls.editBtn} */ theme={ThemeButton.OUTLINE}>
                {t('Сохранить')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};
