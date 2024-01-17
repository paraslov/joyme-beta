import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './ArticleListItem.module.scss'
import { ArticleListViewType } from 'entities/ArticleDetails'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleListViewType
}

export const ArticleListItemSkeleton: React.FC<ArticleListItemSkeletonProps> =
  (props: ArticleListItemSkeletonProps) => {
    const {
      className,
      view,
    } = props

    if (view === ArticleListViewType.TABLE) {
      return <div className={ classNames(s.articleListItem, [ className, s[view] ]) }>
        <Card>
          <div className={ 'mb-10' }>
            <Skeleton width={ '200px' } height={ '200px' } />
          </div>

          <div className={ s.info }>
            <Skeleton className={ 'mb-10' } width={ '130px' } height={ '24px' } />
          </div>

          <Skeleton width={ '150px' } height={ '24px' } />
        </Card>
      </div>
    }

    return (
      <div className={ classNames(s.articleListItem, [ className, s[view] ]) }>
        <Card>
          <div className={ s.header }>
            <Skeleton width={ '50px' } height={ '50px' } borderRadius={ '50%' } />
            <Skeleton width={ '150px' } height={ '24px' } className={ s.username } />
            <Skeleton width={ '100px' } height={ '20px' } className={ s.date } />
          </div>

          <Skeleton width={ '350px' } height={ '34px' } className={ classNames(s.title, [ 'mb-10' ]) } />
          <Skeleton width={ '150px' } height={ '24px' } className={ s.tags } />

          <div className={ s.imageWrapper }>
            <Skeleton width={ '80%' } height={ '200px' } className={ s.img }/>
          </div>

          <div className={ s.articleTextBlock }>
            <Skeleton width={ '100%' } height={ '200px' } />
          </div>

          <div className={ s.footer }>
            <Skeleton width={ '200px' } height={ '60px' } />
            <Skeleton width={ '100px' } height={ '20px' } className={ s.views } />
          </div>
        </Card>
      </div>
    )
  }
