import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <div style={ { width: '300px' } }><Input { ...args } /></div>

export const Primary = Template.bind({})
Primary.args = {
  value: 'some text here',
  label: 'Moi Label',
}
