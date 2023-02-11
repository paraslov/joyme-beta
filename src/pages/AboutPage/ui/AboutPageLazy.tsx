import { lazy } from 'react'
// named export
export const AboutPageLazy = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => res(import('./AboutPage').then(module=>({ default:module.AboutPage }))), 500)
}))
