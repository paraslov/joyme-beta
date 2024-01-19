import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from '../config/routerConfig'
import { Preloader } from 'shared/ui/Preloader/Preloader'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

const Router = () => {
  const renderWithAuth = useCallback((route: AppRouteProps) => {
    return <Route
      key={ route.path }
      path={ route.path }
      element={
        <RequireAuth authOnly={ route.authOnly }>
          <Suspense fallback={ <Preloader left={ '50%' } top={ '50%' } /> }>
            { route.element }
          </Suspense>
        </RequireAuth>
      }
    />
  }, [])

  return (
    <Routes>
      {
        routeConfig.map(renderWithAuth)
      }
    </Routes>
  )
}

export default memo(Router)
