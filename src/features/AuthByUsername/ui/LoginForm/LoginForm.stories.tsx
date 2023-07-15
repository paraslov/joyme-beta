import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <div style={ { width: '600px' } }>
  <LoginForm { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = { }
Primary.decorators = [ StoreDecorator({
  auth: { username: 'username', password: '123' }
}) ]

export const WithError = Template.bind({})
WithError.args = { }
WithError.decorators = [ StoreDecorator({
  auth: { username: 'username', password: '123', errorMessage: 'something is wrong' }
}) ]

export const Loading = Template.bind({})
Loading.args = { }
Loading.decorators = [ StoreDecorator({
  auth: { username: 'username', password: '123', isLoading: true }
}) ]
