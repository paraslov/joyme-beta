import React, { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'

import s from './Modal.module.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  storyMode?: boolean // for storybook tests only
}

const ANIMATION_DELAY = 300

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    storyMode = false,
  } = props

  const [ isClosing, setIsClosing ] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [ onClose, setIsClosing ])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler()
    }
  }, [ onCloseHandler ])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    if (!isOpen) {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [ isOpen, onKeyDown ])

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  const conditionalClasses = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing
  }

  const app = document.getElementById('appId')

  if (storyMode) return (
    <div className={ classNames(s.modal, [ className ], conditionalClasses) }>
      <div className={ s.overlay } onClick={ onCloseHandler }>
        <div className={ s.content } onClick={ onContentClick }>
          { children }
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {
        app
          ? <Portal element={ app }>
            <div className={ classNames(s.modal, [ className ], conditionalClasses) }>
              <div className={ s.overlay } onClick={ onCloseHandler }>
                <div className={ s.content } onClick={ onContentClick }>
                  { children }
                </div>
              </div>
            </div>
          </Portal>
          : <div/>
      }
    </div>
  )
}
