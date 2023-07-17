import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Preloader } from 'shared/ui/Preloader/Preloader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

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
    <Modal isOpen={ isOpen } onClose={ onClose } className={ classNames('', [ className ]) }>
      <Suspense fallback={ <Preloader left={ '50%' } top={ '50%' } /> }>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
