import { FC, lazy } from 'react'
import { ProfilePageProps } from './ProfilePage'

// named export
export const ProfilePageAsync = lazy<FC<ProfilePageProps>>(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => res(import('./ProfilePage')), 500)
}))
