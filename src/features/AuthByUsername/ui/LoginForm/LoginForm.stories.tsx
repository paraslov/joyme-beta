import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginForm } from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <div style={ { width: '600px' } }>
  <LoginForm { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = { }
