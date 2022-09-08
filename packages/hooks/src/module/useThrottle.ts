import { useRef, useCallback } from 'react'

/**
 * @export
 * @template T
 * @param {(args?: T) => void} fn
 * @param {number} durationMS
 * @return {*}
 * @desc 受け取った関数をスロットリング
 * @see https://zenn.dev/catnose99/articles/0f0bb01ee6a940
 */
export function useThrottle<T>(
  fn: (args?: T) => void,
  durationMS: number // スロットルする時間
) {
  const scrollingTimer = useRef<undefined | NodeJS.Timeout>()
  return useCallback(
    (args?: T) => {
      if (scrollingTimer.current) return // すでにタイマーがセットされている場合は何もしない
      scrollingTimer.current = setTimeout(() => {
        fn(args)
        scrollingTimer.current = undefined // タイマーをリセット
      }, durationMS)
    },
    [scrollingTimer, fn, durationMS]
  )
}
