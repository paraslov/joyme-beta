import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Topbar } from './Topbar'

export default {
  title: 'widget/Topbar',
  component: Topbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Topbar>

const Template: ComponentStory<typeof Topbar> = (args) => <Topbar { ...args } />

export const Dark = Template.bind({})
Dark.args = {}

export const Light = Template.bind({})
Light.args = {}

Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]
