import React from 'react'
import s from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PRIMARY_OUTLINE = 'primaryOutline'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { children, to, className, theme, ...otherProps } = props
  return (
    <Link
      to={to}
      className={classNames(s.appLink, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
