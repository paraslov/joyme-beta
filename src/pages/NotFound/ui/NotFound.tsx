import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widget/PageWrapper/PageWrapper'

const NotFound = (props: any) => {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      { t('common.notFound') }
    </PageWrapper>
  )
}

export default NotFound
