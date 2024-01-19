import { MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollParams {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (params: UseInfiniteScrollParams) => {
  const { callback, triggerRef, wrapperRef } = params

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const triggerElement = triggerRef.current
    const wrapperElement = wrapperRef.current

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observer = new IntersectionObserver(([ entry ]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)
    }


    return () => {
      observer?.unobserve(triggerElement)
    }
  }, [ callback, triggerRef, wrapperRef ])
}
