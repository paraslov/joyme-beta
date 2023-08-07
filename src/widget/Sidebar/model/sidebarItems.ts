import React from 'react'
import { RoutePath } from 'shared/config/routes/routes'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
  route: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
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
    route: RoutePath.profile,
    text: 'sidebar.profile',
    Icon: ProfileIcon,
  },
]
