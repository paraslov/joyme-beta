import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import PinkIcon from 'shared/assets/icons/pink.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import s from './ThemeSwitcher.module.scss'

interface ThemeTogglerProps {
  className?: string
}

const themeIcon: Record<Theme, React.SVGProps<SVGSVGElement>> = {
  [Theme.LIGHT]: <PinkIcon width={ 30 } height={ 30 } />,
  [Theme.PINK]: <DarkIcon width={ 30 } height={ 30 } />,
  [Theme.DARK]: <LightIcon width={ 30 } height={ 30 } />,
}

export const ThemeSwitcher = memo(({ className }: ThemeTogglerProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={ classNames(s.themeToggler, [ className ]) }>
      <Button
        onClick={ toggleTheme }
        theme={ ButtonTheme.CLEAR }
      >
        { themeIcon[theme] }
      </Button>
    </div>
  )
})
