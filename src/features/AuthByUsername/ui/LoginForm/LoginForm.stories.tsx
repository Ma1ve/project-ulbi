import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,

  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={Theme.LIGHT}>
        <Story />
      </ThemeProvider>
    ),
  ],

  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: 'asd', isLoading: false },
  }),
  // ThemeDecorator(Theme.LIGHT),
];

export const withError: Story = {
  args: {},
};
withError.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'qwerewr', isLoading: false },
  }),
  // ThemeDecorator(Theme.LIGHT),
];

export const withLoading: Story = {
  args: {},
};
withLoading.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: 'asd', isLoading: true },
  }),
  // ThemeDecorator(Theme.LIGHT),
];
