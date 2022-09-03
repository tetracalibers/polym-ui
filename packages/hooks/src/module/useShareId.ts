import { useState, useCallback } from 'react'

export const useShareId = () => {
  const [id, setId] = useState<string>()

  const updateId = useCallback((newId: string) => {
    setId(newId)
  }, [])

  return [id, updateId] as const
}
