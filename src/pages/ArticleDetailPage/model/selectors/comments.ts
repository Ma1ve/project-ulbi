import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticalCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments.isLoading;
export const getArticalCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments.error;
