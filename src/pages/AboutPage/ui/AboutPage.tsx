import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widget/PageWrapper'

export const AboutPage = (props: any) => {
  const { t } = useTranslation('about')

  return (
    <PageWrapper>
      { t('title') }
    </PageWrapper>
  )
}
