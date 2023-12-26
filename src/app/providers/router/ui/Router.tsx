import React, { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routerConfig'
import { Preloader } from 'shared/ui/Preloader/Preloader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

const Router = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = routeConfig.filter((route) => {
    return !(!isAuth && route.authOnly)
  })

  return (
    <Routes>
      {
        routes.map((route) =>
          <Route
            key={ route.path }
            path={ route.path }
            element={
              <div className={ 'page-wrapper' }>
                <Suspense fallback={ <Preloader left={ '50%' } top={ '50%' } /> }>
                  { route.element }
                </Suspense>
              </div>
            }
          />)
      }
    </Routes>

  )
}

export default memo(Router)
