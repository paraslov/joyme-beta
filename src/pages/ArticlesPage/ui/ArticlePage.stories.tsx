import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticlePage from './ArticlePage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

const groupName = 'page'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticlePage`,
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>

const Template: ComponentStory<typeof ArticlePage> = (args) => <div style={ { width: containerWidth } }>
  <ArticlePage { ...args } />
</div>

export const IsLoading = Template.bind({})
IsLoading.args = {}
IsLoading.decorators = [
  StoreDecorator({
    articlesPage: {
      ids: [ 1, 2 ],
      entities: {},
      isLoading: true,
    }
  })
]
