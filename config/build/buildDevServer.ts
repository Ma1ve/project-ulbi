import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // Позволяет проксировать запросы через корневую страницу
    // тк мы создаём SPA где есть одна html
    historyApiFallback: true,
    hot: true,
  };
}
