import React from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Router } from './providers/router'
import { Navbar } from 'widget/Navbar'
import { Sidebar } from 'widget/Sidebar'

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <div className={'content-page'}>
        <Sidebar />
        <Router />
      </div>
    </div>
  )
}

export default App
