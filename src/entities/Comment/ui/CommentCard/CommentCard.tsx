import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { CommentDto } from '../../model/types/comment'

import s from './CommentCard.module.scss'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routes/routes'

interface CommentCardProps {
  className?: string
  comment: CommentDto
  isLoading?: boolean
}

export const CommentCard: React.FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props

  if (isLoading) {
    return (
      <div className={ classNames(s.commentCard, [ className ]) }>
        <div className={ s.header }>
          <Skeleton className={ s.avatar } height={ '50px' } width={ '50px' } borderRadius={ '50%' } />
          <Skeleton height={ '28px' } width={ '150px' } />
        </div>

        <Skeleton height={ '60px' } width={ '100%' } />
      </div>
    )
  }

  return (
    <div className={ classNames(s.commentCard, [ className ]) }>
      <AppLink to={ `${RoutePath.profile}/${comment.user.id}` } theme={ AppLinkTheme.PRIMARY }>
        <div className={ s.header }>
          { comment.user.avatar
            ? <Avatar className={ s.avatar } src={ comment.user.avatar } size={ AvatarSize.SMALL }/>
            : null
          }
          <Text title={ comment.user.username } />
        </div>
      </AppLink>
      <Text text={ comment.text } />
    </div>
  )
})
