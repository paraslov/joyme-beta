import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CountrySelect } from './CountrySelect'
import { Country } from '../model/enums/Countries'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <div style={ { width: '600px' } }>
  <CountrySelect { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  value: Country.KZ,
}
