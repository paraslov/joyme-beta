import { FC, lazy } from 'react'
import { AddCommentFormProps } from 'features/AddComment/ui/AddCommentForm/AddCommentForm'

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => res(import('./AddCommentForm')), 500)
}))
