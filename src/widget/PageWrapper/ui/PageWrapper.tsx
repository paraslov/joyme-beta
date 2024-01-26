import React, { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './PageWrapper.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useLocation } from 'react-router-dom'
import { pageWrapperActions } from '../model/slice/pageWrapper'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { getScrollPositions } from '../model/selectors/pageWrapperSelectors'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageWrapperProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const PageWrapper: React.FC<PageWrapperProps> = memo((props: PageWrapperProps) => {
  const {
    className,
    children,
    onScrollEnd,
  } = props

  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const scrollData = useSelector(getScrollPositions)

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollData[pathname]
  })
  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  const onScrollHandle = useThrottle((event:  UIEvent<HTMLDivElement>) => {
    dispatch(pageWrapperActions.setScroll({
      path: pathname,
      scrollPosition: event.currentTarget.scrollTop
    }))
  }, 300)

  return (
    <section onScroll={ onScrollHandle } ref={ wrapperRef } className={ classNames(s.pageWrapper, [ className ]) }>
      { children }
      <div ref={ triggerRef } />
    </section>
  )
})
