import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticaleRecommendationsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticaleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
