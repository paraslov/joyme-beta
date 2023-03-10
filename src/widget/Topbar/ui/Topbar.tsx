import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

import s from './Topbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonSize } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Topbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleAuthModal = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  return (
    <div className={ classNames(s.topbar, [ className ]) }>
      <ThemeSwitcher className={ s.themeToggler } />

      <div className={ s.appName }>
        { t('JoyMe Studios') }
      </div>

      <Button
        size={ ButtonSize.M }
        onClick={ toggleAuthModal }
      >
        { t('topbar.login') }
      </Button>

      <Modal isOpen={ isOpen } onClose={ () => setIsOpen(false) }>
        <div>{ t('bolt1') }</div>
        <div>{ t('bolt2') }</div>
      </Modal>
    </div>
  )
}
