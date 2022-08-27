import { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react'

export const useCharCount = (
  minChars: number,
  maxChars: number,
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
) => {
  const [count, setCount] = useState(0)

  const updateCount = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setCount(e.target.value.length)
      onChange && onChange(e)
    },
    [onChange, minChars, maxChars]
  )

  return [count, updateCount] as const
}
