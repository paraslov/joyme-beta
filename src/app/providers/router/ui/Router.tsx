import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routerConfig'
import { useTranslation } from 'react-i18next'

const Router = () => {
  const { t } = useTranslation()

  return (
    <Suspense fallback={<div>{ t('common.loader') }</div>}>
      <Routes>
        {
            routeConfig.map((route) =>
              <Route
                key={route.path}
                path={route.path}
                element={
                  <div className={'page-wrapper'}>
                    {route.element}
                  </div>
                }
              />)
        }
      </Routes>
    </Suspense>
  )
}

export default Router
