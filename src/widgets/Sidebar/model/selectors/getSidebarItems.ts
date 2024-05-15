import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
// import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../items';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/document.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { RoutePath } from '@/app/providers/router/config/routeConfig';
import { getRouteProfile } from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemList.push(
      {
        // path: RoutePath.profile + userData.id,
        path: getRouteProfile(userData.id),
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
    );
  }

  return sidebarItemList;
});
