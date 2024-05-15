import type { Preview } from '@storybook/react';
import 'loki/configure-react';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProviderDecorator } from '../../src/shared/config/storybook/ProviderDecorator/ProviderDecorator';

import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',

    themes: {
      default: 'light',
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#00aced' },
        { name: 'dark', class: Theme.DARK, color: '#3b5998' },
        { name: 'oorange', class: Theme.ORANGE, color: '#3b5998' },
      ],
    },
  },

  decorators: [ProviderDecorator, StyleDecorator, ThemeDecorator(Theme.DARK)],
};

export default preview;
