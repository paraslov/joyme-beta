import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ArticleTextBlock.module.scss'

interface ArticleTextBlockProps {
  className?: string
}

export const ArticleTextBlock: React.FC<ArticleTextBlockProps> = memo((props: ArticleTextBlockProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames(s.articleTextBlock, [ className ]) }>

    </div>
  )
})
