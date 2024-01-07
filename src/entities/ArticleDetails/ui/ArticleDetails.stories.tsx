import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { articleDetailsMock } from '../model/mock/articleDetailsMock'

const groupName = 'entities'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleDetails`,
  component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => <div style={ { width: containerWidth } }>
  <ArticleDetails { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  articleId: '1',
}

Primary.decorators = [
  StoreDecorator({
    article: {
      article: articleDetailsMock
    }
  })
]

Primary.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const Loading = Template.bind({})
Loading.args = {
  articleId: '1',
}
Loading.decorators = [
  StoreDecorator({
    article: {
      isLoading: true,
    }
  })
]
Loading.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const Error = Template.bind({})
Error.args = {
  articleId: '1',
}
Error.decorators = [
  StoreDecorator({
    article: {
      errorMessage: 'Some error occurred',
    }
  })
]


