import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country, Currency } from '@/shared/const/common';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import avatar from '@/shared/assets/tests/cover.jpg';

const meta = {
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      name: 'asdfs',
      lastname: 'asfasdfasfd',
      age: 33,
      currency: Currency.EUR,
      country: Country.Belarus,
      city: 'Moscow',
      username: 'user',
      avatar: avatar,
    },
  },
};

// Primary.decorators = [StoreDecorator({})];

export const Secondary: Story = {
  args: {
    isLoading: true,
  },
};

export const Third: Story = {
  args: {
    error: 'wer',
  },
};

// Secondary.decorators = [StoreDecorator({})];
