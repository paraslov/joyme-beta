import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Preloader } from './Preloader'

export default {
  title: 'shared/Preloader',
  component: Preloader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Preloader>

const Template: ComponentStory<typeof Preloader> = (args) => <Preloader { ...args } />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]
Light.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.story = {
  parameters: {
    loki: { skip: true }
  }
}
