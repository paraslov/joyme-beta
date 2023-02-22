import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink { ...args } />

export const Primary = Template.bind({})
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Link',
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Link',
}

export const Outline = Template.bind({})
Outline.args = {
  theme: AppLinkTheme.PRIMARY_OUTLINE,
  children: 'Link',
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  theme: AppLinkTheme.PRIMARY_OUTLINE,
  children: 'Link',
}

OutlineLight.decorators = [ ThemeDecorator(Theme.LIGHT) ]
