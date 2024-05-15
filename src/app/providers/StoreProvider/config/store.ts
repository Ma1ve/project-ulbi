import { configureStore, Reducer, ReducersMapObject, StateFromReducersMapObject, ThunkAction } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { useDispatch } from 'react-redux';
import { profileReducer } from '@/entities/Profile';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { uiReducer } from '@/features/ScrollSafe/model/slices/UISlice';
import { rtkApi } from '@/shared/api/rtkApi';
import { articleDetailsReducer } from '@/entities/Articles/model/slice/articleDetailsSlice';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer,

    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    //@ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatchT: () => AppDispatch = useDispatch;
