import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleTextBlockDto } from '../../../model/types/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'

import s from './ArticleTextBlock.module.scss'

interface ArticleTextBlockProps {
  className?: string
  block: ArticleTextBlockDto
}

export const ArticleTextBlock: React.FC<ArticleTextBlockProps> = memo((props: ArticleTextBlockProps) => {
  const {
    className,
    block,
  } = props

  return (
    <div className={ classNames(s.articleTextBlock, [ className ]) }>
      { block.title ? <Text title={ block.title } /> : null }
      { block.paragraphs?.length
        ? block.paragraphs.map((paragraph, index) => {
          return <Text key={ index } text={ paragraph } textSize={ TextSize.SMALL } />
        })
        : null
      }
    </div>
  )
})
