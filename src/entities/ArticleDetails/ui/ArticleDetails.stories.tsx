import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleDetails } from './ArticleDetails'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleDetails`,
  component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => <div style={ { width: containerWidth } }>
  <ArticleDetails { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [

]


