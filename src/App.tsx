import React, { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { AboutPageLazy } from './pages/About/AboutPageLazy'
import { MainPageLazy } from './pages/Main/MainPageLazy'
import { useTheme } from './theme/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>switch theme</button>

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
