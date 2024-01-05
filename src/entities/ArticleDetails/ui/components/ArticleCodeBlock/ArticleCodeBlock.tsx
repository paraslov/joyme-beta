import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ArticleCodeBlock.module.scss'

interface ArticleCodeBlockProps {
  className?: string
}

export const ArticleCodeBlock: React.FC<ArticleCodeBlockProps> = memo((props: ArticleCodeBlockProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames(s.articleCodeBlock, [ className ]) }>

    </div>
  )
})
