import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { CommentDto } from '../../model/types/comment'

import s from './CommentCard.module.scss'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'

interface CommentCardProps {
  className?: string
  comment: CommentDto
  isLoading?: boolean
}

export const CommentCard: React.FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
  } = props

  const { t } = useTranslation()

  return (
    <div className={ classNames(s.commentCard, [ className ]) }>
      <div className={ s.header }>
        { comment.user.avatar ? <Avatar src={ comment.user.avatar } size={ AvatarSize.SMALL }/> : null }
        <Text title={ comment.user.username } />
      </div>
      <Text text={ comment.text } />
    </div>
  )
})
