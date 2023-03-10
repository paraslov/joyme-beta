import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
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

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
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

export const OutlineM = Template.bind({})
OutlineM.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Button',
  size: ButtonSize.M,
}

export const OutlineL = Template.bind({})
OutlineL.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Button',
  size: ButtonSize.L,
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Button',
  size: ButtonSize.XL,
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Button',
}

OutlineLight.decorators = [ ThemeDecorator(Theme.LIGHT) ]

export const OutlineSquareM = Template.bind({})
OutlineSquareM.args = {
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.M,
  children: '<',
}

export const OutlineSquareL = Template.bind({})
OutlineSquareL.args = {
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.L,
  children: '>',
}

export const OutlineSquareXL = Template.bind({})
OutlineSquareXL.args = {
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.XL,
  children: '+',
}

export const OutlineSquareXLLight = Template.bind({})
OutlineSquareXLLight.args = {
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.XL,
  children: '+',
}

OutlineSquareXLLight.decorators = [ ThemeDecorator(Theme.LIGHT) ]
