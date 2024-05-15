import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesDetailsData = (state: StateSchema) => state.article?.data;
export const getArticlesDetailsIsLoading = (state: StateSchema) => state.article?.isLoading;
export const getArticlesDetailsError = (state: StateSchema) => state.article?.error;
