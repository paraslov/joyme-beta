import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button { ...args } />

export const Regular = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Regular.args = {
  children: 'Button',
}

export const Clear = Template.bind({})
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Button',
}

export const Outline = Template.bind({})
Outline.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Button',
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Button',
}

OutlineLight.decorators = [ ThemeDecorator(Theme.LIGHT) ]
