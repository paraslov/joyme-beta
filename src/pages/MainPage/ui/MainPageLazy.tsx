import { lazy } from 'react'
// default export
export const MainPageLazy = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => res(import('./MainPage')), 500)
}))
