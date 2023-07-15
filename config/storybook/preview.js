import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator'
// import { TranslationDecorator } from '../../src/shared/config/storybook/decorators/TranslationDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
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
// addDecorator(TranslationDecorator)
addDecorator(ThemeDecorator(Theme.DARK))
