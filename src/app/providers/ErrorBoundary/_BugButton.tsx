import React, { useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface _BugButtonProps {
  className?: string
}

export const _BugButton: React.FC<_BugButtonProps> = ({ className }) => {
  const [ error, setError ] = useState(false)
  const { t } = useTranslation()

  const throwError = () => {
    setError(error => !error)
  }

  useEffect(() => {
    if (error) throw new Error('boom!')
  })

  return (
    <Button onClick={ throwError } className={ classNames('', [ className ]) }>
      { t('Throw error') }
    </Button>
  )
}
