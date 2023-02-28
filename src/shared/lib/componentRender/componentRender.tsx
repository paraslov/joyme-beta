import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import i18tests from '../../config/i18/i18tests'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

export interface ComponentRenderOptions {
  route?: string
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
  const {
    route = '/'
  } = options

  return render(
    <MemoryRouter initialEntries={ [ route ] }>
      <I18nextProvider i18n={ i18tests }>
        { component }
      </I18nextProvider>
    </MemoryRouter>
  )
}
