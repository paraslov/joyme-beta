import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleListItem } from './ArticleListItem'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleListItem`,
  component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <div style={ { width: containerWidth } }>
  <ArticleListItem { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = []


