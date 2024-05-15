import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from '@/shared/const/common';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

Normal.decorators = [
  StoreDecorator({
    profile: {
      form: { name: 'asdfs', lastname: 'asfasdfasfd', age: 33, currency: Currency.EUR, country: Country.Belarus, city: 'Moscow', username: 'user' },
    },
  }),
];

export const Secondary: Story = {
  args: {},
};

Secondary.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: { name: 'asdfs', lastname: 'asfasdfasfd', age: 33, currency: Currency.EUR, country: Country.Belarus, city: 'Moscow', username: 'user' },
    },
  }),
];
