import { lazy } from 'react'
// default export
export const MainPageLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./MainPage')), 500)
}))

