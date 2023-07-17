import { Story } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import React, { Suspense } from 'react'
import i18n from '../../i18/i18'

export const TranslationDecorator = (StoryComponent: Story) => (
  <Suspense fallback={ '' }>
    <I18nextProvider i18n={ i18n }>
      <StoryComponent />
    </I18nextProvider>
  </Suspense>
)
