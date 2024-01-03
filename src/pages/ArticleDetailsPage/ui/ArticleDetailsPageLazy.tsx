import { lazy } from 'react'

export const ArticleDetailsPageLazy = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => res(import('./ArticleDetailsPage')), 500)
}))
