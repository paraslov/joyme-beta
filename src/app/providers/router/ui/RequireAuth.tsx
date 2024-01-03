import { Navigate, useLocation } from 'react-router-dom'
import { AppRoutes, RoutePath } from 'shared/config/routes/routes'
import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'

type RequireAuthProps = {
  authOnly?: boolean
  children: JSX.Element
}

export function RequireAuth(props: RequireAuthProps) {
  const { children, authOnly } = props
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (authOnly && !auth) {
    return <Navigate to={ RoutePath[AppRoutes.MAIN] } state={ { from: location } } replace />
  }

  return children
}
