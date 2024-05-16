import { BuildOptions } from '../types/config';

import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => {
  const isProd = !isDev;
  return {
    test: isTsx ? /.(jsx|tsx)$/ : /.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      // cacheDirectory: true,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }],
          //  isDev && require.resolve('react-refresh/babel')].filter(Boolean)
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [(babelRemovePropsPlugin(), { props: ['data-testid'] })],
          // isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
};
