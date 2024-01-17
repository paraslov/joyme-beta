import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleList } from './ArticleList'
import { articleDetailsMock } from 'entities/ArticleDetails/model/mock/articleDetailsMock'
import { ArticleListViewType } from 'entities/ArticleDetails'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'entities'
const containerWidth = '1000px'

export default {
  title: `${groupName}/ArticleList`,
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <div style={ { width: containerWidth } }>
  <ArticleList { ...args } />
</div>

export const TableView = Template.bind({})
TableView.args = {
  articles: Array(16).fill(0).map((_, index) => ({ ...articleDetailsMock, id: String(index) })),
  viewType: ArticleListViewType.TABLE,
}

export const ListView = Template.bind({})
ListView.args = {
  articles: Array(3).fill(0).map((_, index) => ({ ...articleDetailsMock, id: String(index) })),
  viewType: ArticleListViewType.LIST,
}

export const TableViewLoading = Template.bind({})
TableViewLoading.args = {
  articles: Array(16).fill(0).map((_, index) => ({ ...articleDetailsMock, id: String(index) })),
  viewType: ArticleListViewType.TABLE,
  isLoading: true,
}

export const ListViewLoading = Template.bind({})
ListViewLoading.args = {
  articles: Array(3).fill(0).map((_, index) => ({ ...articleDetailsMock, id: String(index) })),
  viewType: ArticleListViewType.LIST,
  isLoading: true,
}

export const TableViewPink = Template.bind({})
TableViewPink.args = {
  articles: Array(16).fill(0).map((_, index) => ({ ...articleDetailsMock, id: String(index) })),
  viewType: ArticleListViewType.TABLE,
}
TableViewPink.decorators = [
  ThemeDecorator(Theme.PINK)
]

export const ListViewPinkLoading = Template.bind({})
ListViewPinkLoading.args = {
  articles: Array(16).fill(0).map((_, index) => ({ ...articleDetailsMock, id: String(index) })),
  viewType: ArticleListViewType.LIST,
  isLoading: true,
}
ListViewPinkLoading.decorators = [
  ThemeDecorator(Theme.PINK)
]


