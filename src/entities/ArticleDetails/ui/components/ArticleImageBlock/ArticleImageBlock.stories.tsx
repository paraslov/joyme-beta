import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleImageBlock } from './ArticleImageBlock'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleImageBlock`,
  component: ArticleImageBlock,
} as ComponentMeta<typeof ArticleImageBlock>

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <div style={ { width: containerWidth } }>
  <ArticleImageBlock { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [

]


