import _ from 'lodash'
import { RefObject, KeyboardEvent, useCallback, useEffect } from 'react'

export const useUnFocus = <RootElement extends HTMLElement>(
  onUnFocus: () => void,
  rootRef: RefObject<RootElement>
) => {
  // Tabによってフォーカスを外した時に処理
  const unfocusByTab = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      onUnFocus()
    }
  }

  // 範囲外クリックによってフォーカスを外した時に処理
  const unfocusByClickDocument = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (rootRef.current) {
        const innerElements = rootRef.current.querySelectorAll('*')
        // クリックした要素がこのコンポーネント内にあったら、処理には進まない
        if (_.some(innerElements, el => el === e.target)) {
          return
        }
      }
      onUnFocus()
    },
    [rootRef]
  )
  // documentにイベント設定
  useEffect(() => {
    document.addEventListener('click', unfocusByClickDocument, false)
    document.addEventListener('touchend', unfocusByClickDocument, false)
    return function cleanup() {
      document.removeEventListener('click', unfocusByClickDocument, false)
      document.removeEventListener('touchend', unfocusByClickDocument, false)
    }
  }, [])

  return unfocusByTab
}
