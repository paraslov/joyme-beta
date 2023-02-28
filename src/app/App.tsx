import React, { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Router } from './providers/router'
import { Topbar } from 'widget/Topbar'
import { Sidebar } from 'widget/Sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={ classNames('app', [ theme ]) }>
      <Suspense fallback={ '' }>
        <Topbar/>

        <div className={ 'content-page' }>
          <Sidebar/>
          <Router/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
