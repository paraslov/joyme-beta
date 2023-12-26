import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CurrencySelect } from './CurrencySelect'
import { Currency } from '../model/enums/CurrencyEnum'

export default {
  title: 'entities/Select',
  component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <div style={ { width: '300px' } }>
  <CurrencySelect { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  value: Currency.USD,
}
