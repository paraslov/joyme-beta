import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/ArticleDetails'
import { useParams } from 'react-router-dom'

import s from './ArticleDetailsPage.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation('articleDetails')
  let { id: articleId } = useParams<{id: string}>()

  if ($PROJECT === 'storybook') {
    articleId = '1'
  }

  return (
    <div className={ classNames(s.articleDetailsPage, [ className ]) }>
      <ArticleDetails articleId={ articleId } />

      <Text className={ s.commentTitle } title={ t('comments') } />

      <CommentList comments={ [
        {
          'id': '1',
          'text': 'some comment',
          'user': {
            id: 1,
            username: 'sdfjl',
            avatar: 'https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profile-icon-male-avatar-portrait-casual-person.jpg'
          }
        },
        {
          'id': '2',
          'text': 'some comment 2',
          'user': {
            id: 1,
            username: 'sdfjl',
            avatar: 'https://ramahomesltd.com/assets/avatars/profile-pic.jpg'
          }
        }
      ] } />
    </div>
  )
}

export default memo(ArticleDetailsPage)
