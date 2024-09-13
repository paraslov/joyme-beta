import { lazy } from 'react'

export const ArticlePageLazy = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => res(import('./ArticlePage')), 500)
}))
