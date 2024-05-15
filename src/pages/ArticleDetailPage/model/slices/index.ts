import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsSchema } from '@/entities/Articles';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  //@ts-ignore
  recommendations: articleDetailsPageRecommendationsReducer,
  //@ts-ignore
  comments: articleDetailsCommentsReducer,
});
