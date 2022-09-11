import _ from 'lodash'
import { nanoid } from 'nanoid'
import { match } from 'ts-pattern'
import { Block, blockConf, BlockType } from './block'
import { arrayMoveImmutable } from 'array-move'

export type Store = {
  content: string
  type: BlockType
  key: string
  format: Block['format']
}

export type InsertAction = {
  type: 'INSERT'
  args: {
    type: BlockType
  }
}

export type DeleteAction = {
  type: 'DELETE'
  args: {
    key: string
  }
}

export type UpdateAction = {
  type: 'UPDATE'
  args: {
    key: string
    content: string
  }
}

export type DragSortAction = {
  type: 'DRAG_SORT'
  args: {
    old_pos: number
    new_pos: number
  }
}

type Action = InsertAction | DeleteAction | UpdateAction | DragSortAction

export const reducer = (state: Store[], action: Action): Store[] => {
  return match(action.type)
    .with('INSERT', () => {
      const { type } = (action as InsertAction).args
      return [
        ...state,
        {
          ...action.args,
          content: '',
          key: nanoid(),
          format: _.find(blockConf, { type })?.format,
        },
      ] as Store[]
    })
    .with('UPDATE', () => {
      const { key, content } = (action as UpdateAction).args
      return state.map(s => (s.key === key ? { ...s, content } : s))
    })
    .with('DELETE', () => {
      const { key } = (action as DeleteAction).args
      return _.reject(state, { key })
    })
    .with('DRAG_SORT', () => {
      const { old_pos, new_pos } = (action as DragSortAction).args
      const sorted = arrayMoveImmutable(state, old_pos, new_pos)
      return sorted
    })
    .exhaustive()
}
