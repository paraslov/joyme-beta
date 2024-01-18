import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticlesPageViewSelector } from './ArticlesPageViewSelector'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticlesPageViewSelector`,
  component: ArticlesPageViewSelector,
} as ComponentMeta<typeof ArticlesPageViewSelector>

const Template: ComponentStory<typeof ArticlesPageViewSelector> = (args) => <div style={ { width: containerWidth } }>
  <ArticlesPageViewSelector { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = []


