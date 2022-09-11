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

export type MoveUpAction = {
  type: 'MOVE_UP'
  args: {
    old_pos: number
  }
}

export type MoveDownAction = {
  type: 'MOVE_DOWN'
  args: {
    old_pos: number
  }
}

export type Action =
  | InsertAction
  | DeleteAction
  | UpdateAction
  | DragSortAction
  | MoveUpAction
  | MoveDownAction

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
    .with('MOVE_UP', () => {
      const { old_pos } = (action as MoveUpAction).args
      return arrayMoveImmutable(state, old_pos, old_pos - 1)
    })
    .with('MOVE_DOWN', () => {
      const { old_pos } = (action as MoveDownAction).args
      return arrayMoveImmutable(state, old_pos, old_pos + 1)
    })
    .exhaustive()
}
