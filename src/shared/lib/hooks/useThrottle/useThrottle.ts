import { useCallback, useRef } from 'react'

export function useThrottle<Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) {
  const throttle = useRef(false)

  return useCallback((...args: Parameters<Fn>) => {
    if (!throttle.current) {
      callback(...args)
      throttle.current = true

      setTimeout(() => {
        throttle.current = false
      }, delay)
    }
  }, [ callback, delay ])
}
