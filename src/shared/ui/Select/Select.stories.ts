import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,

  tags: ['autodocs'],

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

  // args: { onClick: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'trewr',
    options: [
      { value: '123', content: 'FIRST' },
      { value: '123', content: 'SECOND' },
    ],
  },
};
