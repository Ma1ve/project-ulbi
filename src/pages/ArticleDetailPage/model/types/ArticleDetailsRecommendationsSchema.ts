import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Articles';
import { Comment } from '@/entities/Comment';

export interface ArticlesDetailsRecommendationsSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;
}
