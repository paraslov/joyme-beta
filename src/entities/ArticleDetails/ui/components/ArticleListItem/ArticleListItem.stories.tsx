import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleListItem } from './ArticleListItem'
import { articleDetailsMock } from 'entities/ArticleDetails/model/mock/articleDetailsMock'
import { ArticleListViewType } from 'entities/ArticleDetails'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'entities'
const containerWidth = '1000px'

export default {
  title: `${groupName}/ArticleListItem`,
  component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <div style={ { width: containerWidth } }>
  <ArticleListItem { ...args } />
</div>

export const TableView = Template.bind({})
TableView.args = {
  article: articleDetailsMock,
  view: ArticleListViewType.TABLE,
}

export const ListView = Template.bind({})
ListView.args = {
  article: articleDetailsMock,
  view: ArticleListViewType.LIST,
}

export const TableViewPink = Template.bind({})
TableViewPink.args = {
  article: articleDetailsMock,
  view: ArticleListViewType.TABLE,
}
TableViewPink.decorators = [
  ThemeDecorator(Theme.PINK),
]

export const ListViewLight = Template.bind({})
ListViewLight.args = {
  article: articleDetailsMock,
  view: ArticleListViewType.LIST,
}
ListViewLight.decorators = [
  ThemeDecorator(Theme.LIGHT),
]


