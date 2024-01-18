import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticlesPageViewSelector } from './ArticlesPageViewSelector'
import { ArticleListViewType } from 'entities/ArticleDetails'
import { action } from '@storybook/addon-actions'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'feature'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticlesPageViewSelector`,
  component: ArticlesPageViewSelector,
} as ComponentMeta<typeof ArticlesPageViewSelector>

const Template: ComponentStory<typeof ArticlesPageViewSelector> = (args) => <div style={ { width: containerWidth } }>
  <ArticlesPageViewSelector { ...args } />
</div>

export const ListView = Template.bind({})
ListView.args = {
  view: ArticleListViewType.LIST,
  onViewChange: action('onViewChange')
}

export const TableViewPink = Template.bind({})
TableViewPink.args = {
  view: ArticleListViewType.TABLE,
  onViewChange: action('onViewChange')
}
TableViewPink.decorators = [
  ThemeDecorator(Theme.PINK)
]


