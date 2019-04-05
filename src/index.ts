import { useRef, useState, useLayoutEffect } from 'react'

export function useForceUpdate(): () => () => void {
  const setValue = useState(0)[1]
  return useRef(() => setValue(v => ~v)).current
}

export function useForceUpdateWithCallback(cb: () => void): () => () => void {
  const [value, setValue] = useState(0)
  const isFirstCall = useRef(true)
  const forceUpdate = () => {
    setValue(v => ~v)
  }
  useLayoutEffect(() => {
    if (!isFirstCall.current) {
      cb()
    }
    isFirstCall.current = false
  }, [value, cb])
  return useRef(forceUpdate).current
}
