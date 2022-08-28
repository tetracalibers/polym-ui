import { useLayoutEffect } from 'react'

export const useAssociate = (add: (name: string, id: string) => void) => {
  const associate = (name: string, id: string) => {
    useLayoutEffect(() => {
      add(name, id)
    }, [])
  }

  const getRelatedId = (id: string) => `for-${id}`
  return [associate, getRelatedId] as const
}
