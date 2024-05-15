import { StateSchema } from '@/app/providers/StoreProvider';

import { DeepPartial } from '@/shared/config/types/DeepPartial';
import { Article } from '../types/article';
import { getArticlesDetailsData } from './articleDetails';

describe('articleDetails.test', () => {
  test('selectors', () => {
    const data: DeepPartial<Article> = {
      id: '1',
      title: 'test',
    };

    const state: DeepPartial<StateSchema> = {
      //@ts-ignore
      article: { data },
    };
    expect(getArticlesDetailsData(state as StateSchema)).toEqual(data);
  });
});
