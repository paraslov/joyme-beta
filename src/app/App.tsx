import React, { useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Router } from './providers/router'
import { Topbar } from 'widget/Topbar'
import { Sidebar } from 'widget/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [ dispatch ])

  return (
    <div id={ 'appId' } className={ classNames('app', [ theme ]) }>
      <Topbar/>

      <div className={ 'content-page' }>
        <Sidebar/>
        <Router/>
      </div>
    </div>
  )
}

export default App
