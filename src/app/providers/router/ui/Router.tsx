import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routerConfig'

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
      </Routes>
    </Suspense>
  )
}

export default Router
