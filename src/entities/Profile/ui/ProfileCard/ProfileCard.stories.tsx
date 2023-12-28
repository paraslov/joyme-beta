import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import avatar from '../../../../shared/assets/tests/avaSB.jpg'
import { ValidateProfileErrors } from 'entities/Profile/model/types/ValidateProfileErrors'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <div style={ { width: '900px' } }>
  <ProfileCard { ...args } />
</div>

export const Primary = Template.bind({})
Primary.args = {
  profileData: {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    username: 'Uromiru',
    age: '33',
    country: Country.SP,
    currency: Currency.RUB,
    city: 'Voronejjj',
    avatar: avatar,
  },
  readOnly: true,
}
Primary.decorators = [ StoreDecorator({ profile: {} }) ]

export const WithValidationErrors = Template.bind({})
WithValidationErrors.args = {
  profileData: {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    username: 'Uromiru',
    age: '33',
    country: Country.SP,
    currency: Currency.RUB,
    city: 'Voronejjj',
    avatar: avatar,
  },
  readOnly: true,
}
WithValidationErrors.decorators = [ StoreDecorator({
  profile: {
    errors: [ ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.NOT_FILLED_DATA ] }
}) ]

export const Loading = Template.bind({})
Loading.args = {
  profileData: {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    username: 'Uromiru',
    age: '33',
    country: Country.SP,
    currency: Currency.RUB,
    city: 'Voronejjj',
    avatar: avatar,
  },
  isLoading: true
}
Loading.decorators = [ StoreDecorator({ profile: {} }) ]

