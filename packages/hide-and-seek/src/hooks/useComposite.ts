import { ReactNode, useCallback, useState } from 'react'

type Item = {
  id: string
  node: ReactNode
}

export const useComposite = () => {
  const [collection, updateCollection] = useState<Item[]>([])

  const addItem = useCallback((node: ReactNode, id: string) => {
    updateCollection(collection => {
      if (collection.findIndex(item => item.id === id) > 0) {
        return collection
      } else {
        return [...collection, { node, id }]
      }
    })
  }, [])

  return [collection, addItem] as const
}
