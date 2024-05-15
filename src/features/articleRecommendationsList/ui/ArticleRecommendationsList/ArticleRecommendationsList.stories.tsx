import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
//@
// import withMock from 'storybook-addon-mock';

const meta = {
  component: ArticleRecommendationsList,
  // decorators: [withMock],
  parameters: {
    mockAddonConfigs: {
      globalMockData: [
        {
          // An array of mock objects which will add in every story
          url: __API__,
          method: 'GET',
          status: 200,
          response: {},
        },
      ],
      ignoreQueryParams: true, // Whether or not to ignore query parameters globally
      refreshStoryOnUpdate: true, // This property re-renders the story if there's any data changes
      disableUsingOriginal: false, // This property disables the toggle (on/off) option to use the original endpoint
      disable: true, // This property disables the panel from all the stories
    },
  },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

const articles = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: 1, username: '123' },
  blocks: [],
  type: [],
  titile: '123',
  subtitle: 'adf',
};

Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: [
        { ...articles, id: '1' },
        { ...articles, id: '2' },
        { ...articles, id: '3' },
      ],
    },
  ],
};

export const Secondary: Story = {
  args: {},
};
