// import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

// import { BuildPath } from '../build/types/config';
// import path from 'path';
// import { buildCssLoader } from '../build/loaders/buildCssLoader';

// export default ({ config }: { config: webpack.Configuration }) => {
//   const paths: BuildPath = {
//     build: '',
//     html: '',
//     entry: '',
//     src: path.resolve(__dirname, '..', '..', 'src'),
//     locales: '',
//     buildLocales: '',
//   };

//   config.resolve?.modules?.push(paths.src);
//   config.resolve?.extensions?.push('.ts', '.tsx');
//   // config.resolve?.alias = {
//   //   ...config!.resolve!.alias,
//   //   '@': paths.src,
//   // };

//   if (config.resolve && config.resolve.alias) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': paths.src,
//     };
//   }

//   // eslint-disabled-next-line
//   // config?.module?.rules = config?.module?.rules.map((rule: RuleSetRule) => {
//   //   // Находим правило которое обрабатываем svg
//   //   if (/svg/.test(rule.test as string)) {
//   //     // И если мы нашли берем и исключаем обработку svg из этого правила
//   //     return { ...rule, exclude: /\.svg$/i };
//   //   }

//   //   return rule;
//   // });

//   // config.module?.rules?.push({
//   //   test: /\.svg$/i,
//   //   use: ['@svgr/webpack'],
//   // });

//   config.module?.rules?.push(buildCssLoader(true));
//   config.plugins?.push(
//     new DefinePlugin({
//       __IS_DEV__: JSON.stringify(true),
//       __API__: JSON.stringify('http://testapi.ru'),
//       __PROJECT__: JSON.stringify('storybook'),
//     }),
//   );

//   return config;
// };
