import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AddCommentForm from './AddCommentForm'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/AddCommentForm`,
  component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <div style={ { width: containerWidth } }>
  <AddCommentForm { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = []


