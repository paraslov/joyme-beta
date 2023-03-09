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

const Template: ComponentStory<typeof Modal> = (args) => <Modal { ...args } />

export const Dark = Template.bind({})
Dark.args = {
  children: 'bolt',
  isOpen: true,
  storyMode: true,
}

export const Light = Template.bind({})
Light.args = {
  children: <div><div>div1</div><div>div2</div></div>,
  isOpen: true,
  storyMode: true,
}

Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]
