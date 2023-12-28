import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import avatar from 'shared/assets/tests/avaSB.jpg'

export default {
  title: 'page/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage { ...args } />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ StoreDecorator({
  profile: {
    formData: {
      firstName: 'Vasya',
      lastName: 'Pupkin',
      username: 'Uromiru',
      age: '33',
      country: Country.SP,
      currency: Currency.RUB,
      city: 'Voronejjj',
      avatar: avatar,
    },
    readonly: true,
  }
}) ]

export const Light = Template.bind({})
Light.args = {}

Light.decorators = [ ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    formData: {
      firstName: 'Vasya',
      lastName: 'Pupkin',
      username: 'Uromiru',
      age: '33',
      country: Country.SP,
      currency: Currency.RUB,
      city: 'Voronejjj',
      avatar: avatar,
    },
    readonly: true,
  }
}) ]
