import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticlePage from './ArticlePage'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticlePage`,
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>

const Template: ComponentStory<typeof ArticlePage> = (args) => <div style={ { width: containerWidth } }>
  <ArticlePage { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
