import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/Articles';
import { ArticleSortFileld, ArticleType } from '@/entities/Articles';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  //filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortFileld;
  search: string;

  type: ArticleType;

  _inited?: boolean;
}
