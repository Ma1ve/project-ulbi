import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PageError } from './PageError';

const meta = {
  title: 'widget/PageError',
  component: PageError,

  // args: { onClick: fn() },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.LIGHT)];
