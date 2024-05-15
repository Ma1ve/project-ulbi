import { useDispatch, useSelector, useStore } from 'react-redux';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { memo, useCallback, useEffect, useState } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '@/features/AuthByUsername/model/services/loginByUsername/loginByUsername';

import { Text, TextTheme } from '@/shared/ui/Text';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider/config/StateSchema';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { User } from '@/entities/User';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = memo(function LoginForm(props: LoginFormProps) {
  const { className, onSuccess } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  // Если сделаем так то объект всегда будет постоянный и ссылка у него меняться не будет
  const initialReducers: ReducerList = { loginForm: loginReducer };

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    //@ts-ignore
    const res = await dispatch(loginByUsername({ username, password }));
    //@ts-ignore
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    // reducers={{ loginForm: loginReducer }} Может передавать так но на каждом рендере будет создаваться новая ссылка новый объект
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t('Неправильная дата')} theme={TextTheme.ERROR} />}
        <Input type="text" className={cls.input} placeholder={t('Введите username')} onChange={onChangeUsername} value={username} />
        <Input type="text" className={cls.input} placeholder={t('Ввелите пароль')} onChange={onChangePassword} value={password} />

        <Button disabled={isLoading} theme={ThemeButton.OUTLINE} className={cls.loginBtn} onClick={onLoginClick}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
