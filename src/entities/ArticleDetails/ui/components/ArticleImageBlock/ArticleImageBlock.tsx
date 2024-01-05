import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ArticleImageBlock.module.scss'

interface ArticleImageBlockProps {
  className?: string
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = memo((props: ArticleImageBlockProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames(s.articleImageBlock, [ className ]) }>

    </div>
  )
})
