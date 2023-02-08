import React from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Router } from './providers/router'
import { Navbar } from 'widget/Navbar'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>switch theme</button>
      <Router />
    </div>
  )
}

export default App
