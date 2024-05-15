import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'shared/Input',
  component: Input,

  tags: ['autodocs'],

  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    placeholder: 'Type text',
    value: '123123123',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Type text',
    value: '123123123',
  },
};

Dark.decorators = [ThemeDecorator(Theme.LIGHT)];
