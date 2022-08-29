import { nanoid } from 'nanoid'
import { useMemo } from 'react'

export const useNanoId = () => {
  const id = useMemo(() => nanoid(), [])
  return id
}
