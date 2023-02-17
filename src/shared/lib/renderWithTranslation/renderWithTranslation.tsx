import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import i18tests from '../../config/i18/i18tests'
import { I18nextProvider } from 'react-i18next'

export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <I18nextProvider i18n={ i18tests }>
      { component }
    </I18nextProvider>
  )
}
