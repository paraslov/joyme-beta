import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import NotFound from './NotFound'

export default {
  title: 'page/NotFound',
  component: NotFound,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound { ...args } />

export const Dark = Template.bind({})
Dark.args = {}

export const Light = Template.bind({})
Light.args = {}

Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]
