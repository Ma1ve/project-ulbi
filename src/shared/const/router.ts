export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ARTICLES_DETAILS = 'article_details',

    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    //last
    // NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
// ${id}
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticle = () => '/articles';

export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticleAdmin = () => '/admin';
export const getRouteArticleForbidden = () => '/forbidden';

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
