import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentList } from './CommentList'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/CommentList`,
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <div style={ { width: containerWidth } }>
  <CommentList { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = []


