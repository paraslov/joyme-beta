import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { SidebarItemType } from '../types/sidebar'
import { RoutePath } from 'shared/config/routes/routes'
import HomeIcon from 'shared/assets/icons/home.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (user) => {
    let SidebarItems: SidebarItemType[]

    if (user) {
      SidebarItems = [
        {
          route: RoutePath.main,
          text: 'sidebar.main',
          Icon: HomeIcon,
        },
        {
          route: RoutePath.about,
          text: 'sidebar.about',
          Icon: AboutIcon,
        },
        {
          route: RoutePath.articles,
          text: 'sidebar.articles',
          Icon: ArticlesIcon,
          authOnly: true,
        },
        {
          route: `${RoutePath.profile}/${user.id}`,
          text: 'sidebar.profile',
          Icon: ProfileIcon,
          authOnly: true,
        },
      ]
    } else {
      SidebarItems = [
        {
          route: RoutePath.main,
          text: 'sidebar.main',
          Icon: HomeIcon,
        },
        {
          route: RoutePath.about,
          text: 'sidebar.about',
          Icon: AboutIcon,
        },
      ]
    }

    return SidebarItems
  }
)
