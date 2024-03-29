import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CommentCard } from './CommentCard'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/CommentCard`,
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <div style={ { width: containerWidth } }>
  <CommentCard { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  comment: {
    id: '1',
    text: 'Some comment of mine',
    user: {
      id: 1,
      username: 'MyUserName',
    }
  },
}

