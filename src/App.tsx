import React, { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { AboutPageLazy } from './pages/About/AboutPageLazy'
import { MainPageLazy } from './pages/Main/MainPageLazy'

const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
