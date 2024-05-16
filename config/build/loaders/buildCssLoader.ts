import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}

export function buildStoryBookLoader() {
  return {
    test: /\.scss$/,

    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
          implementation: require.resolve('sass'),
          additionalData: `@import "${path.resolve(__dirname, '../../src/app/styles/index.scss')}";`,
        },
      },
    ],
  };
}
