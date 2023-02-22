import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFound = (props: any) => {
  const { t } = useTranslation()

  return (
    <div>
      { t('common.notFound') }
    </div>
  )
}

export default NotFound
