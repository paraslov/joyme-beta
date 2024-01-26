import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageWrapper } from './PageWrapper'
import { action } from '@storybook/addon-actions'

const groupName = 'widget'
const containerWidth = '600px'

export default {
  title: `${groupName}/PageWrapper`,
  component: PageWrapper,
} as ComponentMeta<typeof PageWrapper>

const Template: ComponentStory<typeof PageWrapper> = (args) => <div style={ { width: containerWidth } }>
  <PageWrapper { ...args }>some page content</PageWrapper>
</div>

export const Primary = Template.bind({})
Primary.args = {
  onScrollEnd: action('onScrollEnd')
}


