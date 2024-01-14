import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import AddCommentForm from './AddCommentForm'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'features'
const containerWidth = '600px'

export default {
  title: `${groupName}/AddCommentForm`,
  component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <div style={ { width: containerWidth } }>
  <AddCommentForm { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  onSendComment: action('onSendComment')
}
Primary.decorators = [
  StoreDecorator({
    addComments: {},
  })
]

export const PrimaryPink = Template.bind({})
PrimaryPink.args = {
  onSendComment: action('onSendComment')
}
PrimaryPink.decorators = [
  StoreDecorator({
    addComments: {},
  }),
  ThemeDecorator(Theme.PINK),
]
