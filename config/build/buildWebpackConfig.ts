import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    // по умолчанию нажвание main если несколько поинтов
    // то задаём как ключ значение тут в приере
    // TEST: path.resolve(__dirname, 'src', 'index.js'),
    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      //файлы хранятся в папке build но в dev
      // режиме такая папка хранится в памяти и через нее нельлзя обратиться поэтому нужно указать publicPath
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // devtool: isDev ? 'inline-source-map' : undefined,//https://webpack.js.org/configuration/devtool/
    /* 'inline-source-map' build: slowest rebuild: slowest */
    /*'eval-cheap-module-source-map'  build: slow rebuild: fast */

    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
