import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Code } from './Code'

const groupName = 'shared'
const containerWidth = '600px'

export default {
  title: `${groupName}/Code`,
  component: Code,
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <div style={ { width: containerWidth } }>
  <Code { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  codeText: 'export default {\n' +
    '  title: `${groupName}/Code`,\n' +
    '  component: Code,\n' +
    '} as ComponentMeta<typeof Code>\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <div style={ { width: containerWidth } }>\n' +
    '  <Code { ...args } />\n' +
    '</div>'
}


