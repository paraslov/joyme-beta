import { RoutePath } from 'shared/config/routes/routes'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import { SidebarItemType } from 'widget/Sidebar/model/types/sidebar'

export const SidebarItemsList: SidebarItemType[] = [
  {
    route: RoutePath.main,
    text: 'sidebar.main',
    Icon: HomeIcon,
  },
  {
    route: RoutePath.articles,
    text: 'sidebar.articles',
    Icon: ArticlesIcon,
    authOnly: true,
  },
  {
    route: `${RoutePath.profile}/0`,
    text: 'sidebar.profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    route: RoutePath.about,
    text: 'sidebar.about',
    Icon: AboutIcon,
  },
]
