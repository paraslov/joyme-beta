import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getAddCommentErrorMessage,
  getAddCommentIsLoading,
  getAddCommentText
} from '../../model/selectors/addCommentSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { addCommentActions, addCommentReducer } from '../../model/slice/addComment'
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/useDynamicModuleLoader'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addComments: addCommentReducer,
}

const AddCommentForm: React.FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
  const {
    className,
    onSendComment,
  } = props

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true })

  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentText)
  const errorMessage = useSelector(getAddCommentErrorMessage)
  const isLoading = useSelector(getAddCommentIsLoading)

  const onTextChange = useCallback((text: string) => {
    dispatch(addCommentActions.setText(text))
  }, [ dispatch ])

  const onSendCommentHandler = useCallback(() => {
    onSendComment(text || '')
    dispatch(addCommentActions.setText(''))
  }, [ dispatch, onSendComment, text ])

  return (
    <div className={ classNames(s.addCommentForm, [ className ]) }>
      <Input
        className={ s.input }
        value={ text }
        placeholder={ t('comments.addCommentPlaceholder') }
        onChange={ onTextChange }
      />
      <Button theme={ ButtonTheme.OUTLINE } onClick={ onSendCommentHandler }>{ t('btn.send') }</Button>
    </div>
  )
})

export default AddCommentForm
