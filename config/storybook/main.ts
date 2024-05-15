import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        background: false,
      },
    },
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    // options: {},
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    const paths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: '',
      buildLocales: '',
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.resolve && config.resolve.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': paths.src,
      };
    }

    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook'),
      }),
    );
    return config;
  },
};
export default config;
