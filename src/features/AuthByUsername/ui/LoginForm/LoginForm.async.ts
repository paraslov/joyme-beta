import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'
// named export
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => res(import('./LoginForm')), 500)
}))
