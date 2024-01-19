import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageWrapper } from './PageWrapper'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/PageWrapper`,
  component: PageWrapper,
} as ComponentMeta<typeof PageWrapper>

const Template: ComponentStory<typeof PageWrapper> = (args) => <div style={ { width: containerWidth } }>
  <PageWrapper { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = []


