import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = (props: any) => {
  const { t } = useTranslation('main')
  return (
    <div>
      { t('title') }
    </div>
  )
}

export default MainPage
