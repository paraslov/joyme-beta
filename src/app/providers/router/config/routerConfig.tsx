import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { RoutePath } from 'shared/config/routes/routes'
import { NotFound } from 'pages/NotFound'
import { ProfilePage } from 'pages/ProfilePage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export const routeConfig: AppRouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePath.not_found,
    element: <NotFound />,
  }
]
