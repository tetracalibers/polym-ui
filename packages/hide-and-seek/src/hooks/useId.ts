import { nanoid } from 'nanoid'
import { useMemo } from 'react'

export const useId = () => {
  const id = useMemo(() => nanoid(), [])

  return id
}
