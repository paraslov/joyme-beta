import React, { useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Router } from './providers/router'
import { Topbar } from 'widget/Topbar'
import { Sidebar } from 'widget/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserIsInitialized, userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const isInitialized = useSelector(getUserIsInitialized)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [ dispatch ])

  return (
    <div id={ 'appId' } className={ classNames('app', [ theme ]) }>
      <Topbar/>

      <div className={ 'content-page' }>
        <Sidebar/>
        { isInitialized ? <Router/> : null }
      </div>
    </div>
  )
}

export default App
