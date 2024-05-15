import { AnyAction, EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { articleDetailsSchema } from '@/entities/Articles';
import { CounterSchema } from '@/entities/Counter';
import { ProfileSchema } from '@/entities/Profile';
import { UserSchema } from '@/entities/User';
import { AddCommentFormShema } from '@/features/addCommentForm';
import { LoginSchema } from '@/features/AuthByUsername/model/types/loginSchema';
import { UISchema } from '@/features/ScrollSafe';
import { ArticleDetailsPageSchema, ArticlesDetailsCommentsSchema, ArticlesDetailsRecommendationsSchema } from '@/pages/ArticleDetailPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';
import { DeepPartial } from '@/shared/config/types/DeepPartial';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  article?: articleDetailsSchema;
  addCommentForm?: AddCommentFormShema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: reducerManager;
}

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface reducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true монитирован false демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
