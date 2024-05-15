import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Navbar } from './Navbar';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { ProviderDecorator } from '@/shared/config/storybook/ProviderDecorator/ProviderDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,

  decorators: [
    (Story) => (
      <StoreProvider initialState={{}}>
        <Story />
      </StoreProvider>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];
