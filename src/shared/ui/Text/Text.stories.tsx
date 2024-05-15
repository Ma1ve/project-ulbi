import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,

  // decorators: [
  //   (Story) => (
  //     <ThemeProvider>
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Tittle LOream',
    text: 'DESX RFDC',
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Tittle LOream',
  },
};

export const onlyText: Story = {
  args: {
    text: 'DESX RFDCddd',
  },
};

export const Error: Story = {
  args: {
    title: 'Tittle LOream',
    text: 'DESX RFDCddd',
    theme: TextTheme.ERROR,
  },
};

export const SizeL: Story = {
  args: {
    title: 'Tittle LOream',
    text: 'DESX RFDCddd',
    size: TextSize.L,
  },
};

onlyText.decorators = [ThemeDecorator(Theme.DARK)];
