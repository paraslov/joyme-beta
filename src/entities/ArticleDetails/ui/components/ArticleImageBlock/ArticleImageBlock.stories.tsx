import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleImageBlock } from './ArticleImageBlock'
import { ArticleBlockType } from '../../../model/types/Article'

const groupName = 'entities'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleImageBlock`,
  component: ArticleImageBlock,
} as ComponentMeta<typeof ArticleImageBlock>

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <div style={ { width: containerWidth } }>
  <ArticleImageBlock { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  block:         {
    'id': '2',
    'type': ArticleBlockType.IMAGE,
    'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
    'title': 'Рисунок 1 - скриншот сайта'
  }
}
Primary.story = {
  parameters: {
    loki: { skip: true }
  }
}


