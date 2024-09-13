import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import ArticlePage from './ArticlePage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { articleDetailsMock, ArticleListViewType } from 'entities/ArticleDetails'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'page'
const containerWidth = '1000px'

export default {
  title: `${groupName}/ArticlePage`,
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>

const Template: ComponentStory<typeof ArticlePage> = (args) => <div style={ { width: containerWidth } }>
  <ArticlePage { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  StoreDecorator({
    articlesPage: {
      ids: [ 1, 2 ],
      entities: {
        1: {
          ...articleDetailsMock,
        },
        2: {
          ...articleDetailsMock,
          id: '2',
        }
      },
    }
  })
]
Primary.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const IsLoading = Template.bind({})
IsLoading.args = {}
IsLoading.decorators = [
  StoreDecorator({
    articlesPage: {
      ids: [],
      entities: {},
      isLoading: true,
    }
  })
]
IsLoading.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const TableViewPink = Template.bind({})
TableViewPink.args = {}
TableViewPink.decorators = [
  StoreDecorator({
    articlesPage: {
      ids: [ 1, 2 ],
      entities: {
        1: {
          ...articleDetailsMock,
        },
        2: {
          ...articleDetailsMock,
          id: '2',
        }
      },
      view: ArticleListViewType.TABLE,
    }
  }),
  ThemeDecorator(Theme.PINK),
]
TableViewPink.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const IsLoadingPinkTableView = Template.bind({})
IsLoadingPinkTableView.args = {}
IsLoadingPinkTableView.decorators = [
  StoreDecorator({
    articlesPage: {
      ids: [],
      entities: {},
      isLoading: true,
      view: ArticleListViewType.TABLE,
    }
  }),
  ThemeDecorator(Theme.PINK),
]
IsLoadingPinkTableView.story = {
  parameters: {
    loki: { skip: true }
  }
}
