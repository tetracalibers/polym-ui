import { useState, useCallback } from 'react'

export const useShareId = (initial?: string) => {
  const [id, setId] = useState(initial)

  const updateId = useCallback((newId: string) => {
    setId(newId)
  }, [])

  return [id, updateId] as const
}
