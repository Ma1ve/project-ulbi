import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ProviderDecorator = (StoryComponent: StoryFn) => (
  <ThemeProvider>
    <StoryComponent />
  </ThemeProvider>
);
