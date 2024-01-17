import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Card } from './Card'
import { Text } from 'shared/ui/Text/Text'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/Card`,
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <div style={ { width: containerWidth } }>
  <Card { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  children: <Text title={ 'Title' } text={ 'text of the text' } />
}

export const PinkTheme = Template.bind({})
PinkTheme.args = {
  children: <Text title={ 'Title' } text={ 'text of the text' } />
}
PinkTheme.decorators = [
  ThemeDecorator(Theme.PINK)
]


