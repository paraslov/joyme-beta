import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import s from './ThemeSwitcher.module.scss'

interface ThemeTogglerProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeTogglerProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={ classNames(s.themeToggler, [ className ]) }>
      <Button
        onClick={ toggleTheme }
        theme={ ButtonTheme.CLEAR }
      >
        {
          theme === Theme.DARK
            ? <LightIcon width={ 30 } height={ 30 }/>
            : <DarkIcon width={ 30 } height={ 30 }/>
        }
      </Button>
    </div>
  )
}
