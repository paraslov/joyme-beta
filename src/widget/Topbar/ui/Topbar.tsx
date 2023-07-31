import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

import s from './Topbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Topbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [ isOpen, setIsOpen ] = useState(false)
  const [ isMounted, setIsMounted ] = useState(false)
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const openModal = useCallback(() => {
    setIsOpen(true)
    setIsMounted(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setIsMounted(false)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [ dispatch ])

  if (authData) {
    return (
      <div className={ classNames(s.topbar, [ className ]) }>
        <ThemeSwitcher className={ s.themeToggler } />

        <div className={ s.appName }>
          { t('JoyMe Studios') }
        </div>

        <Button
          size={ ButtonSize.M }
          onClick={ onLogout }
        >
          { t('topbar.logout') }
        </Button>
      </div>
    )
  }

  return (
    <div className={ classNames(s.topbar, [ className ]) }>
      <ThemeSwitcher className={ s.themeToggler } />

      <div className={ s.appName }>
        { t('JoyMe Studios') }
      </div>

      <Button
        size={ ButtonSize.M }
        onClick={ openModal }
      >
        { t('topbar.login') }
      </Button>

      { isMounted ? <LoginModal isOpen={ isOpen } onClose={ closeModal } /> : null }
    </div>
  )
}
