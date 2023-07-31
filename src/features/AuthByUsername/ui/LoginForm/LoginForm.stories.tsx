import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginForm from './LoginForm'
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
  authForm: { username: 'username', password: '123' }
}) ]
Primary.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const WithError = Template.bind({})
WithError.args = { }
WithError.decorators = [ StoreDecorator({
  authForm: { username: 'username', password: '123', errorMessage: 'something is wrong' }
}) ]
WithError.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const Loading = Template.bind({})
Loading.args = { }
Loading.decorators = [ StoreDecorator({
  authForm: { username: 'username', password: '123', isLoading: true }
}) ]
Loading.story = {
  parameters: {
    loki: { skip: true }
  }
}
