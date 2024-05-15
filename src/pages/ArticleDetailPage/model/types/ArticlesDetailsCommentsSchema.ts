import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';

export interface ArticlesDetailsCommentsSchema extends EntityState<Comment, string> {
  isLoading?: boolean;
  error?: string;
}
