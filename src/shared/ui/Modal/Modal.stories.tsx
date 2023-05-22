import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Modal } from 'shared/ui/Modal/Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    storyMode: true,
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal { ...args }>Modal</Modal>

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
}

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
}

Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]
Light.story = {
  parameters: {
    loki: { skip: true }
  }
}
