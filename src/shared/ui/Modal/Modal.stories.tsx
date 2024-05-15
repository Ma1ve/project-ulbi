import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Modal } from './Modal';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'widget/Modal',
  component: Modal,

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto animi quas aut reprehenderit facilis similique illum, omnis cupiditate dignissimos perferendis sequi praesentium fugit odio dolorum voluptas nemo itaque impedit inventore?',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto animi quas aut reprehenderit facilis similique illum, omnis cupiditate dignissimos perferendis sequi praesentium fugit odio dolorum voluptas nemo itaque impedit inventore?',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
