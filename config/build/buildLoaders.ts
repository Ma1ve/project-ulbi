import webpack from 'webpack';
import { BuildOptions } from './types/config';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  // const babelLoader = {
  //   test: /.(js|jsx|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['@babel/preset-env'],
  //       plugins: [
  //         ['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }],
  //         //  isDev && require.resolve('react-refresh/babel')].filter(Boolean)
  //       ],
  //     },
  //   },
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  // const cssLoader = {
  //   test: /\.s[ac]ss$/i,
  //   use: [
  //     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: {
  //           auto: (resPath: string) => Boolean(resPath.includes('.module.')),
  //           localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
  //         },
  //       },
  //     },
  //     'sass-loader',
  //   ],
  // };

  // Если бы не использовали TS то тогда нужно было подключать babel-loader
  // Нужен для обработки jsx в ts-loader это под копотом
  //! Теперь нету занимается этим babel
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
}
