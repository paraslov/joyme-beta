import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleCodeBlock } from './ArticleCodeBlock'
import { ArticleBlockType } from '../../../model/types/Article'

const groupName = 'entities'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleCodeBlock`,
  component: ArticleCodeBlock,
} as ComponentMeta<typeof ArticleCodeBlock>

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <div style={ { width: containerWidth } }>
  <ArticleCodeBlock { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  block:         {
    'id': '3',
    'type': ArticleBlockType.CODE,
    // eslint-disable-next-line max-len
    'code': 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
  }
}


