import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { useCallback } from 'react';
import { HStack } from '@/shared/ui/Stack';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props;

  const { t } = useTranslation();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const mods: Mods = {};

  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [text, onCommentTextChange, onSendComment]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify={'between'} max className={classNames(cls.AddCommentForm, mods, [className])}>
        <Input className={cls.input} placeholder={t('Введите текст комментария')} value={text} onChange={onCommentTextChange} />
        <Button onClick={onSendHandler}>{t('Введите текст комментария')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
