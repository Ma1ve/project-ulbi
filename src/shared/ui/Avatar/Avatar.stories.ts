import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Avatar } from './Avatar';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import AvatarImg from './cover.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,

  tags: ['autodocs'],

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

  // args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
