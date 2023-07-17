import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <div style={ { width: '600px', padding: '20px' } }><Text { ...args } /></div>

export const TextPrimary = Template.bind({})
TextPrimary.args = {
  title: 'Title here',
  text: 'Text here description',
}

export const TextError = Template.bind({})
TextError.args = {
  title: 'Title here',
  text: 'Text here description',
  theme: TextTheme.ERROR,
}

export const TextNoTitle = Template.bind({})
TextNoTitle.args = {
  text: 'Text here description',
}

export const TextOnlyTitle = Template.bind({})
TextOnlyTitle.args = {
  title: 'Title here',
}

export const TextPrimaryLight = Template.bind({})
TextPrimaryLight.args = {
  title: 'Title here',
  text: 'Text here description',
}
TextPrimaryLight.decorators = [ ThemeDecorator(Theme.LIGHT) ]

export const TextNoTitleLight = Template.bind({})
TextNoTitleLight.args = {
  text: 'Text here description',
}
TextNoTitleLight.decorators = [ ThemeDecorator(Theme.LIGHT) ]

export const TextOnlyTitleLight = Template.bind({})
TextOnlyTitleLight.args = {
  title: 'Title here',
}
TextOnlyTitleLight.decorators = [ ThemeDecorator(Theme.LIGHT) ]
