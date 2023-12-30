import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme = Theme.DARK

    if (theme === Theme.DARK) {
      newTheme = Theme.LIGHT
    } else if (theme === Theme.LIGHT) {
      newTheme = Theme.PINK
    } else if (theme === Theme.PINK) {
      newTheme = Theme.DARK
    }

    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme: theme || Theme.DARK, toggleTheme }
}
