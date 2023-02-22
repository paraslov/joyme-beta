import React from 'react'
import { useTranslation } from 'react-i18next'

export const AboutPage = (props: any) => {
  const { t } = useTranslation('about')

  return (
    <div>
      { t('title') }
    </div>
  )
}
