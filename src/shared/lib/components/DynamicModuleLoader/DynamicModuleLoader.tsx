import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
// import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducerList = {
  // По названию получает редьюсер из state schema Тут мы прямо сосотавляем StateSchema[name] по ключу обращаемся и достаем
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleProps {
  children: ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({ children, reducers, removeAfterUnmount = true }: DynamicModuleProps) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
