import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import avatar from './avaSB.jpg'

import { Avatar, AvatarSize } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <div style={ { width: '300px' } }><Avatar { ...args } /></div>

export const Primary = Template.bind({})
Primary.args = {
  src: avatar,
}
Primary.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const Small = Template.bind({})
Small.args = {
  src: avatar,
  size: AvatarSize.SMALL,
}
Small.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const Large = Template.bind({})
Large.args = {
  src: avatar,
  size: AvatarSize.LARGE,
}
Large.story = {
  parameters: {
    loki: { skip: true }
  }
}
