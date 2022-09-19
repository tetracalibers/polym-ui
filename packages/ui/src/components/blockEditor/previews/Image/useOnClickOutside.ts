import { RefObject, useEffect } from 'react'

export const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (e: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      // クリックした要素がこのコンポーネント内にあったら、処理には進まない
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return
      }
      handler(e)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
