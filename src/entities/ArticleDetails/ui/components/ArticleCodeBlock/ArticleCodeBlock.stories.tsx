import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleCodeBlock } from './ArticleCodeBlock'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleCodeBlock`,
  component: ArticleCodeBlock,
} as ComponentMeta<typeof ArticleCodeBlock>

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <div style={ { width: containerWidth } }>
  <ArticleCodeBlock { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [

]


