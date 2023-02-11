import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widget/LanguageSwitcher'

import s from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [ collapsed, setCollapsed ] = useState(false)

  const onToggleCollapsed = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div className={ classNames(s.sidebar, [ className ], { [s.collapsed]: collapsed }) }>
      <Button onClick={ onToggleCollapsed }>toggle</Button>

      <div className={ s.switchers }>
        <LanguageSwitcher />
      </div>
    </div>
  )
}
