import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CommentList } from './CommentList'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/CommentList`,
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <div style={ { width: containerWidth } }>
  <CommentList { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'Some comment of mine',
      user: {
        id: 1,
        username: 'MyUserName',
      }
    },
    {
      id: '2',
      text: 'Some comment of mine, lul',
      user: {
        id: 2,
        username: 'MyUserName22',
      }
    },
  ]
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  comments: [],
  isLoading: true,
}
IsLoading.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const IsLoadingPink = Template.bind({})
IsLoadingPink.args = {
  comments: [],
  isLoading: true,
}
IsLoadingPink.decorators = [
  ThemeDecorator(Theme.PINK)
]
IsLoadingPink.story = {
  parameters: {
    loki: { skip: true }
  }
}
