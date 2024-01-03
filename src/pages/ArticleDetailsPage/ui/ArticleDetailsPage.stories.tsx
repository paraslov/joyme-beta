import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticleDetailsPage from './ArticleDetailsPage'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/ArticleDetailsPage`,
  component: ArticleDetailsPage,
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <div style={ { width: containerWidth } }>
  <ArticleDetailsPage { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [

]


