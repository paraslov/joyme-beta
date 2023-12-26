import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <div style={ { width: '300px' } }><Select { ...args } /></div>

export const Primary = Template.bind({})
Primary.args = {
  value: '123',
  label: 'Moi Label',
  options: [
    { value: '123', content: 'first pick' },
    { value: '124', content: 'second pick' },
    { value: '125', content: 'third pick' },
  ]
}
