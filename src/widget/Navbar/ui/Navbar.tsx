import React from 'react'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(s.navbar, [className])}>
      <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Main</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>About</AppLink>
    </div>
  )
}
