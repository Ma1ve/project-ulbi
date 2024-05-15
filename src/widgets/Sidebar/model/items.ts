import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/document.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { RoutePath } from '@/app/providers/router/config/routeConfig';

// import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainIcon,
  },

  {
    path: RoutePath.about,
    text: 'Описание',
    Icon: AboutIcon,
  },

  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    Icon: ArticleIcon,
    authOnly: true,
  },
];
