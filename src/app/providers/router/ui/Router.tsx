import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routerConfig'
import { Preloader } from 'shared/ui/Preloader/Preloader'

const Router = () => {
  return (
    <Routes>
      {
        routeConfig.map((route) =>
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

export default Router
