import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator'
import 'loki/configure-react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(ThemeDecorator(Theme.DARK))
