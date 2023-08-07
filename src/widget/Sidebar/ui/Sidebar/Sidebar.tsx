import React, { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widget/LanguageSwitcher'
import { SidebarItemsList } from '../../model/sidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import s from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [ collapsed, setCollapsed ] = useState(false)

  const onToggleCollapsed = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div
      data-testid="sidebar"
      className={ classNames(s.sidebar, [ className ], { [s.collapsed]: collapsed }) }
    >
      <Button
        className={ s.collapsedBtn }
        data-testid="sidebar-toggle"
        onClick={ onToggleCollapsed }
        square
        size={ ButtonSize.XL }
      >
        { collapsed ? '>' : '<' }
      </Button>
      { /*<_BugButton />*/ }
      <div className={ s.links }>
        {
          SidebarItemsList.map((item) => {
            return <SidebarItem key={ item.route } item={ item } collapsed={ collapsed } />
          })
        }
      </div>

      <div className={ s.switchers }>
        <LanguageSwitcher />
      </div>
    </div>
  )
})
