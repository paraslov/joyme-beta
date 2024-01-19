import React, { memo, MutableRefObject, ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './PageWrapper.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

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

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  return (
    <section ref={ wrapperRef } className={ classNames(s.pageWrapper, [ className ]) }>
      { children }
      <div ref={ triggerRef } />
    </section>
  )
})
