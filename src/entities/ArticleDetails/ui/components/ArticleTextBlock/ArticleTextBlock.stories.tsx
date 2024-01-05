import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleTextBlock } from './ArticleTextBlock'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleTextBlock`,
  component: ArticleTextBlock,
} as ComponentMeta<typeof ArticleTextBlock>

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <div style={ { width: containerWidth } }>
  <ArticleTextBlock { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [

]


