import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widget/PageWrapper'

const MainPage = (props: any) => {
  const { t } = useTranslation('main')
  return (
    <PageWrapper>
      { t('title') }
    </PageWrapper>
  )
}

export default MainPage
