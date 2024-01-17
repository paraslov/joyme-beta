import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleList } from './ArticleList'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleList`,
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <div style={ { width: containerWidth } }>
  <ArticleList { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = []


