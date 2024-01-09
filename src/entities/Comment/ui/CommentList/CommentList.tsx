import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentDto } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments: CommentDto[]
  isLoading?: boolean
}

export const CommentList: React.FC<CommentListProps> = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames('', [ className ]) }>
      {
        comments?.length
          ? comments.map((comment) => <CommentCard
            key={ comment.id }
            comment={ comment }
            isLoading={ isLoading }
          />)
          : <Text text={ t('common.noComments') } />
      }
    </div>
  )
})
