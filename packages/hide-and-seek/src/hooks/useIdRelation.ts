import { useCallback, useState } from 'react'

type Item = {
  id: string
  name: string
}

export const useIdRelation = () => {
  const [collection, updateCollection] = useState<Item[]>([])

  const addItem = useCallback((name: string, id: string) => {
    updateCollection(collection => {
      if (collection.findIndex(item => item.id === id) > 0) {
        return collection
      } else {
        return [...collection, { name, id }]
      }
    })
  }, [])

  return [collection, addItem] as const
}
