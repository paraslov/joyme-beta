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
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal { ...args }>Modal</Modal>

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  storyMode: true,
}

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  storyMode: true,
}

Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]
