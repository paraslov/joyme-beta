import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Skeleton } from './Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/Skeleton`,
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <div style={ { width: containerWidth } }>
  <Skeleton { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  width: '200px',
}
Primary.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  width: '200px',
}
PrimaryDark.decorators = [ ThemeDecorator(Theme.LIGHT) ]
PrimaryDark.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const Circle = Template.bind({})
Circle.args = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
}
Circle.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const CirclePink = Template.bind({})
CirclePink.args = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
}
CirclePink.decorators = [ ThemeDecorator(Theme.PINK) ]
CirclePink.story = {
  parameters: {
    loki: { skip: true }
  }
}


