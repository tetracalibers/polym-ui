import { nanoid } from 'nanoid'
import { useLayoutEffect } from 'react'

export const useRegisterId = (
  id: string | undefined,
  updateFn: (id: string) => void
) => {
  useLayoutEffect(() => {
    const notUndefinedId = id ?? nanoid()
    updateFn(notUndefinedId)
  }, [])
}
