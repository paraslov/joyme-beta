import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar { ...args } />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StoreDecorator({
    user: { authData: {} }
  })
]

export const Light = Template.bind({})
Light.args = {}

Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    user: { authData: {} }
  })
]

export const DarkNoAuth = Template.bind({})
DarkNoAuth.args = {}
DarkNoAuth.decorators = [
  StoreDecorator({
    user: { authData: undefined }
  })
]
