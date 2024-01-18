import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './ArticlesPageViewSelector.module.scss'
import { ArticleListViewType } from 'entities/ArticleDetails'
import ListIcon from '../../../shared/assets/icons/list.svg'
import TileIcon from '../../../shared/assets/icons/tile.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticlesPageViewSelectorProps {
  className?: string
  view?: ArticleListViewType
  onViewChange?: (view: ArticleListViewType) => void
}

const viewTypes = [
  {
    view: ArticleListViewType.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleListViewType.TABLE,
    icon: TileIcon,
  },
]

export const ArticlesPageViewSelector: React.FC<ArticlesPageViewSelectorProps> =
  memo((props: ArticlesPageViewSelectorProps) => {
    const {
      className,
      view = ArticleListViewType.LIST,
      onViewChange,
    } = props

    const onClick = (view: ArticleListViewType) => () => {
      onViewChange?.(view)
    }

    return (
      <div className={ classNames(s.articlesPageViewSelector, [ className ]) }>
        {
          viewTypes.map((viewType) => (
            <Button
              key={ viewType.view }
              theme={ ButtonTheme.CLEAR }
              onClick={ onClick(viewType.view) }
            >
              <Icon
                className={ classNames('', [], { [s.selected]: viewType.view !== view }) }
                Svg={ viewType.icon }
                isPathStroke={ viewType.view === ArticleListViewType.LIST }
              />
            </Button>
          ))
        }
      </div>
    )
  })
