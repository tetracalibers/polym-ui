import { ChangeEvent, useState } from 'react'

export const useInput = (
  initial?: string,
  onInput?: (typedText: string) => void
) => {
  const [typedText, setTypedText] = useState(initial ?? '')

  const onTyping = (
    info: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    execOnInput = true
  ) => {
    const value = typeof info === 'string' ? info : info.target.value
    setTypedText(value)
    execOnInput && onInput && onInput(value)
  }

  return [typedText, onTyping] as const
}
