import { useReducer, useContext, ChangeEvent, useEffect } from 'react'
import { BlockEditorContext } from '../..'
import * as Local from './addmore.reducer'
import { UpdateAction } from '../../core/actions'

export const useAddmore = (id: string) => {
  const [items, localDispatch] = useReducer(Local.reducer, [])
  const { dispatch: globalDispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>, pos: number) => {
    const localAction: Local.UpdateAction = {
      type: 'UPDATE',
      args: {
        pos,
        item: e.target.value,
      },
    }
    localDispatch(localAction)
  }

  useEffect(() => {
    const globalAction: UpdateAction = {
      type: 'UPDATE',
      args: {
        id,
        diff: {
          items,
        },
      },
    }
    globalDispatch(globalAction)
  }, [items])

  const addFn = () => {
    const localAction: Local.AddAction = {
      type: 'ADD',
      args: {},
    }
    localDispatch(localAction)
  }

  return { addFn, updateFn }
}
