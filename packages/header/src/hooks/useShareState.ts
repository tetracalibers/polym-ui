import { useMemo } from 'react'

export const useShareState = <T>(publicState: T, dependentArray: unknown[]) => {
  const shareState = useMemo<T>(() => publicState, dependentArray)
  return shareState
}
