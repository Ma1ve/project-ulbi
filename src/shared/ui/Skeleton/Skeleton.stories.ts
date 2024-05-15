import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 200,
    height: 200,
  },
};
