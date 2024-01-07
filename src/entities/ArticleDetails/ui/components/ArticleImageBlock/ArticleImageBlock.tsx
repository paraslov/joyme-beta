import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './ArticleImageBlock.module.scss'
import { ArticleImageBlockDto } from '../../../model/types/Article'
import { Text, TextAlign } from 'shared/ui/Text/Text'

interface ArticleImageBlockProps {
  className?: string
  block: ArticleImageBlockDto
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = memo((props: ArticleImageBlockProps) => {
  const {
    className,
    block,
  } = props

  return (
    <div className={ classNames(s.articleImageBlock, [ className ]) }>
      <img src={ block.src } alt={ block.title } />
      <Text text={ block.title } textAlign={ TextAlign.CENTER } />
    </div>

  )
})
