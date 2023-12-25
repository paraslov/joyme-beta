import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import s from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getProfileReadonly, profileActions } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props: ProfilePageHeaderProps) => {
  const {
    className,
  } = props

  const { t } = useTranslation([ 'profile', 'translation' ])
  const dispatch = useAppDispatch()

  const readOnly = useSelector(getProfileReadonly)

  const onEditBtnClick = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [ dispatch ])

  const onCancelBtnClick = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [ dispatch ])

  return (
    <div className={ classNames(s.profilePageHeader, [ className ]) }>
      <Text title={ t('title') } />

      {
        readOnly
          ? <Button className={ s.editBtn } theme={ ButtonTheme.OUTLINE } onClick={ () => onEditBtnClick() }>
            { t('editBtn') }
          </Button>
          : <>
            <Button className={ s.editBtn } theme={ ButtonTheme.WARNING } onClick={ onCancelBtnClick }>
              { t('btn.cancelBtn', { ns: 'translation' }) }
            </Button>
            <Button className={ s.saveBtn } theme={ ButtonTheme.OUTLINE } onClick={ onCancelBtnClick }>
              { t('btn.saveBtn', { ns: 'translation' }) }
            </Button>
          </>
      }
    </div>
  )
}
