import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import CopyIcon from '../../assets/icons/copy.svg'

import s from './Code.module.scss'
import { Icon } from 'shared/ui/Icon/Icon'

interface CodeProps {
  className?: string
  codeText: string
}

export const Code: React.FC<CodeProps> = memo((props: CodeProps) => {
  const {
    className,
    codeText,
  } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(codeText)
  }, [ codeText ])

  return (
    <pre className={ classNames(s.wrapper, [ className ]) }>
      <Button className={ s.copyBtn } onClick={ onCopy }>
        <Icon Svg={ CopyIcon } isPathStroke={ true } />
      </Button>

      <code className={ s.code }>
        { codeText }
      </code>
    </pre>
  )
})
