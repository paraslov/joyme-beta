import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './ArticleCodeBlock.module.scss'
import { ArticleCodeBlockDto } from '../../../model/types/Article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockProps {
  className?: string
  block: ArticleCodeBlockDto
}

export const ArticleCodeBlock: React.FC<ArticleCodeBlockProps> = memo((props: ArticleCodeBlockProps) => {
  const {
    className,
    block,
  } = props

  return (
    <div className={ classNames(s.articleCodeBlock, [ className ]) }>
      <Code codeText={ block.code } />
    </div>
  )
})
