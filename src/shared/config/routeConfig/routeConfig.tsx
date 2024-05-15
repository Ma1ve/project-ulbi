// import { UserRole } from '@/entities/User';
// import { AboutPage } from '@/pages/AboutPage';
// import { AdminPanelPage } from '@/pages/AdminPagePanel';
// import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
// import { ArticleEditPage } from '@/pages/ArticleEditPage';
// import { ArticlePage } from '@/pages/ArticlesPage';
// import { ForbiddenPage } from '@/pages/ForbiddenPage';
// import { MainPage } from '@/pages/MainPage';
// import { NotFoundPage } from '@/pages/NonFoundPage';
// import { ProfilePage } from '@/pages/ProfilePage';

// import { RouteProps } from 'react-router-dom';

// type AppRoutesProps = RouteProps & {
//   authOnly?: boolean;
//   roles?: UserRole[];
// };

// export enum AppRouter {
//   MAIN = 'main',
//   ABOUT = 'about',
//   PROFILE = 'profile',
//   ARTICLES = 'articles',
//   ARTICLE_CREATE = 'article_create',
//   ARTICLE_EDIT = 'article_edit',
//   ARTICLES_DETAILS = 'article_details',

//   ADMIN_PANEL = 'admin_panel',
//   FORBIDDEN = 'forbidden',
//   //last
//   NOT_FOUND = 'not_found',
// }

// export const RoutePath: Record<AppRouter, string> = {
//   [AppRouter.MAIN]: '/',
//   [AppRouter.ABOUT]: '/about',
//   [AppRouter.PROFILE]: '/profile/', // + id
//   [AppRouter.ARTICLES]: '/articles',
//   [AppRouter.ARTICLES_DETAILS]: '/articles/', // + id

//   [AppRouter.ADMIN_PANEL]: '/admin',
//   [AppRouter.FORBIDDEN]: '/forbidden',

//   [AppRouter.ARTICLE_CREATE]: '/articles/new',
//   [AppRouter.ARTICLE_EDIT]: '/articles/:id/edit',

//   [AppRouter.NOT_FOUND]: '*',
// };

// export const RouteConfig: Record<AppRouter, AppRoutesProps> = {
//   [AppRouter.ADMIN_PANEL]: {
//     path: RoutePath.admin_panel,
//     element: <AdminPanelPage />,
//     roles: [UserRole.MANAGER, UserRole.ADMIN],
//   },
//   [AppRouter.FORBIDDEN]: {
//     path: RoutePath.forbidden,
//     element: <ForbiddenPage />,
//   },
//   [AppRouter.MAIN]: {
//     path: RoutePath.main,
//     element: <MainPage />,
//   },
//   [AppRouter.ABOUT]: {
//     path: RoutePath.about,
//     element: <AboutPage />,
//   },
//   [AppRouter.PROFILE]: {
//     path: `${RoutePath.profile}:id`,
//     element: <ProfilePage />,
//     authOnly: true,
//   },

//   [AppRouter.ARTICLES]: {
//     path: RoutePath.articles,
//     element: <ArticlePage />,
//     authOnly: true,
//   },
//   [AppRouter.ARTICLE_CREATE]: {
//     path: RoutePath.article_create,
//     element: <ArticleEditPage />,
//     authOnly: true,
//   },
//   [AppRouter.ARTICLE_EDIT]: {
//     path: RoutePath.article_edit,
//     element: <ArticleEditPage />,
//     authOnly: true,
//   },
//   [AppRouter.ARTICLES_DETAILS]: {
//     path: `${RoutePath.article_details}:id`,
//     element: <ArticleDetailPage />,
//     authOnly: true,
//   },
//   [AppRouter.NOT_FOUND]: {
//     path: RoutePath.not_found,
//     element: <NotFoundPage />,
//   },
// };
