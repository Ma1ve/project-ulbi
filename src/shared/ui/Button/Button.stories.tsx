import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonSize, ThemeButton } from './Button';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'shared/Button',
  component: Button,

  tags: ['autodocs'],

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlinedSizeL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlinedSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ThemeButton.OUTLINE,
    disabled: true,
    size: ButtonSize.XL,
  },
};

// Outlined.decorators = [ThemeDecorator(Theme.LIGHT)];
