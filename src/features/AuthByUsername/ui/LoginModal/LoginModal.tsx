import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

import s from './LoginModal.module.scss'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props

  return (
    <Modal isOpen={ isOpen } onClose={ onClose } className={ classNames(s.loginModal, [ className ]) }>
      <LoginForm />
    </Modal>
  )
}
