import { useRef, useState, useLayoutEffect } from 'react'

export function useForceUpdate(): () => void {
  const setValue = useState(0)[1]
  return useRef(() => setValue(v => ~v)).current
}

export function useForceUpdateWithCallback(cb: () => void): () => void {
  const [value, setValue] = useState(0)
  const isUpdating = useRef(0)
  useLayoutEffect(() => {
    if (isUpdating.current) {
      isUpdating.current = 0
      cb()
    }
  }, [cb, value])
  return useRef(() => {
    isUpdating.current = 1
    setValue(v => ~v)
  }).current
}
