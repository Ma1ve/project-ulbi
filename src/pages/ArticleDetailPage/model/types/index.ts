import { ArticlesDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';
import { ArticlesDetailsCommentsSchema } from './ArticlesDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticlesDetailsCommentsSchema;
  recommendations: ArticlesDetailsRecommendationsSchema;
}
