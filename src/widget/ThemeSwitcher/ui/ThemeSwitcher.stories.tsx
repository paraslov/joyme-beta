import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher { ...args } />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const Light = Template.bind({})
Light.args = {}

Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]

export const Pink = Template.bind({})
Pink.args = {}

Pink.decorators = [ ThemeDecorator(Theme.PINK) ]
