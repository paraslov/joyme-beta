import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

import s from './Topbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Topbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [ isOpen, setIsOpen ] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

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

      <LoginModal isOpen={ isOpen } onClose={ closeModal } />
    </div>
  )
}
